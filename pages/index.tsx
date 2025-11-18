import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          Welcome to ALX Project 2 — Next.js Setup
        </h2>
      </main>
    </div>
  );
}
