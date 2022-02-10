# 강문 오듯 보일링 해산물 식당 웹페이지 제작 ver 2.0

    친누나가 운영하는 식당입니다 무료로 개발해 주면서 처음 배운 Next.js 에 많은 연습이 된거 같습니다.

## 사이트주소: https://o-dt.vercel.app

## 기술스택:

<p>
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
    <img src="https://img.shields.io/badge/Next-0f0303?style=flat-square&logo=Next.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/express-fff?style=flat-square&logo=express.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/Postcss-red?style=flat-square&logo=Postcss&logoColor=white"/>
    <img src="https://img.shields.io/badge/styledComponents-c44569?style=flat-square&logo=styledComponents&logoColor=white"/>
</p>

### 클라이언트 서버 배포:

<img src="https://img.shields.io/badge/heroku-634A87?style=flat-square&logo=heroku&logoColor=white"/>

### 클라이언트 배포:

<img src="https://img.shields.io/badge/vercel-black?style=flat-square&logo=vercel&logoColor=white"/>

## ver 2.0 개선점:

1. next.js 프레임워크 장점을 활용하여 검색엔진 최적화:
   > 결국 사람들이 사용해야 하는 사이트이기 때문에 사이트에 노출이 되어야 한다고 생각해서 Next.js 서버사이드렌더링 장점을 살려서 검색엔진 최적화(SEO)에 큰 공을 들인 프로젝트 입니다.
2. 반응형 웹 구현:
   > 웹 넓이 사이즈에 따라서 헤더 네비바, 컨텐츠 위치를 적절히 재 배치 하여 반응형 효과를 줬습니다.
   > <img src="public/image/md1.png"  width="500" height="270"> <img src="public/image/md2.png"  width="260" height="270">
3. 상세사진 배치 개선 react-slick 라이브러리 를 사용하여 이미지 클릭 했을때 확대가능 구현해서 옆으로 스와이프 가능하게 했습니다.
   > <img src="public/image/md3.png"  width="350" height="270">
   > 확대:
   > <img src="public/image/md4.png"  width="350" height="270">
4. 네이버 open API 를 통해서 식당 관련 블로그를 긁어올려고 했으나 받아오는 객체안에 정보들이 너무 부족해서 직접 웹을 크롤링해서 블로그 정보를 가져와서 구혔했다.
   > <img src="public/image/md5.png"  width="350" height="270">
5. 오픈그래프 메타태그 를 활용하여 kakaotalk 등에 링크 띄우면 사진과 간단한 소개 나오게끔 구현 했습니다
   > <img src="public/image/md6.png"  width="380" height="300">
