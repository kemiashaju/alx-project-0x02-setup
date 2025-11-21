// components/common/UserCard.tsx

import React from "react";
import { UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md w-full max-w-sm bg-white">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-500 text-sm mt-2">
        {address.street}, {address.city}
      </p>
    </div>
  );
}
