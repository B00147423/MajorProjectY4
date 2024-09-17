//C:\Users\beka\OneDrive\Desktop\MajorProjectY4\frontend\src\app\page.tsx
"use client"

import React from "react";
import Header from './components/Header';

export default function Home() {
  return (
    <div className="custom-theme max-h-screen overflow-y-auto bg-background text-foreground">
      <Header />
      {/* Add more content here if needed */}
    </div>
  );
}
