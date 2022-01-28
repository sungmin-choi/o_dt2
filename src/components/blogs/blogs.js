import React from 'react';
import { Item,Label} from 'semantic-ui-react'
import Blog from '../blog/blog';
const Blogs = ({items}) => {
  return <div style={{width:'80%',margin:'auto',paddingBottom:'2rem',paddingTop:'2rem'}}>
  <Item.Group divided>
  {items && items.map((item)=>{
    return <Blog key={item.id} item={item} />
  })}
  </Item.Group>
</div>
};

export default Blogs;
