import React, { useCallback, useEffect, useState } from 'react';
import { Menu, Segment, Icon } from 'semantic-ui-react';
import BarList from './barList/BarList';
import styles from './Top.module.css';
import { useRouter } from 'next/router';

const Top = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    const [isShowList, setIsShowList] = useState(false);

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setIsMobileView(true)
                : (setIsMobileView(false), setIsShowList(false));
        };
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness());
        window.addEventListener('scroll', () => setIsShowList(false)); // 이거 위험함
        return window.removeEventListener('scroll', () => setIsShowList(false));
    }, []);
    const handlePos = (ele) => {
        if (document.querySelector('#menuBar')) {
            let menuHeight = document.querySelector('#menuBar').offsetHeight;
            let location = document.querySelector(ele).offsetTop;
            window.scrollTo({
                top: location - menuHeight - 57,
                behavior: 'smooth',
            });
        }
    };
    const onClick = useCallback((e, data) => {
        const name = data.name;
        if (name === '메 뉴') {
            handlePos('#menuPos');
        } else if (name === '블로그') {
            handlePos('#blogPos');
        } else if (name === '매장소개') {
            handlePos('#introducePos');
        } else if (name === '홈') {
            handlePos('#menuBar');
        }
    }, []);

    const showNavbar = useCallback(() => {
        setIsShowList((prev) => !prev);
    }, []);

    return (
        <nav>
            <Segment className={styles.HeadWrapper} inverted>
                <Menu size="large" inverted secondary>
                    {isMobileView && (
                        <div onClick={showNavbar} className={styles.bars}>
                            <Icon name="bars" size="large" />
                        </div>
                    )}
                    <header
                        style={{
                            borderRadius: '50%',
                            marginRight: '20px',
                            marginLeft: `${isMobileView ? '3rem' : '5px'}`,
                        }}
                    >
                        <span className={styles.title}>{`o_dt`}</span>
                    </header>
                    {!isMobileView && (
                        <>
                            <Menu.Item name="홈" onClick={onClick} />
                            <Menu.Item name="매장소개" onClick={onClick} />
                            <Menu.Item name="메 뉴" onClick={onClick} />
                            <Menu.Item name="블로그" onClick={onClick} />
                        </>
                    )}
                </Menu>
                <div
                    style={{
                        position: 'absolute',
                        top: '1.8rem',
                        right: '2rem',
                        color: 'white',
                    }}
                >
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/%EC%98%A4%EB%93%AF-102259498856036/?ref=nf&hc_ref=ARSEBzj7yqpwWHbrp8yyw2mYr23fPrONSAz23ZAHabcie2VYBigSZKm2iLcz97wh3Wg&__tn__=%3C-R"
                    >
                        <Icon
                            className={styles.FacebookIcon}
                            size="large"
                            name="facebook f"
                        />
                    </a>
                    <a
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/o.dt_gangmoon/"
                        target="_blank"
                    >
                        <Icon
                            className={styles.InstagramIcon}
                            size="large"
                            name="instagram"
                        />
                    </a>
                </div>
            </Segment>
            {isShowList && <BarList />}
        </nav>
    );
};

export default Top;
