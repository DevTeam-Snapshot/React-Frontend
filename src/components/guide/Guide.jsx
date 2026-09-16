const Guide = function() {
    return (
        <>
            {/* ============ 상단: 진행 단계 가이드 (카드 그리드, 보기 전용) ============ --> */}
            <div className="journey-panel mb-4">

                <div className="d-flex align-items-start justify-content-between flex-wrap gap-2 mb-4">
                    <div>
                        <h1 className="journey-title mb-1">광고가 완성되는 여정</h1>
                        <p className="journey-sub mb-0">아래 대화에 답하면 단계가 하나씩 완성돼요.</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <span className="progress-counter">1 / 6</span>
                        <span className="view-only-badge d-inline-flex align-items-center gap-1">
                            <i className="bi bi-eye"></i> 보기 전용
                        </span>
                    </div>
                </div>

                <div className="row g-3">

                    {/* 01 숙소 유형 : 진행 중 */}
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="guide-card active">
                            <span className="guide-status"><i className="bi bi-stars"></i></span>
                            <div className="guide-num">01</div>
                            <div className="guide-icon d-flex align-items-center justify-content-center">
                                <i className="bi bi-building"></i>
                            </div>
                            <div className="guide-title">숙소 유형</div>
                            <div className="guide-desc">어떤 유형의 숙소인가요?</div>
                        </div>
                    </div>

                    {/* 02 숙소 정보 : 대기 */}
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="guide-card pending">
                            <div className="guide-num">02</div>
                            <div className="guide-icon d-flex align-items-center justify-content-center">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="guide-title">숙소 정보</div>
                            <div className="guide-desc">이름, 위치, 주요 특징은?</div>
                        </div>
                    </div>

                    {/* 03 강조할 매력 : 대기 */}
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="guide-card pending">
                            <div className="guide-num">03</div>
                            <div className="guide-icon d-flex align-items-center justify-content-center">
                                <i className="bi bi-award"></i>
                            </div>
                            <div className="guide-title">강조할 매력</div>
                            <div className="guide-desc">가장 자랑하고 싶은 점은?</div>
                        </div>
                    </div>

                    {/* 04 광고 대상 : 대기 */}
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="guide-card pending">
                            <div className="guide-num">04</div>
                            <div className="guide-icon d-flex align-items-center justify-content-center">
                                <i className="bi bi-people"></i>
                            </div>
                            <div className="guide-title">광고 대상</div>
                            <div className="guide-desc">어떤 분들에게 알리고 싶나요?</div>
                        </div>
                    </div>

                    {/* 05 분위기 : 대기 */}
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="guide-card pending">
                            <div className="guide-num">05</div>
                            <div className="guide-icon d-flex align-items-center justify-content-center">
                                <i className="bi bi-palette"></i>
                            </div>
                            <div className="guide-title">분위기</div>
                            <div className="guide-desc">어떤 분위기를 원하시나요?</div>
                        </div>
                    </div>

                    {/* 06 광고 문구 : 대기 */}
                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="guide-card pending">
                            <div className="guide-num">06</div>
                            <div className="guide-icon d-flex align-items-center justify-content-center">
                                <i className="bi bi-chat-quote"></i>
                            </div>
                            <div className="guide-title">광고 문구</div>
                            <div className="guide-desc">어떤 메시지를 담고 싶나요?</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Guide;