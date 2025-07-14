const About = () => (
  <section id="about" className="py-24 bg-[#0a1a2f] text-white flex flex-col items-center">
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-center border-b-4 border-blue-400 pb-2 block mx-auto w-fit">소개</h2>
      <div className="flex flex-col sm:flex-row items-center gap-8 bg-[#162032] rounded-2xl p-8 md:p-16 shadow-2xl w-full drop-shadow-xl mt-8">
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
          <div className="mb-2 text-xl font-bold">닉네임_JEA</div>
          <div className="mb-4 text-sm text-gray-300">황선경<br/>호흡명상전문가/명상메세지컨텐츠 제작</div>
          <hr className="my-3 border-gray-600" />
          <div className="mb-2 font-semibold text-base text-blue-300">_Contact</div>
          <div className="mb-2 text-sm">Email : hskdan@gmail.com</div>
          <div className="mb-4 text-sm">Phone : 010-9606-1557</div>
          <hr className="my-3 border-gray-600" />
        </div>
      </div>
    </div>
  </section>
);

export default About; 