import React, { useState } from 'react';
import Slider from 'react-slick';
import { Image } from 'semantic-ui-react';
import styles from './images.module.css';
import {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`
    .slick-slide {
        display: inline-block;
    }
    .slick-dots{
        display: none !important;
    }

`;


const ImagesZoom = ({onClose ,currentImage}) => {
    const [currentSlide,setCurrentSlide] = useState(currentImage);
    
    const settings = {
        dots: true,
        fade: true,
        initialSlide: currentImage,
        afterChange:(slide)=>{
            setCurrentSlide(slide);
        },
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
  return <div className={styles.container}>
        <Global/>

        <header className={styles.Header} >
            <h2 >상세보기</h2>
            <button onClick={()=>onClose()} className={styles.button}>X</button>
        </header>

        <Slider className={styles.Slider} {...settings}>
          <div className={styles.ImageBox}>
          <Image  size='big' className={styles.Image} src='/image/8.jpeg' alt='강문오듯2'/>
          </div>
          <div className={styles.ImageBox}>
          <Image size='big' className={styles.Image} src='/image/1.jpg' alt='강문오듯1'/>
          </div>
          <div className={styles.ImageBox}>
          <Image size='big'  className={styles.Image} src='/image/3.jpg' alt='강문오듯3'/>
          </div>
          <div className={styles.ImageBox}>
          <Image size='big'  className={styles.Image} src='/image/7.jpg' alt='강문오듯7'/>
          </div>
          <div className={styles.ImageBox}>
          <Image size='big'  className={styles.Image} src='/image/9.jpeg' alt='강문오듯7'/>
          </div>
          <div className={styles.ImageBox}>
          <Image size='big'  className={styles.Image} src='/image/10.jpeg' alt='강문오듯7'/>
          </div>
          <div className={styles.ImageBox}>
          <Image size='big'  className={styles.Image} src='/image/4.jpg' alt='강문오듯7'/>
          </div>
          <div className={styles.ImageBox}>
          <Image size='big'  className={styles.Image} src='/image/5.jpg' alt='강문오듯7'/>
          </div>
          <div className={styles.ImageBox}>
          <Image size='big'  className={styles.Image} src='/image/6.jpeg' alt='강문오듯7'/>
          </div>
        </Slider>
        <div className={styles.indicator}>
                    {currentSlide +1}
                    {' '}
                    /
                    9
        </div>

  </div>;
};

export default ImagesZoom;