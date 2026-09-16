import image1 from '../../../viewdesign/image1.jpg';
import image2 from '../../../viewdesign/image2.jpg';
import image3 from '../../../viewdesign/image3.jpg';


const SelectImg = function () {
    return(
        <>
            {/* RIGHT: 초안 선택 */}
            <div className="col-lg-9">
                <div className="mb-4">
                    <h1 className="main-title mb-1">마음에 드는 초안을 골라주세요</h1>
                    <p className="main-sub mb-0">같은 이야기, 서로 다른 세 가지 광고 방향을 준비했어요.</p>
                </div>

                <div className="row g-3">

                    {/* A안 */}
                    <div className="col-md-4">
                        <div className="draft-card">
                            <div className="draft-card-head d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <input className="form-check-input mt-0" type="radio" name="draft" id="draftA"/>
                                    <label className="draft-option-label" for="draftA">A안 · 객실 중심</label>
                                </div>
                            </div>
                            <div className="ad-visual" style={{backgroundImage:`url(${image1})`}}>
                                <div className="ad-content">
                                    <span className="ad-eyebrow">SEOUL HOTEL</span>
                                    <div className="ad-headline">도심 위,<br/>둘만의 특별한 하루</div>
                                </div>
                                <div className="ad-content">
                                    <p className="ad-copy">서울의 가장 특별한 정원이 당신을 기다립니다.</p>
                                    <div>
                                        <span className="ad-tag">서울호텔</span>
                                        <span className="ad-tag">서울 중구</span>
                                        <span className="ad-tag">지금, 더 특별한 여행을</span>
                                    </div>
                                </div>
                            </div>
                            <div className="draft-caption">객실과 전망을 선명하게</div>
                        </div>
                    </div>

                    {/* B안 (선택됨) */}
                    <div className="col-md-4">
                        <div className="draft-card selected">
                            <div className="draft-card-head d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <input className="form-check-input mt-0" type="radio" name="draft" id="draftB" checked/>
                                    <label className="draft-option-label" for="draftB">B안 · 감성 중심</label>
                                </div>
                                <span className="selected-badge"><i className="bi bi-check-lg"></i> 선택됨</span>
                            </div>
                            <div className="ad-visual" style={{backgroundImage:`url(${image2})`}}>
                                <div className="ad-content">
                                    <span className="ad-eyebrow">SEOUL HOTEL</span>
                                    <div className="ad-headline">도심 위,<br/>둘만의 특별한 하루</div>
                                </div>
                                <div className="ad-content">
                                    <p className="ad-copy">사랑하는 사람과, 조금 더 특별한 서울의 밤을 만나보세요.</p>
                                    <div className="ad-script mb-1">Special Moment</div>
                                    <div>
                                        <span className="ad-tag">서울호텔</span>
                                        <span className="ad-tag">서울 중구</span>
                                        <span className="ad-tag">도심 속, 가장 로맨틱한 하루</span>
                                    </div>
                                </div>
                            </div>
                            <div className="draft-caption">머무는 순간의 감성을 강조</div>
                        </div>
                    </div>

                    {/* C안 */}
                    <div className="col-md-4">
                        <div className="draft-card">
                            <div className="draft-card-head d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                    <input className="form-check-input mt-0" type="radio" name="draft" id="draftC"/>
                                    <label className="draft-option-label" for="draftC">C안 · 혜택 중심</label>
                                </div>
                            </div>
                            <div className="ad-visual" style={{backgroundImage:`url(${image3})`}}>
                                <div className="ad-content d-flex justify-content-end">
                                    <div className="ad-corner-badge d-flex align-items-center justify-content-center">루프탑 이용 혜택</div>
                                </div>
                                <div className="ad-content" style={{marginTop:"-2.5rem"}}>
                                    <span className="ad-eyebrow">SEOUL HOTEL</span>
                                    <div className="ad-headline">도심 위,<br/>둘만의 특별한 하루</div>
                                </div>
                                <div className="ad-content">
                                    <p className="ad-copy">특별한 혜택과 함께, 더 완벽한 서울 여행을 경험하세요.</p>
                                    <div className="ad-script mb-1 text-end">A Better Getaway</div>
                                    <div>
                                        <span className="ad-tag">서울호텔</span>
                                        <span className="ad-tag">서울 중구</span>
                                        <span className="ad-tag">특별한 하루가 더 특별해지도록</span>
                                    </div>
                                </div>
                            </div>
                            <div className="draft-caption">서비스와 혜택을 한눈에</div>
                        </div>
                    </div>

                </div>

                <div className="d-flex align-items-center justify-content-between mt-3 flex-wrap gap-2">
                    <div className="footer-note d-flex align-items-center gap-1">
                        <i className="bi bi-info-circle"></i> 선택한 초안은 다음 단계에서 문구와 위치를 직접 수정할 수 있어요.
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn-regenerate d-flex align-items-center gap-2">
                            <i className="bi bi-arrow-clockwise"></i> 다시 생성
                        </button>
                        <button className="btn-proceed d-flex align-items-center gap-2">
                            B안으로 편집하기 <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SelectImg;