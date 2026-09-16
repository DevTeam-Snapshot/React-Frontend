const Planner = function() {
    return(
        <>
            {/* LEFT: 완성된 광고 기획서 */}
            <div className="col-lg-3">
                <div className="side-panel h-100 d-flex flex-column p-4">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="side-title">완성된 광고 기획서</span>
                        <span className="side-count">6 / 6</span>
                    </div>
                    <p className="side-desc mb-3">멋진 광고가 될 수 있도록<br/>아래 내용으로 기획을 완료했어요!</p>

                    <div className="flex-grow-1">
                        <div className="qa-item">
                            <div className="qa-num mb-1">01 <span className="qa-label ms-1">숙소 유형</span></div>
                            <div className="qa-answer-marker">호텔</div>
                        </div>
                        <div className="qa-item">
                            <div className="qa-num mb-1">02 <span className="qa-label ms-1">숙소 정보</span></div>
                            <div className="qa-answer-marker">서울호텔 · 서울 중구</div>
                        </div>
                        <div className="qa-item">
                            <div className="qa-num mb-1">03 <span className="qa-label ms-1">강조하고 싶은 매력</span></div>
                            <div className="qa-answer-marker">남산뷰 객실 · 루프탑</div>
                        </div>
                        <div className="qa-item">
                            <div className="qa-num mb-1">04 <span className="qa-label ms-1">광고 대상</span></div>
                            <div className="qa-answer-marker">커플 여행객</div>
                        </div>
                        <div className="qa-item">
                            <div className="qa-num mb-1">05 <span className="qa-label ms-1">분위기</span></div>
                            <div className="qa-answer-marker">세련된 · 따뜻한</div>
                        </div>
                        <div className="qa-item">
                            <div className="qa-num mb-1">06 <span className="qa-label ms-1">광고 문구</span></div>
                            <div className="qa-answer-marker">도심 위, 둘만의 특별한 하루</div>
                        </div>
                    </div>

                    <button className="btn-edit d-flex align-items-center justify-content-center gap-2 mt-3">
                        <i className="bi bi-pencil"></i> 기획서 수정
                    </button>
                </div>
            </div>

        </>
    )
}

export default Planner;