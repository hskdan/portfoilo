const About = () => (
  <section id="about" className="py-16 bg-[#0a1a2f] text-white flex flex-col items-center">
    <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center gap-8 bg-[#0a1a2f] rounded-xl p-8 shadow-lg">
      {/* 프로필 사진 */}
      <div className="flex-shrink-0 flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-tr from-pink-500 to-blue-500 overflow-hidden">
        <img
          src="/profile.jpg"
          alt="프로필 사진"
          className="w-full h-full object-cover"
        />
      </div>
      {/* 프로필 정보 */}
      <div className="flex-1 w-full">
        <div className="mb-2 text-xl font-bold">테스트</div>
        <div className="mb-4 text-sm text-gray-300">이름: 황선경<br/>포지션: 명상 서비스 기획 / FE Developer(프론트엔드)</div>
        <hr className="my-3 border-gray-600" />
        <div className="mb-2 font-semibold text-base text-blue-300">_Contact</div>
        <div className="mb-2 text-sm">Email : jaeah@email.com</div>
        <div className="mb-4 text-sm">Phone : 010-1234-5678</div>
        <hr className="my-3 border-gray-600" />
        <div className="mb-2 font-semibold text-base text-purple-300">_Channel</div>
        <div className="flex flex-col gap-2">
          <div className="text-sm">SNS : <span className="text-blue-200">여기에 SNS 주소를 입력하세요</span></div>
          <div className="text-sm">GitHub : <span className="text-purple-200">여기에 GitHub 주소를 입력하세요</span></div>
        </div>
      </div>
    </div>
  </section>
);

export default About; 