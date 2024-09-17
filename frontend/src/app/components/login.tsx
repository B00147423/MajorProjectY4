//C:\Django-Project\django-frontend\src\app\components\login.tsx
//C:\Django-Project\django-frontend\src\app\components\login.tsx
'use client'
import { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loginData = { email, password };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setError(null);  // Clear error on successful login
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold">Sign in</h2>
        </div>

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

        <p className="text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <a href="/signup" className="font-medium text-[#48c45a] hover:text-[#2D4E31]">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;


