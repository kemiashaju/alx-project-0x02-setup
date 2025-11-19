import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-blue-600 text-white flex justify-center gap-6">
      <Link href="/home" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
    </header>
  );
}

