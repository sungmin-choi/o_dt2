import React from 'react';
import { Item,Label } from 'semantic-ui-react';
import styles from './blog.module.css';
const Blog = ({item}) => {
  return (
  <>
  <Item>
  <Item.Image  src={item.img} />
  <Item.Content>
    <Item.Header as='a'><a className={styles.a} rel='noopener noreferrer'target='_blank' href={item.link}>{item.title}</a></Item.Header>
    <Item.Meta>
      <span className='cinema'>{item.createAt}</span>
    </Item.Meta>
    <Item.Description>{item.description}</Item.Description>
    <Item.Extra>
        {item.tags.map((tag)=> {return <Label key={`tag${item.id}`}>{tag}</Label>})}
    </Item.Extra>
    </Item.Content>
    </Item>
    </>);
};

export default Blog;
