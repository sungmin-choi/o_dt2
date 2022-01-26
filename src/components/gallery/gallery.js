import React, { useCallback, useState } from 'react';
import styles from './gallery.module.css';
import { Grid, Image } from 'semantic-ui-react'

const Gallery = ({imageZoom,setCurrentImage}) => {

  const onClick = useCallback((e)=>{
    imageZoom();
    setCurrentImage(Number(e.target.id)-1);
  },[])
  
  return <div className={styles.container} >
  <Grid >
  <Grid.Row style={{paddingTop:'0 !important'}} columns={3}>
    <Grid.Column  onClick={onClick}   className={styles.ImageBox}>
      <Image  src='/image/8.jpeg' id='1' alt='강문오듯2'/>
    </Grid.Column>
    <Grid.Column  onClick={onClick}  className={styles.ImageBox}>
      <Image  src='/image/1.jpg' id='2' alt='강문오듯1'/>
    </Grid.Column>
    <Grid.Column  onClick={onClick} className={styles.ImageBox}>
      <Image   src='/image/3.jpg' id='3' alt='강문오듯3'/>
    </Grid.Column>
  </Grid.Row>
  <Grid.Row  style={{paddingTop:'0 !important'}} columns={3}>
    <Grid.Column  onClick={onClick} className={styles.ImageBox}>
      <Image   src='/image/7.jpg' id='4' alt='강문오듯7'/>
    </Grid.Column>
    <Grid.Column onClick={onClick} className={styles.ImageBox}>
      <Image src='/image/9.jpeg' id='5' alt='강문오듯boil'/>
    </Grid.Column>
    <Grid.Column onClick={onClick} className={styles.ImageBox}>
      <Image  src='/image/10.jpeg' id='6' alt='강문오듯boil2'/>
    </Grid.Column>
  </Grid.Row>
  <Grid.Row  style={{paddingTop:'0 !important'}} columns={3}>
    <Grid.Column className={styles.ImageBox}>
      <Image  onClick={onClick} src='/image/4.jpg' id='7' alt='강문오듯4'/>
    </Grid.Column>
    <Grid.Column  onClick={onClick} className={styles.ImageBox}>
      <Image src='/image/5.jpg' id='8' alt='강문오듯5'/>
    </Grid.Column>
    <Grid.Column  onClick={onClick} className={styles.ImageBox}>
      <Image  src='/image/6.jpeg' id='9' alt='강문오듯6'/>
    </Grid.Column>
  </Grid.Row>
  </Grid>
  </div>
};

export default Gallery;
