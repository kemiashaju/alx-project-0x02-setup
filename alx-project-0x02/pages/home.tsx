import React from "react";
import { useState } from "react";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";
import Header from "../components/layout/Header";

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([
    { title: "Hello", content: "This is card 1" },
    { title: "Welcome", content: "This is card 2" },
    { title: "Reusable", content: "This is card 3" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header />
      <section className="p-6">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <p>Welcome to the Home Page!</p>
      </section>
      <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-4">
        <h1 className="text-4xl font-bold">Home Page</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Post
        </button>

        <div className="flex flex-wrap gap-4 justify-center mt-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddPost={handleAddPost}
        />

        
      </main>
    </>
  );
}

