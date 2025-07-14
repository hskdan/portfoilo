const Projects = () => (
  <section id="projects" className="flex flex-col items-center gap-6 py-24">
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center bg-[#162032] rounded-2xl p-8 md:p-16 shadow-2xl drop-shadow-xl">
      <h2 className="text-3xl font-semibold mb-8 text-center border-b-4 border-blue-400 pb-2 block mx-auto w-fit">프로그램</h2>
      <div className="flex flex-col gap-4 w-full mt-8">
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-row items-start">
          <span className="text-3xl mr-4 mt-1 flex-shrink-0">🧠</span>
          <div>
            <h3 className="text-xl font-bold mb-1">신체 감각(내수용)과 감정 라벨을 분리하여 인식하기</h3>
            <p className="text-gray-700 dark:text-gray-300">순수한 신체 감각을 있는 그대로 관찰하는 '순수 감각 바디 스캔'을 통해 감정의 자동 구성 과정을 멈추고 객관적으로 관찰하는 능력을 기릅니다.</p>
          </div>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-row items-start">
          <span className="text-3xl mr-4 mt-1 flex-shrink-0">💨</span>
          <div>
            <h3 className="text-xl font-bold mb-1">신체 예산 개념을 이해하고, 몸의 상태를 조절하는 기초 다지기</h3>
            <p className="text-gray-700 dark:text-gray-300">'신체 예산 회복 호흡'을 통해 의식적으로 부교감 신경계를 활성화하여, 뇌가 불쾌한 감정을 구성할 가능성을 낮추는 실질적인 개입을 배웁니다.</p>
          </div>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-row items-start">
          <span className="text-3xl mr-4 mt-1 flex-shrink-0">🔤</span>
          <div>
            <h3 className="text-xl font-bold mb-1">다양한 감정 어휘를 학습하고, 감정을 세밀하게 구분하는 능력 향상</h3>
            <p className="text-gray-700 dark:text-gray-300">'감정 라벨링과 탐색' 활동으로 모호한 감정을 더 정밀한 단어로 표현하며, 뇌가 상황을 정확하게 예측하고 효과적인 행동을 선택하도록 돕습니다.</p>
          </div>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-row items-start">
          <span className="text-3xl mr-4 mt-1 flex-shrink-0">🔄</span>
          <div>
            <h3 className="text-xl font-bold mb-1">감정 구성에 '개념'이 미치는 영향을 이해하고, 재범주화 연습하기</h3>
            <p className="text-gray-700 dark:text-gray-300">'신체 감각 재범주화'를 통해 동일한 신체 감각을 다른 개념(예: 불안→설렘)으로 해석하며 감정적 유연성을 기르는 핵심 훈련을 합니다.</p>
          </div>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-row items-start">
          <span className="text-3xl mr-4 mt-1 flex-shrink-0">🔮</span>
          <div>
            <h3 className="text-xl font-bold mb-1">뇌의 예측 메커니즘을 이해하고, 감정적 예측 오류 알아차리기</h3>
            <p className="text-gray-700 dark:text-gray-300">'예측 알아차리기' 명상으로 자신의 감정이 외부 자극에 대한 반사가 아니라, 내부적인 예측 모델에 의해 생성됨을 깨닫고 새로운 반응 공간을 만듭니다.</p>
          </div>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-row items-start">
          <span className="text-3xl mr-4 mt-1 flex-shrink-0">🌱</span>
          <div>
            <h3 className="text-xl font-bold mb-1">불쾌한 감각을 유용한 감정으로 재구성하는 기술 훈련</h3>
            <p className="text-gray-700 dark:text-gray-300">'긍정 경험 재구성 및 저장' 활동을 통해 뇌가 미래에 참조할 긍정적 데이터를 늘려, 능동적으로 긍정적 감정을 구성할 확률을 높입니다.</p>
          </div>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-row items-start">
          <span className="text-3xl mr-4 mt-1 flex-shrink-0">🌌</span>
          <div>
            <h3 className="text-xl font-bold mb-1">고정된 자아 개념을 해체하고, 경외감 명상을 통해 관점 전환하기</h3>
            <p className="text-gray-700 dark:text-gray-300">'경외감 확장 명상'으로 자아 중심적 사고에서 벗어나 관점을 전환하고, 정서적 고통을 완화하는 방법을 배웁니다.</p>
          </div>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-row items-start">
          <span className="text-3xl mr-4 mt-1 flex-shrink-0">🤝</span>
          <div>
            <h3 className="text-xl font-bold mb-1">사회적 실재로서의 감정을 이해하고, 자비 명상을 통해 연결감 확장</h3>
            <p className="text-gray-700 dark:text-gray-300">'자비 명상'을 통해 타인에게 보내는 친절과 자비가 자신의 뇌에도 긍정적 감정을 구성하는 씨앗이 됨을 체험하며 관계 속에서 감정을 조절합니다.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects; 