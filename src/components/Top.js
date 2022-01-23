import React, { useCallback, useState } from 'react';
import { Menu, Segment, Icon } from 'semantic-ui-react'
import Image from 'next/image';
import styled from 'styled-components';
import { MAIN_COLOR } from '../constant';

const HeadWrapper = styled(Segment)`
background: ${MAIN_COLOR} !important;
border-radius: 0 !important;
`
const FacebookIcon = styled(Icon)`
    transition: 0.3s;
    cursor: pointer;
    &:hover{
        color: #3867d6;
    }
`

const InstagramIcon = styled(Icon)`
    transition: 0.3s;
    cursor: pointer;
    &:hover{
        color: rgb(221, 42, 123);
    }
`

const Top = () => {
  const [activeItem , setActiveItem] = useState('홈');
  
  const onClick = useCallback((e,data)=>{   
      setActiveItem(data.name);
      console.log(data);
  },[]);

  return (
      <>
    <HeadWrapper  inverted>
      <Menu size='huge' inverted secondary>
      <div style={{borderRadius:'50%', marginRight:'20px',marginLeft:'5px' }}>
      <Image  src='/logo.jpg' width='48px' height='48px' alt='강문오듯로고' />
      </div>
        <Menu.Item
          name='홈'
          active={activeItem === '홈'}
          onClick={onClick}
        />
        <Menu.Item
          name='예 약'
          active={activeItem === '예 약'}
          onClick={onClick}
        />
        <Menu.Item
          name='매장소개'
          active={activeItem === '매장소개'}
          onClick={onClick}
        />
        <Menu.Item
          name='메 뉴'
          active={activeItem === '메 뉴'}
          onClick={onClick}
        />
        <Menu.Item
          name='블로그'
          active={activeItem === '블로그'}
          onClick={onClick}
        />
      </Menu>
    </HeadWrapper>
    <div style={{position:'absolute', top:'1.8rem', right:'2rem', color:'white'}}>
      <FacebookIcon  size='large' name="facebook f" />
      <InstagramIcon  size='large' name="instagram" />
      </div>
    </>
  );
};

export default Top;
