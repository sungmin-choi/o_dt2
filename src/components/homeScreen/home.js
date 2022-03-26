import styles from './home.module.css';
import React from 'react';

const HomeScreen = () => {
    const handlePos=()=>{
        if(document.querySelector("#menuBar")){
            let menuHeight = document.querySelector("#menuBar").offsetHeight;
            let location = document.querySelector("#introducePos").offsetTop;
            window.scrollTo({top:location - menuHeight-57, behavior:'smooth'});
        }
     }
    return(
        <main className={styles.main} style={{backgroundImage:'url(/image/restaurant.jpg)'}}>
            <div className={styles.titlebox}>
                <span className={styles.title}>{`o'dt`}</span>
                <span className={styles.description}>퓨전 해산물 레스토랑 <br />싱그러운  메뉴들로 분위기 있는 감성포차</span>
                <span className={styles.description2}>#강문오듯 #강릉오듯 #감성포차</span>
            </div>
            <button onClick={handlePos} className={styles.resbtn}>매장소개</button>
        </main>
    )
}

export default HomeScreen;