import { authClient } from '@/lib/better-auth';
import { createFileRoute } from '@tanstack/react-router';
import { Camera } from 'lucide-react';
import { useEffect } from 'react';

export const Route = createFileRoute('/')({ component: App });

function App() {
  useEffect(() => {
    authClient.signUp
      .email({
        email: 'user@example.com', // user email address
        password: 'password', // user password -> min 8 characters by default
        name: 'John Doe', // user display name
        image: 'https://example.com/image.jpg', // User image URL (optional)
        callbackURL: '/dashboard', // A URL to redirect to after the user verifies their email (optional)
      })
      .then((response) => {
        if (response.error) {
          console.error('Error signing up:', response.error);
        } else {
          console.log('Sign-up successful:', response.data);
        }
      });
  }, []);
  return (
    <>
      <Camera />
      <div className='text-red-300'>hello world!!</div>
    </>
  );
}
