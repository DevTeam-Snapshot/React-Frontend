const Chat = function() {

    return (
        <>
            {/* ============ 하단: AI 챗봇 대화 폼 ============ */}
            <div className="chat-panel">

                <div className="d-flex align-items-start gap-3 mb-4">
                <div className="bot-avatar d-flex align-items-center justify-content-center">
                    <i className="bi bi-robot"></i>
                </div>
                <div className="bot-message pt-1">
                    안녕하세요!<br/>어떤 숙소의 광고를 만들어드릴까요?
                </div>
                </div>

                {/* 빠른 선택 옵션 (실제로는 Step 1 답변 입력 역할) */}
                <div className="row g-2 mb-3">
                <div className="col-6 col-md-3">
                    <button className="option-card d-flex align-items-center gap-2">
                    <div className="option-icon d-flex align-items-center justify-content-center">
                        <i className="bi bi-building"></i>
                    </div>
                    <div>
                        <div className="option-title">호텔</div>
                        <div className="option-desc">세련된 휴식, 특별한 경험</div>
                    </div>
                    </button>
                </div>
                <div className="col-6 col-md-3">
                    <button className="option-card d-flex align-items-center gap-2">
                    <div className="option-icon d-flex align-items-center justify-content-center">
                        <i className="bi bi-signpost-split"></i>
                    </div>
                    <div>
                        <div className="option-title">모텔</div>
                        <div className="option-desc">편안한 휴식, 실용적인 선택</div>
                    </div>
                    </button>
                </div>
                <div className="col-6 col-md-3">
                    <button className="option-card d-flex align-items-center gap-2">
                    <div className="option-icon d-flex align-items-center justify-content-center">
                        <i className="bi bi-tree"></i>
                    </div>
                    <div>
                        <div className="option-title">리조트</div>
                        <div className="option-desc">여유로운 시간, 특별한 추억</div>
                    </div>
                    </button>
                </div>
                <div className="col-6 col-md-3">
                    <button className="option-card d-flex align-items-center gap-2">
                    <div className="option-icon d-flex align-items-center justify-content-center">
                        <i className="bi bi-house-door"></i>
                    </div>
                    <div>
                        <div className="option-title">펜션</div>
                        <div className="option-desc">자연 속의 하루, 소중한 사람들</div>
                    </div>
                    </button>
                </div>
                </div>

                {/* 실제 입력창 */}
                <div className="chat-input-row d-flex align-items-center px-3 py-2 gap-2 mb-2">
                <i className="bi bi-paperclip attach-icon"></i>
                <input type="text" className="form-control flex-grow-1" placeholder="예: 바다가 보이는 펜션 광고를 만들고 싶어요"/>
                <button className="send-btn d-flex align-items-center justify-content-center">
                    <i className="bi bi-send-fill" style={{fontSize:".85rem"}}></i>
                </button>
                </div>

                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                <span className="footer-hint d-flex align-items-center gap-1">
                    <i className="bi bi-info-circle"></i> 선택하거나 직접 이야기해주세요.
                </span>
                <span className="footer-brand-note">
                    당신의 숙소가 더 많은 사람들에게 알려지도록<br/>
                    <em>Snapshot</em>
                </span>
                </div>

            </div>

        </>
    )
}

export default Chat;