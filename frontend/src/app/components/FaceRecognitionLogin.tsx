// C:\Users\bbets\OneDrive\TU DUBLIN\Year 4\sem1\Applied Human Language Technology\MajorProjectY4\frontend\src\app\components\FaceRecognitionLogin.tsx
import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { useRouter } from 'next/navigation';

const FaceRecognitionLogin = () => {
  const webcamRef = useRef<Webcam>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (webcamRef.current) {
        handleFaceLogin();
      }
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [webcamRef]);

  const handleFaceLogin = async () => {
    if (webcamRef.current) {
      setIsLoading(true);
      const faceImage = webcamRef.current.getScreenshot();

      try {
        const response = await fetch('http://127.0.0.1:8000/user/FaceRecognition/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ face_image: faceImage }),
        });

        const result = await response.json();
        if (response.ok) {
          console.log('Login successful!');
          // Redirect or perform additional actions upon successful login
          router.push('/home'); // Redirect to a logged-in area
        } else {
          setError(result.message || 'Face recognition failed');
        }
      } catch (error) {
        setError('An error occurred');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <h2>Login with Face Recognition</h2>
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="w-full h-48 bg-[#2d2d2d] rounded"
      />
      {isLoading && <p>Processing...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default FaceRecognitionLogin;
