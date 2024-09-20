//C:\Users\bbets\OneDrive\TU DUBLIN\Year 4\sem1\Applied Human Language Technology\MajorProjectY4\frontend\src\app\components\login.tsx
'use client'
import { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { useRouter } from 'next/navigation'; // Assuming you're using Next.js routing

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [useFaceLogin, setUseFaceLogin] = useState(false);
  const webcamRef = useRef<Webcam>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Hook to navigate to different routes

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const signinData = { email, password };
    try {
      const response = await fetch('http://127.0.0.1:8000/user/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signinData),
      });

      if (response.ok) {
        router.push('/home'); // Redirect to a logged-in area
        const result = await response.json();
        console.log(result);
      } else {
        console.error('Sign-in failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold">Sign in</h2>
        </div>

        {!useFaceLogin ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-[#2d2d2d] border border-gray-600 text-white placeholder-gray-400 py-2 px-4 rounded"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full bg-[#2d2d2d] border border-gray-600 text-white placeholder-gray-400 py-2 px-4 rounded"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div>
              <button type="submit" className="w-full bg-[#48c45a] hover:bg-[#2D4E31] text-white py-2 px-4 rounded">
                Sign In
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="w-full h-48 bg-[#2d2d2d] rounded"
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
        )}
        <p className="text-center text-sm text-gray-400">
          Don’t have an account?{' '}
          <a href="/signup" className="font-medium text-[#48c45a] hover:text-[#2D4E31]">
            Sign up
          </a>
        </p>

        <p className="text-center text-sm text-gray-400">
          Want to use face recognition login?{' '}
          <button onClick={() => router.push('/CamLogin')} className="font-medium text-[#48c45a] hover:text-[#2D4E31]">
            Go to Face Recognition Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
