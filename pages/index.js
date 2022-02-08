import HomeScreen from "../src/components/homeScreen/home"
import DivideLine from "../src/components/divideLine/divideLine"
import MenuComponent from "../src/components/menu/menu"
import Introduce from "../src/components/introduce/introduce"
import Blogs from "../src/components/blogs/blogs"
import Top from "../src/components/Top"
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import {Loader} from "semantic-ui-react"



export default function Home() {
  const [blogs,setBlogs] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const getNaverScript = async()=>{
    return await axios.get('https://odt2.herokuapp.com/');
  }
  
  useEffect(async()=>{
    console.log(isLoading);
    await getNaverScript()
    .then(result=>setBlogs(result.data))
    setIsLoading(false);
  },[]);
  return (
    <>
    <div>
      <div id='menuBar'>
      <Top />
      </div>
      <HomeScreen/>
      <div id="menuPos">
      <DivideLine  id="menuPos" title={'메 뉴'} />
      </div>
      <MenuComponent />
      <div id="introducePos">
      <DivideLine id="introducePos" title={'매장 소개'} />
      </div>
      <Introduce/>
      <div id='blogPos'>
      <DivideLine id='blogPos' name='blog' title={'블로그'} />
      </div>
      {isLoading ?
        <div style={{padding: '100px 0'}}>
            <Loader inline='centered' active size='large'>블로그 불러오는중...</Loader>
        </div>:
        <Blogs items={blogs}/>
      }
      
    </div>
    </>
  )
}
