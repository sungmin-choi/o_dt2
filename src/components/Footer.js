import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { MAIN_COLOR } from '../constant';

const FooterWrapper = styled.footer`
  padding: 6px;
  background-color: ${MAIN_COLOR};
  height: 120px;
  text-align: center;
  color: azure;
  padding-bottom: 20px;
`

const FacebookIcon = styled(Icon)`
    transition: 0.3s;
    color: white;
    cursor: pointer;
    &:hover{
        color: #3867d6;
    }
`

const InstagramIcon = styled(Icon)`
    transition: 0.3s;
    color: white;
    cursor: pointer;
    &:hover{
        color: rgb(221, 42, 123);
    }
`

const Footer = () => {
const year = new Date().getFullYear();
  return (
  <FooterWrapper >
     <div style={{margin: '10px'}}>
    <a rel='noopener noreferrer'target='_blank' href="https://www.facebook.com/%EC%98%A4%EB%93%AF-102259498856036/?ref=nf&hc_ref=ARSEBzj7yqpwWHbrp8yyw2mYr23fPrONSAz23ZAHabcie2VYBigSZKm2iLcz97wh3Wg&__tn__=%3C-R">
    <FacebookIcon  size='large' name="facebook f" />
    </a>
    <a rel='noopener noreferrer' href="https://www.instagram.com/o.dt_gangmoon/" target='_blank'>
    <InstagramIcon  size='large' name="instagram" />
    </a>
    </div>
    <p style={{display:'block',paddingTop:'10px'}}>사업자등록번호:000-00-00000 &nbsp; &nbsp; TEL:033-651-4408 &nbsp; &nbsp;개인정보 책임자:최현진</p>
    <p style={{display:'block',paddingBottom:'10px'}}>Copyright © {year} o_dt Restaurant</p>
</FooterWrapper>);
};

export default Footer;
