'use client';

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { useEffect, useState } from "react";

export default function Home() {
  // Top 버튼 노출 여부 상태
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a1a2f] text-white flex flex-col">
      {/* 네비게이션 바 */}
      <header className="w-full py-4 px-8 flex justify-between items-center bg-[#14213d] shadow-md sticky top-0 z-20">
        <span className="text-xl font-bold tracking-tight">호흡명상 전문가</span>
        <nav className="space-x-8 text-base font-medium">
          <a href="#about" className="hover:underline">소개</a>
          <a href="#skills" className="hover:underline">전문 역량</a>
          <a href="#projects" className="hover:underline">프로그램</a>
        </nav>
      </header>
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      {/* Top 버튼 */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="맨 위로 이동"
          className="fixed bottom-6 right-6 z-50 bg-[#14213d] text-white rounded-full shadow-lg p-3 hover:bg-[#1a2740] transition focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}
