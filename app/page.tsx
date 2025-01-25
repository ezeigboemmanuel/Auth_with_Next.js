import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://images.pexels.com/photos/28539583/pexels-photo-28539583/free-photo-of-majestic-mountain-peaks-at-sunrise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Mountain"
        />
      </div>
      <div className="text-center mt-5">
        <h2 className="font-semibold">John Doe</h2>
        <p className="text-gray-500">Joined: 16th January, 2025</p>
      </div>

      <div className="p-4 border-t mx-8 mt-2">
        <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
          Log Out
        </button>
      </div>
    </div>
  );
}
