import React from 'react';
import { List, Segment } from 'semantic-ui-react';
import styles from './BarList.module.css';
const BarList = () => {
  return (
  <Segment size='large' className={styles.ListWrapper} inverted>
  <List divided inverted relaxed>
    <List.Item>
      <List.Content>
        <List.Header>홈</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>에 약</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>매장소개</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>메 뉴</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>블로그</List.Header>
      </List.Content>
    </List.Item>
  </List>
  </Segment>);
};

export default BarList;
