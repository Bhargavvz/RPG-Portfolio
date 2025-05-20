import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { sendContactEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    console.log('Contact API: Received request');
    const { name, email, subject, message } = await req.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      console.log('Contact API: Missing required fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    console.log('Contact API: Connecting to MongoDB...');
    await connectDB();

    // Save to database
    console.log('Contact API: Saving contact to database...');
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });
    console.log('Contact API: Contact saved successfully', contact._id);

    // Send email notification
    console.log('Contact API: Sending email notification...');
    const emailResult = await sendContactEmail({
      name,
      email,
      subject,
      message,
    });

    if (!emailResult.success) {
      console.error('Contact API: Failed to send email:', emailResult.error);
      // Don't return error to user if email fails but database save succeeds
    }

    return NextResponse.json(
      { 
        message: 'Message sent successfully', 
        contact: {
          id: contact._id,
          name: contact.name,
          email: contact.email,
          subject: contact.subject,
          createdAt: contact.createdAt
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
} 