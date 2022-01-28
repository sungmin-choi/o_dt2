import HomeScreen from "../src/components/homeScreen/home"
import DivideLine from "../src/components/divideLine/divideLine"
import MenuComponent from "../src/components/menu/menu"
import Introduce from "../src/components/introduce/introduce"
import Blogs from "../src/components/blogs/blogs"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs,setBlogs] = useState([]);
  const getNaverScript = async()=>{
    return await axios.get('http://localhost:3065');
  }
  useEffect(()=>{
    getNaverScript().then(result=>setBlogs(result.data));
  },[]);
  return (
    <>
    <div>
      <HomeScreen/>
      <DivideLine title={'메 뉴'} />
      <MenuComponent />
      <DivideLine title={'매장 소개'} />
      <Introduce/>
      <DivideLine title={'블로그'} />
      <Blogs items={blogs}/>
    </div>
    </>
  )
}
