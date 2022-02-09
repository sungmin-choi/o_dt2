import styles from './introduce.module.css';
import React, { useEffect ,useState,useCallback} from 'react';
import Kakao from '../../../pages/api/kakao';
import Gallery from '../gallery/gallery';
import ImagesZoom from '../imagesZoom';

const Introduce = () => {
    const [showImageZone, setShowImageZone] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    
    const imageZoom =useCallback(()=>{
      setShowImageZone(true);
    },[]);
  
    const onClose = useCallback(()=>{
      setShowImageZone(false);
    },[])

    useEffect(()=>{
        const { kakao } = window;
        const kakaoMap = new Kakao();
        kakaoMap.getMap(kakao);
    },[])
    
    return(
        <section className={styles.introduce}>
            {showImageZone && <ImagesZoom onClose={onClose} currentImage={currentImage}/>}
            <p className={styles.title}><span className={styles.logoName}>{`o'dt`}</span>&nbsp;으로 오세요!</p>
            <button className={styles.rsBtn} >
              <a style={{color:'white'}} rel='noopener noreferrer' href="https://search.naver.com/search.naver?where=nexearch&sm=top_sly.hst&fbm=1&acr=1&ie=utf8&query=%EA%B0%95%EB%AC%B8+%EC%98%A4%EB%93%AF" target='_blank'>
              <span style={{display:'inline-block',fontSize:'24px',marginRight:'10px'}}>N</span>  
              <span>온라인 예약하기</span>
              </a>
            </button>
            <Gallery  imageZoom={imageZoom} setCurrentImage={setCurrentImage}/>
            <div className={styles.detail}>
            <div className={styles.address}><h2>주소</h2> 강릉시 창해로 <br />350번길21-1 오듯<br /> namja306@naver.com</div>
            <div className={styles.openTime}><h2>영업시간</h2> 월-일 12:00-24:00<br />수요일 휴무 </div>
            </div>
            <h2>오시는길</h2>
            <div id="kakaomap" style={{width:'500px',height:'400px'}}></div>
        </section>
    )
}

export default Introduce;