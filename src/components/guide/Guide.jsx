import WaveEffect from './WaveEffect';

export const STEPS = [
    { num: '01', icon: 'bi-building',    title: '숙소 유형', desc: '어떤 유형의 숙소인가요?' },
    { num: '02', icon: 'bi-geo-alt',     title: '숙소 정보', desc: '이름, 위치, 주요 특징은?' },
    { num: '03', icon: 'bi-award',       title: '강조할 매력', desc: '가장 자랑하고 싶은 점은?' },
    { num: '04', icon: 'bi-people',      title: '광고 대상', desc: '어떤 분들에게 알리고 싶나요?' },
    { num: '05', icon: 'bi-palette',     title: '분위기',   desc: '어떤 분위기를 원하시나요?' },
    { num: '06', icon: 'bi-chat-quote',  title: '광고 문구', desc: '어떤 메시지를 담고 싶나요?' },
];

function Guide({ activeStepIndex = 0 }) {
  return (
    <>
      <div className="journey-panel mb-4">
        <div className="d-flex align-items-start justify-content-between flex-wrap gap-2 mb-4">
          <div>
            <h1 className="journey-title mb-1">광고가 완성되는 여정</h1>
            <p className="journey-sub mb-0">아래 대화에 답하면 단계가 하나씩 완성돼요.</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="progress-counter">{activeStepIndex + 1} / {STEPS.length}</span>
            <span className="view-only-badge d-inline-flex align-items-center gap-1">
              <i className="bi bi-eye"></i> 진행중인 단계
            </span>
          </div>
        </div>

        <div className="row g-3">
          {STEPS.map((step, i) => {
            const isCurrent = i === activeStepIndex;
            const isDone = i < activeStepIndex;
            const isFilled = isCurrent || isDone; // ★ 진행중 + 완료 모두 동일 스타일

            return (
              <div className="col-6 col-md-4 col-lg-2" key={step.num}>
                <div className={`guide-card ${isFilled ? 'active' : 'pending'}`}>
                  {isFilled && (
                    <span className="guide-status"><i className="bi bi-sun-fill"></i></span>
                  )}
                  <div className="guide-num">{step.num}</div>
                  <div className="guide-icon d-flex align-items-center justify-content-center">
                    <i className={`bi ${step.icon}`}></i>
                  </div>
                  <div className="guide-title">{step.title}</div>
                  <div className="guide-desc">{step.desc}</div>

                  {isFilled && <WaveEffect />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Guide;