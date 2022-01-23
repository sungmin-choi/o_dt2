import '../styles/globals.css'
import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css'
import Top from '../src/components/Top'
import Footer from '../src/components/Footer'
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
    </Head>
    <Top/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

export default MyApp
