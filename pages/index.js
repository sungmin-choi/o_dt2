import HomeScreen from "../src/components/homeScreen/home"
import DivideLine from "../src/components/divideLine/divideLine"
import MenuComponent from "../src/components/menu/menu"
import Introduce from "../src/components/introduce/introduce"
export default function Home() {
  return (
    <>
    <div>
      <HomeScreen/>
      <DivideLine title={'메 뉴'} />
      <MenuComponent />
      <DivideLine title={'매장 소개'} />
      <Introduce/>
    </div>
    </>
  )
}
