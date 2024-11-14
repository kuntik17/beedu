"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempted with:", email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100 relative overflow-hidden">
      {/* Honeycomb pattern background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-yellow-400"
            style={{
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              width: "100px",
              height: "115px",
              left: `${(i % 5) * 75}px`,
              top: `${Math.floor(i / 5) * 100}px`,
              transform: i % 2 === 0 ? "translateY(50px)" : "",
            }}
          />
        ))}
      </div>

      <div className="bg-white p-8 rounded-lg shadow-xl z-10 w-full max-w-md">
        <div className="flex justify-center mb-8">
          {/* Placeholder for bee logo */}
          <img src="/logo_beedu.png" alt="beedu" className="w-24 h-24" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Beedu Giriş</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-700">
              E-posta
            </label>
            <input
              id="email"
              type="email"
              placeholder="student@teamwalk.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-gray-700">
              Şifre
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
          >
            Girizzz
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-yellow-600 hover:text-yellow-800">
            Şifremi unuttum
          </a>
        </div>
      </div>
    </div>
  );
}
