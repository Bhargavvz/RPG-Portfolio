import { useState } from 'react';
import toast from 'react-hot-toast';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      toast.success('🎮 Welcome to the Guild! Your scroll has been added to our records.', {
        duration: 5000,
        icon: '⚔️',
      });
      
      setEmail('');
    } catch (error) {
      toast.error('❌ The scroll was lost in the void. Please try again!', {
        duration: 5000,
        icon: '🔥',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <label htmlFor="email" className="sr-only">
          Contact Scroll
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your contact scroll"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Joining Guild...' : 'Join the Guild'}
      </button>
    </form>
  );
} 