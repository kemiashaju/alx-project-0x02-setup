import Header from "../components/layout/Header";

export default function Posts() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p className="text-gray-700">This page will display posts.</p>
      </div>
    </>
  );
}

