"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [user, setUser] = useState<any>();
  const [isFetchingUser, setIsFetchingUser] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsFetchingUser(true);
    axios
      .get("http://localhost:3000/api/fetch-user")
      .then((response) => setUser(response.data.user))
      .catch((error) => console.error("Error fetching user:", error))
      .finally(() => setIsFetchingUser(false));
  }, []);

  useEffect(() => {
    if (!isFetchingUser && !user) {
      router.push("/log-in");
    }
  }, [isFetchingUser, user, router]);

  if (isFetchingUser) {
    return <p>Loading...</p>;
  }

  const handleLogout = async () => {
    const response = await axios.post("http://localhost:3000/api/log-out");

    toast.success(response.data.message);

    router.push("/log-in");
  };

  return (
    <>
      {user ? (
        <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
          <div className="rounded-t-lg h-32 overflow-hidden">
            <img
              className="object-cover object-top w-full"
              src="https://images.pexels.com/photos/28539583/pexels-photo-28539583/free-photo-of-majestic-mountain-peaks-at-sunrise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mountain"
            />
          </div>
          <div className="text-center mt-5">
            <h2 className="font-semibold">{user?.username}</h2>
            <p className="text-gray-500">
              Joined:{" "}
              {new Date(user?.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="p-4 border-t mx-8 mt-2">
            <button
              onClick={handleLogout}
              className="w-1/2 block mx-auto rounded-full bg-[#0077b6] hover:shadow-lg text-white px-6 py-2 text-sm"
            >
              Log Out
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
