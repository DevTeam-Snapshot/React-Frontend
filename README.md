# React-Frontend

질문과 DB index를 Backend에 전달하고, DB text와 vLLM answer를 표시하는 로컬 연동 화면입니다.

## 주요 기능

- 질문 및 DB index 입력
- Backend `POST /api/integration-test` 호출
- PostgreSQL 조회값과 vLLM 생성 답변 표시

## 실행 환경

- Node.js
- npm
- React
- Vite

## 로컬 개발 실행

```bash
npm install
npm run dev
```

개발 서버 실행 후 터미널에 표시된 주소로 접속합니다. 개발 서버 포트는 `3000`으로 설정되어 있습니다.

```text
http://localhost:3000
```

## 사용 방법

Backend를 `http://localhost:9000`에서 먼저 실행합니다. 다른 주소를 사용할 경우 `.env`의 `VITE_API_BASE_URL`을 변경합니다.

## Docker 실행

Frontend 이미지 빌드:

```bash
docker build -t react-frontend:test .
```

컨테이너 실행:

```bash
docker run --rm -p 3000:80 react-frontend:test
```

브라우저에서 다음 주소로 접속합니다.

```text
http://localhost:3000
```

## 주요 파일

| 파일 | 역할 |
| --- | --- |
| `src/main.jsx` | React 앱 시작점 |
| `src/App.jsx` | 질문/index 입력 및 응답 표시 |
| `src/api.js` | Backend API 호출 |
| `src/styles.css` | 화면 스타일 |
| `Dockerfile` | React 빌드 및 Nginx 이미지 생성 |
| `nginx.conf` | Nginx 정적 파일 및 SPA 라우팅 설정 |

## 현재 제한사항

- 로컬 인터페이스 검증용이며 성능 검증은 GPU VM에서 진행합니다.
