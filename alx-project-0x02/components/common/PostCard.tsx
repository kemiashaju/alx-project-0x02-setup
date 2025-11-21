import React from "react";
import { PostProps } from "@/interfaces";

export default function PostCard(props: PostProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
      <p className="text-gray-700 mb-2">{props.content}</p>
      <span className="text-sm text-gray-500">User ID: {props.userId}</span>
    </div>
  );
}
