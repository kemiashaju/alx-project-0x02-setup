// pages/users.tsx

import React, { useEffect, useState } from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      // Map the API structure to match UserProps
      const formattedUsers = data.map((user: any) => ({
        name: user.name,
        email: user.email,
        address: {
          street: user.address.street,
          city: user.address.city,
        },
      }));

      setUsers(formattedUsers);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading users...</p>;

  return (
    <main className="flex flex-col items-center gap-6 p-6">
      <h1 className="text-3xl font-bold">Users</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard
            key={user.email}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </main>
  );
}
