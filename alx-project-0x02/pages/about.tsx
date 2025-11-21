import React from "react"
import Header from "../components/layout/Header";
import Button from "../components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className="p-6">
        <h1 className="text-3xl font-bold">About Page</h1>
        <p>This is the About Page.</p>
      </section>
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4">
        <h1 className="text-3xl font-bold">About Page</h1>
        <div className="flex flex-wrap gap-4 mt-4">
          <Button size="small" shape="rounded-sm">
            Small Sm
          </Button>
          <Button size="medium" shape="rounded-md">
            Medium Md
          </Button>
          <Button size="large" shape="rounded-full">
            Large Full
          </Button>
        </div>
      </div>
    </>
  );
}

