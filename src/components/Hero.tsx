const Hero = () => (
  <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
    {/* 배경 영상 */}
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src="/meditation.mp4"
      autoPlay
      loop
      muted
      playsInline
      style={{ minHeight: '100%', minWidth: '100%' }}
    />
    {/* 그라데이션 오버레이 */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#0a1a2f] z-10" />
    {/* Hero 콘텐츠 */}
    <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 pt-32 sm:pt-40">
      <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg mb-4 text-center" style={{textShadow:'0 4px 24px #000, 0 1px 0 #fff8'}}>마음을 디자인하다</h1>
      <p className="text-base sm:text-lg text-white/80 font-medium mb-2 drop-shadow text-center" style={{textShadow:'0 2px 8px #000'}}>뇌과학 기반의 혁신적인 명상 프로그램을 제안합니다.</p>
    </div>
  </section>
);

export default Hero; 