import { useState } from 'react';

const Submit = function () {
  // 폼 텍스트 필드들을 하나의 객체로 관리
  const [formData, setFormData] = useState({
    AccomodationDesc: '',
    AdDesc: '',
    RefDesc: '',
  });
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // 업로드한 참고 이미지 미리보기
  const [resultImage, setResultImage] = useState(null); // 서버가 생성해준 광고 이미지
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // 텍스트 + 이미지를 같이 보내야 하므로 FormData 사용
      const payload = new FormData();
      payload.append('accomodation_desc', formData.AccomodationDesc);
      payload.append('ad_desc', formData.AdDesc);
      payload.append('ref_desc', formData.RefDesc);
      if (image) payload.append('image', image);

      const response = await fetch('http://localhost:8000/api/image-generations', {
        method: 'POST',
        body: payload,
        // FormData를 body로 넘길 땐 Content-Type 헤더를 직접 지정하지 마세요.
        // 브라우저가 boundary까지 포함해서 자동으로 설정해줍니다.
      });

      if (!response.ok) {
        throw new Error(`서버 오류: ${response.status}`);
      }

      const result = await response.json();
      // 백엔드가 { image_url: "..." } 형태로 준다고 가정 — 실제 응답 스펙에 맞춰 조정하세요.
      setResultImage(result.image_url);
    } catch (err) {
      console.error('요청 실패:', err);
      setError('광고 이미지 생성에 실패했어요. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="sf-submit" id="submit">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 sf-submit-note">
              <h2 className="sf-h2 sf-h2-light">이렇게 올리면<br />더 잘 나와요</h2>
              <ul className="sf-tip-list">
                <li>참고 설명은 구체적으로 적을수록 좋아요.</li>
                <li>참고 이미지는 광고의 분위기나 배경으로 활용됩니다.</li>
                <li>참고 이미지는 1장만 첨부할 수 있습니다.</li>
              </ul>
            </div>

            <div className="col-lg-7">
              <form className="sf-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="sfAccomodationDesc">숙소 이름이나 주소와 같은 정보를 작성해주세요</label>
                  <textarea
                    className="form-control sf-input sf-textarea"
                    id="sfAccomodationDesc"
                    name="AccomodationDesc"
                    rows="5"
                    value={formData.AccomodationDesc}
                    onChange={handleChange}
                    placeholder={"광고 제작에 필요한 숙소의 이름이나 주소와 같은 정보를 작성해주세요 \n예: 펜션이름은 숲속펜션 "}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="sfAdDesc">광고 제작에 필요한 문구를 작성해주세요</label>
                  <textarea
                    className="form-control sf-input sf-textarea"
                    id="sfAdDesc"
                    name="AdDesc"
                    rows="5"
                    value={formData.AdDesc}
                    onChange={handleChange}
                    placeholder={"광고 문구로 담고 싶은 내용을 자유롭게 적어주세요. \n예: 여름에도 시원한 우리 펜션으로 놀러오세요."}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="sfRefDesc">광고 제작 시 추가로 참고해야할 내용을 작성해주세요</label>
                  <textarea
                    className="form-control sf-input sf-textarea"
                    id="sfRefDesc"
                    name="RefDesc"
                    rows="5"
                    value={formData.RefDesc}
                    onChange={handleChange}
                    placeholder={"광고 이미지 제작에 필요한 추가 내용을 자유롭게 적어주세요. \n예: A4 크기의 광고페이지로 만들어주세요."}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="sfPhoto">
                    광고 제작 시 참고 이미지 <span className="sf-label-sub">(1장)</span>
                  </label>
                  <label
                    className="sf-image-add"
                    htmlFor="sfPhoto"
                    id="sfImageAdd"
                    style={previewUrl ? { backgroundImage: `url(${previewUrl})` } : undefined}
                  >
                    {!previewUrl && (
                      <span className="sf-image-add-icon" id="sfImageAddIcon">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1.5" y="1.5" width="21" height="21" rx="2" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="8" cy="9" r="1.8" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M2.5 17.5L8 12.5L11.5 15.5L16 10.5L21.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                      </span>
                    )}
                  </label>
                  <input
                    type="file"
                    id="sfPhoto"
                    name="sfPhoto"
                    accept="image/*"
                    className="sf-file-input"
                    onChange={handleImageChange}
                  />
                </div>

                {error && <p className="sf-error">{error}</p>}

                <button
                  type="submit"
                  className="sf-btn sf-btn-primary sf-btn-block"
                  id="sfSubmitBtn"
                  disabled={isLoading}
                >
                  {isLoading ? '생성 중...' : '광고 이미지 생성하기'}
                </button>
              </form>

              {resultImage && (
                <div className="sf-result-preview">
                  <h3>생성된 광고 이미지</h3>
                  <img src={resultImage} alt="생성된 광고 이미지" style={{ maxWidth: '100%' }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Submit;