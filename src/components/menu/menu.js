import style from './menu.module.css';
import React from 'react';

const MenuComponent = () => {
    return(
        <div className={style.menu}>
            <p className={style.repreTitle}>대표메뉴</p>
            <div className={style.representative}>
                <div className={style.repreDescription}>
                <p className={style.repreName}>보일링 씨푸드 52,0</p>
                <span className={style.menu1_description}>오듯 강력 추천메뉴!! <br />
                    이국식 해산물찜으로 다양한 해산물 <br />
                    <strong className={style.menu1_strong}> 타이거새우,흰다리새우,가리비,전복,꽃게,오징어,홍합</strong><br />
                    을 버터와 마늘에 볶아 만든 매콤한 요리입니다.
                </span>
                <p className={style.repreName_sub}>+추가 랍스타 25,0</p>
                <span className={style.menu1_description2}>기본 보일링 씨푸드에 더욱 더 푸짐하게 랍스타 추가를 해보세요 <br />
                특별한 한상 차림으로 오늘을 더 행복하게 <br /> 
                <strong className={style.menu1_strong2}>랍스타 400g~450g</strong></span>
                <div className={style.repreName_sub2}>
                    <span> TIP 남은 소스에 스파게티면 or 밥을비벼드시면 <br />
                    식사라도 안성맞춤입니다! <br /><br />
                    <strong>스파게티면 200g ... 2,0 <br />
                    바케트빵4개 ... 2,0 <br />
                    공깃밥 ... 1,0</strong></span>
                </div>
                </div>
                <img width='366px' height='366px' className={style.repreImage} src='/image/boil3.jpg'  alt='보일링 씨푸드'  />
            </div>
            <p className={style.repreTitle}>술을 부르는 안주</p>
            <div className={style.snackMenu}>
                <ul className={style.snackMenuList}>
                    <li>칠리새우 ...22,0</li>
                    <li>감바스 알 아히요 ...22,0</li>
                    <li>치즈 가리비구이 ...25,0</li>
                    <li>모듬 소세지 구이 ...19,0</li>
                    <li>꼬치어묵홍합 냄비 ...20,0</li>
                    <li>모듬 꼬치 어묵탕 ...22,0</li>
                    <li>연어 샐러드 ...18,0</li>
                    <li>리코타 치즈 샐러드 ...10,0</li>
                    <li>감자튀김 ...8,0</li>
                </ul>
                <ul className={style.beerList}>
                    <li>생맥주500ml ...4,0</li>
                    <li>생맥주1700ml ...12,0</li>
                    <li>카스,테라,클라우드생드라프트,한맥 ...4,0</li>
                    <li>호가든,칭따오,코로나 ...6,0</li>
                    <li>참이슬,처음처럼,진로 소주 ...4,0</li>
                    <li>한라산 ...6,0</li>
                    <li>시나몬 다크코젤 ...9,0</li>
                    <li>산토니 하이볼 ...7,0</li>
                    <li><span> 강릉 버드나무 미노리세션(라거) ...9,0</span></li>
                    <li><span> 강릉 버드나무 즈므블랑(밀맥주) ...9,0</span></li>
                    <li>사이디,콜라,훤타,토닉타워,탄산수 ...2,0</li>
                    <li>자몽에이드,레몬에이그 ...5,0</li>
                    <li>물은 셀프 ...0,0</li>
                </ul>
            </div>
        </div>
    )
}

export default MenuComponent ;