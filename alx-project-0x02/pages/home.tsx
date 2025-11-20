// pages/home.tsx
import React from "react";
import Card from "../components/common/Card"; // ← correct path

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-6">
      <h1 className="text-4xl font-bold">Home Page</h1>

      <div className="flex flex-wrap gap-4 justify-center mt-6">
        <Card 
          title="Dynamic Card 1"
          content="This is the first reusable card component."
        />

        <Card 
          title="Dynamic Card 2"
          content="This card is rendered using props."
        />

        <Card 
          title="Dynamic Card 3"
          content="Reusable components make your UI scalable!"
        />
      </div>
    </main>
  );
}
