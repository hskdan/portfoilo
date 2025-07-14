const Skills = () => (
  <section id="skills" className="flex flex-col items-center text-center py-24">
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center bg-[#162032] rounded-2xl p-8 md:p-16 shadow-2xl drop-shadow-xl">
      <h2 className="text-3xl font-semibold mb-4 text-center border-b-4 border-blue-400 pb-2 block mx-auto w-fit">전문 역량</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg w-full mt-8">
        <li>호흡 명상 지도</li>
        <li>마음챙김 및 스트레스 관리</li>
        <li>1:1 맞춤 코칭</li>
        <li>그룹 워크숍 진행</li>
        <li>심신 치유 프로그램 설계</li>
        <li>온라인/오프라인 클래스 운영</li>
      </ul>
    </div>
  </section>
);

export default Skills; 