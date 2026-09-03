# React-Frontend

사진을 선택하고 미리보기로 확인하는 React Frontend 단독 테스트 화면입니다.

## 로컬 개발

```powershell
npm install
npm run dev
```

현재 단계에서는 백엔드 API를 호출하지 않습니다. 사진 파일 선택, 미리보기, 화면 등록만 확인합니다.

## Docker 실행

```powershell
docker build -t react-frontend:test .
docker run --rm -p 8080:80 react-frontend:test
```

브라우저에서 `http://localhost:8080`으로 접속합니다.
