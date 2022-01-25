import styles from './introduce.module.css';
import React, { useEffect } from 'react';
import Kakao from '../../../pages/api/kakao';

const Introduce = () => {
    
    useEffect(()=>{
        const { kakao } = window;
        const kakaoMap = new Kakao();
        kakaoMap.getMap(kakao);
    },[])
    
    return(
        <section className={styles.introduce}>
            <p className={styles.title}><span className={styles.logoName}>{`o'dt`}</span>&nbsp;으로 오세요!</p>
            <div className={styles.detail}>
            <div className={styles.address}>주소 <br /> 강릉시 창해로 <br />350번길21-1 오듯<br /> namja306@naver.com</div>
            <div className={styles.openTime}>영업시간 <br />월-일 12:00-24:00<br />수요일 휴무 </div>
            </div>
            <h2>오시는길</h2>
            <div id="kakaomap" style={{width:'500px',height:'400px'}}></div>
        </section>
    )
}

export default Introduce;