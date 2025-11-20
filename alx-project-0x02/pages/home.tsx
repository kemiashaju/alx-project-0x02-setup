// pages/home.tsx
import React from "react";
import Card from "../components/common/Card"; // ← correct path

export default function HomePage() {
  return (
    <div>
      <Card title="Hello" content="This is card 1" />
      <Card title="Welcome" content="This is card 2" />
      <Card title="Reusable" content="This is card 3" />
    </div>
  );
}
