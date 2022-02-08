import React from 'react';
import { List, Segment } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import styles from './BarList.module.css';
const BarList = () => {
  const router = useRouter();
  return (
  <Segment size='large' className={styles.ListWrapper} inverted>
  <List divided inverted relaxed>
    <List.Item>
      <List.Content>
      <List.Header style={{cursor:'pointer'}} onClick={()=>{router.push('/#menuPos')}}>메 뉴</List.Header>
        
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
      <List.Header style={{cursor:'pointer'}} onClick={()=>{router.push('/#introducePos')}}>매장소개</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header style={{cursor:'pointer'}} onClick={()=>{router.push('/#blogPos')}}>블로그</List.Header>
      </List.Content>
    </List.Item>
  </List>
  </Segment>);
};

export default BarList;
