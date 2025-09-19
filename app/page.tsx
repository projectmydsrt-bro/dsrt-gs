"use client";

import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center space-y-4">
      <h1 className="text-2xl font-bold">Halo dari Next.js 14 🚀</h1>
      <p>Counter sederhana tanpa error:</p>
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>
        <span className="text-xl">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}
