# React-Frontend

사진을 선택하고 미리보기로 확인한 뒤 화면에 등록하는 React Frontend 초기 화면입니다.

## 주요 기능

- 이미지 파일 선택
- 선택한 이미지 미리보기
- 선택한 파일명 표시
- `화면에 등록` 버튼으로 등록 상태 메시지 표시

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

1. `사진 선택` 영역을 클릭합니다.
2. 이미지 파일을 선택합니다.
3. 선택한 이미지의 미리보기를 확인합니다.
4. `화면에 등록` 버튼을 클릭합니다.

이미지가 아닌 파일을 선택하면 오류 메시지가 표시됩니다.

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
| `src/App.jsx` | 사진 선택, 미리보기, 등록 상태 처리 |
| `src/styles.css` | 화면 스타일 |
| `Dockerfile` | React 빌드 및 Nginx 이미지 생성 |
| `nginx.conf` | Nginx 정적 파일 및 SPA 라우팅 설정 |

## 현재 제한사항

- 선택한 이미지를 서버나 데이터베이스에 저장하지 않습니다.
- 새로고침하면 선택한 이미지와 등록 상태가 초기화됩니다.
