const Submit = function () {
    return(
        <>
            <section class="sf-submit" id="submit">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 sf-submit-note">
                            <h2 class="sf-h2 sf-h2-light">이렇게 올리면<br />더 잘 나와요</h2>
                            <ul class="sf-tip-list">
                                <li>참고 설명은 구체적으로 적을수록 좋아요.</li>
                                <li>참고 이미지는 광고의 분위기나 배경으로 활용됩니다.</li>
                                <li>참고 이미지는 1장만 첨부할 수 있습니다.</li>
                            </ul>
                        </div>

                        <div class="col-lg-7">
                            <form class="sf-form" novalidate>
                                <div class="form-group">
                                    <label for="sfDesc">숙소 이름이나 주소와 같은 정보를 작성해주세요</label>
                                    <textarea class="form-control sf-input sf-textarea" id="sfDesc" name="AccomodationDesc" rows="5" placeholder={"광고 제작에 필요한 숙소의 이름이나 주소와 같은 정보를 작성해주세요 \n예: 펜션이름은 숲속펜션 "}></textarea>
                                </div>

                                <div class="form-group">
                                    <label for="sfDesc">광고 제작에 필요한 문구를 작성해주세요</label>
                                    <textarea class="form-control sf-input sf-textarea" id="sfDesc" name="AdDesc" rows="5" placeholder={"광고 문구로 담고 싶은 내용을 자유롭게 적어주세요. \n예: 여름에도 시원한 우리 펜션으로 놀러오세요."}></textarea>
                                </div>

                                <div class="form-group">
                                    <label for="sfDesc">광고 제작 시 추가로 참고해야할 내용을 작성해주세요</label>
                                    <textarea class="form-control sf-input sf-textarea" id="sfDesc" name="RefDesc" rows="5" placeholder={"광고 이미지 제작에 필요한 추가 내용을 자유롭게 적어주세요. \n예: A4 크기의 광고페이지로 만들어주세요."}></textarea>
                                </div>

                                <div class="form-group">
                                    <label for="sfPhoto">광고 제작 시 참고 이미지 <span class="sf-label-sub">(1장)</span></label>
                                    <label class="sf-image-add" for="sfPhoto" id="sfImageAdd">
                                        <span class="sf-image-add-icon" id="sfImageAddIcon">
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1.5" y="1.5" width="21" height="21" rx="2" stroke="currentColor" stroke-width="1.5" />
                                                <circle cx="8" cy="9" r="1.8" stroke="currentColor" stroke-width="1.5" />
                                                <path d="M2.5 17.5L8 12.5L11.5 15.5L16 10.5L21.5 16" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                    </label>
                                    <input type="file" id="sfPhoto" name="sfPhoto" accept="image/*" class="sf-file-input" />
                                </div>

                                <button type="submit" class="sf-btn sf-btn-primary sf-btn-block" id="sfSubmitBtn">
                                광고 이미지 생성하기
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Submit;