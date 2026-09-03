import { useEffect, useState } from 'react';

export default function App() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => () => {
    if (preview) URL.revokeObjectURL(preview);
  }, [preview]);

  const selectImage = (event) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;
    if (!selectedFile.type.startsWith('image/')) {
      setMessage('이미지 파일만 선택할 수 있습니다.');
      return;
    }
    if (preview) URL.revokeObjectURL(preview);
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setMessage('');
  };

  const uploadImage = () => {
    if (!file) {
      setMessage('사진을 먼저 선택하세요.');
      return;
    }
    setMessage('사진이 화면에 등록되었습니다.');
  };

  return (
    <main className="app">
      <h1>사진 업로드</h1>
      <label className="picker" htmlFor="image-input">
        {preview ? <img src={preview} alt="선택한 사진 미리보기" /> : <span>사진 선택</span>}
        <input id="image-input" type="file" accept="image/*" onChange={selectImage} />
      </label>
      {file && <p className="filename">{file.name}</p>}
      <button type="button" onClick={uploadImage}>
        화면에 등록
      </button>
      {message && <p className="message">{message}</p>}
    </main>
  );
}
