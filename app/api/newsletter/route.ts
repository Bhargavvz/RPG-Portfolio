import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Newsletter from '@/models/Newsletter';
import { sendNewsletterConfirmation } from '@/lib/email';

export async function POST(req: Request) {
  try {
    console.log('Newsletter API: Received request');
    const { email } = await req.json();

    // Validate input
    if (!email) {
      console.log('Newsletter API: Email is required');
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    console.log('Newsletter API: Connecting to MongoDB...');
    await connectDB();

    // Check if already subscribed
    console.log('Newsletter API: Checking existing subscription...');
    const existingSubscriber = await Newsletter.findOne({ email });
    
    if (existingSubscriber) {
      if (existingSubscriber.status === 'active') {
        console.log('Newsletter API: Email already subscribed');
        return NextResponse.json(
          { error: 'Email already subscribed' },
          { status: 400 }
        );
      } else {
        // Reactivate subscription
        console.log('Newsletter API: Reactivating subscription');
        existingSubscriber.status = 'active';
        await existingSubscriber.save();
      }
    } else {
      // Create new subscription
      console.log('Newsletter API: Creating new subscription');
      await Newsletter.create({ email });
    }

    // Send confirmation email
    console.log('Newsletter API: Sending confirmation email...');
    const emailResult = await sendNewsletterConfirmation(email);
    
    if (!emailResult.success) {
      console.error('Newsletter API: Failed to send confirmation email:', emailResult.error);
      // Don't return error to user if email fails but database save succeeds
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter API Error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter. Please try again.' },
      { status: 500 }
    );
  }
} 