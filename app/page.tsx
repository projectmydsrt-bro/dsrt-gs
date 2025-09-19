"use client";

import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Halo dari Next.js 14 🚀</h2>
      <p className="text-gray-700">Counter sederhana:</p>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          -
        </button>
        <span className="text-lg">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
}
