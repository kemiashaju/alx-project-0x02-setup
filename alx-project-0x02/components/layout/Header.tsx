// components/layout/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-blue-600 text-white p-4 shadow-md">
      <nav className="flex justify-center gap-6">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/posts" className="hover:underline">
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;

