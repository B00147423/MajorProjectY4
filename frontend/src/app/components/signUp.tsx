//C:\Django-Project\django-frontend\src\app\components\signUp.tsx
//C:\Django-Project\django-frontend\src\app\components\signUp.tsx
import { useState } from 'react';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Sign-up form submitted', { firstName, lastName, companyName, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold">Sign up for MyApp</h2>
        </div>

        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            <button className="w-full bg-[#2d2d2d] text-white hover:bg-[#3d3d3d] flex items-center justify-center py-2 px-4 rounded">
              <span className="mr-2 h-4 w-4"></span>
              Sign up with Google
            </button>
            <button className="w-full bg-[#2d2d2d] text-white hover:bg-[#3d3d3d] flex items-center justify-center py-2 px-4 rounded">
              <span className="mr-2 h-4 w-4"></span>
              Sign up with GitHub
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-black px-2 text-gray-300">Or sign up with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex space-x-4">
              <div>
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full bg-[#2d2d2d] border border-gray-600 text-white placeholder-gray-400 py-2 px-4 rounded"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full bg-[#2d2d2d] border border-gray-600 text-white placeholder-gray-400 py-2 px-4 rounded"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="companyName" className="sr-only">Company Name</label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                className="w-full bg-[#2d2d2d] border border-gray-600 text-white placeholder-gray-400 py-2 px-4 rounded"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
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
            <div>
              <button type="submit" className="w-full bg-[#48c45a] hover:bg-[#2D4E31] text-white py-2 px-4 rounded">
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-[#48c45a] hover:text-[#2D4E31]">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

