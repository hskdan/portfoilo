const Projects = () => (
  <section id="projects" className="flex flex-col gap-6 py-12 items-center">
    <div className="w-full max-w-4xl">
      <h2 className="text-3xl font-semibold mb-4">프로그램</h2>
      <div className="flex flex-col gap-4 w-full">
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold">기초 호흡 명상</h3>
          <p className="text-gray-700 dark:text-gray-300">호흡의 기본 원리와 명상법을 배우는 입문 클래스. 매주 화요일 저녁 8시, 온라인 진행.</p>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold">1:1 맞춤 명상 코칭</h3>
          <p className="text-gray-700 dark:text-gray-300">개인별 고민과 목표에 맞춘 맞춤형 명상 지도. 예약제로 운영.</p>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold">온라인 그룹 클래스</h3>
          <p className="text-gray-700 dark:text-gray-300">함께 호흡하고 성장하는 그룹 명상. 매월 첫째, 셋째 토요일 오전 10시.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects; 