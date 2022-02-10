/* eslint-disable @next/next/no-sync-scripts */
import '../styles/globals.css'
import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Top from '../src/components/Top'
import Footer from '../src/components/Footer'
import React from 'react';
import 'antd/dist/antd.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>오 듯</title>
      <meta name="viewport" content="width=device-width"/>
      <meta charSet="utf-8"/>
      <meta name="description" content="강문해변가 라인에 위치해있으며 오리카페와 팡파미유강문점 사이에 있는 유리로 된 건물입니다~ 
      화덕생선구이강문집 바로 앞에 있습니다! 버터와 마늘을 볶아 만든 매콤한 미국식 해산물찜입니다 !술을 부르는 안주를 하는 seafoodrestaurant & pub !!!"></meta>
      <meta name="keywords" content="오듯,강문오듯,강문해변,보일링씨푸드,해산물술집,강릉맛집,강문해변오듯"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="http://localhost:3000/"/>
      <meta property="og:site_name" content="오 듯"/>
      <meta property="og:image" content="/logo.jpg"/>
      <meta property="og:locale" content="utf-8"/>
      <meta property="og:title" content="강문 오듯 :: 강문 해산물보일링 강문 술집" />
      <meta property="og:description" content="강문해변가 라인에 위치해있으며 오리카페와 팡파미유강문점 사이에 있는 유리로 된 건물입니다~ 
      화덕생선구이강문집 바로 앞에 있습니다! 버터와 마늘을 볶아 만든 매콤한 미국식 해산물찜입니다 !술을 부르는 안주를 하는 seafoodrestaurant & pub !!! " />
      <meta name="naver-site-verification" content="a9cd66601910de9531887201321e66c382df7d9d" />
      <script type="text/javascript" src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`} ></script>
    </Head>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

export default MyApp
