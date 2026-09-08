# Overall flow
#  Node.js 컨테이너
#  → npm install
#  → npm run build
#  → dist 생성
#
#  Nginx 컨테이너
#  → dist 복사
#  → React 화면 제공
#
#  실행할 때는 Windows의 8080번 포트를 컨테이너의 80번 포트와 연결합니다.

#  Node.js : React 실행용 개발 도구
#  Nginx : 완성된 React 결과물 서비스 서버입
#  Dockerfile의 멀티 스테이지 빌드
#  최종 이미지에 Node.js와 소스 코드 넣지 않고, 완성된 화면 파일만 Nginx에 넣기 위한 방식

# React Node.js, alpine small linux
FROM node:20-alpine AS build

# Container work place
WORKDIR /app

# React packeage info copy and install library
COPY package*.json ./
RUN npm install

# React source code copy and install librarynX
COPY . .

# Backend API address embedded by Vite during the frontend build
ARG VITE_API_BASE_URL=http://localhost:9000
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}

RUN npm run build

# NginX image for displaying React screen image to web
FROM nginx:alpine

# copy dist folder made when Node.js building
COPY --from=build /app/dist /usr/share/nginx/html

# apply Nginx config regarding React display
COPY nginx.conf /etc/nginx/conf.d/default.conf

# container port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
