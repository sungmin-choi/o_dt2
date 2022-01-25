import React, { useCallback, useEffect, useState } from 'react';
import { Menu, Segment, Icon } from 'semantic-ui-react'
import BarList from './barList/BarList';
import styles from './Top.module.css';

const Top = () => {
  const [activeItem , setActiveItem] = useState('홈');
  const [isMobileView,setIsMobileView] = useState(false);
  const [isShowList, setIsShowList] = useState(false);
  useEffect(()=>{
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setIsMobileView(true)
        : (setIsMobileView(false),setIsShowList(false));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    window.addEventListener('scroll',()=>setIsShowList(false)); // 이거 위험함 
    return (
      window.removeEventListener('scroll',()=>setIsShowList(false))
    )
  },[])
  
  const onClick = useCallback((e,data)=>{   
      setActiveItem(data.name);
  },[]);

  const showNavbar = useCallback(()=>{
    setIsShowList((prev)=>!prev);
  },[])

  return (
    <>
    <Segment className={styles.HeadWrapper} inverted>
      <Menu size='large' inverted secondary>
      {isMobileView && <div onClick={showNavbar} className={styles.bars}><Icon  name='bars' size='large'/></div>}
      <div style={{borderRadius:'50%', marginRight:'20px',marginLeft:`${isMobileView ? '3rem': '5px'}` }}>
      <span className={styles.title}>{`o_dt`}</span>
      </div>
      {!isMobileView && 
          <>
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
          </>
      }
     
      </Menu>
      <div  style={{position:'absolute', top:'1.8rem', right:'2rem', color:'white'}}>
      <a rel='noopener noreferrer'target='_blank' href="https://www.facebook.com/%EC%98%A4%EB%93%AF-102259498856036/?ref=nf&hc_ref=ARSEBzj7yqpwWHbrp8yyw2mYr23fPrONSAz23ZAHabcie2VYBigSZKm2iLcz97wh3Wg&__tn__=%3C-R">
      <Icon className={styles.FacebookIcon} size='large' name="facebook f" />
      </a>
      <a rel='noopener noreferrer' href="https://www.instagram.com/o.dt_gangmoon/" target='_blank'>
      <Icon className={styles.InstagramIcon} size='large' name="instagram" />
      </a>
      </div>
    </Segment>
    {isShowList && <BarList />}
    </>
  );
};

export default Top;
