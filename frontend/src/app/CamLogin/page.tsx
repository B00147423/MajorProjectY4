//C:\Users\bbets\OneDrive\TU DUBLIN\Year 4\sem1\Applied Human Language Technology\MajorProjectY4\frontend\src\app\CamLogin\page.tsx
"use client"
import React from 'react';
import FaceRecognitionLogin from '../components/FaceRecognitionLogin';
import Header from '../components/Header';
const LoginWithFace = () => {
    return (
      <div>
        <Header/>
        <FaceRecognitionLogin />
      </div>
    );
  };
  
  export default LoginWithFace;