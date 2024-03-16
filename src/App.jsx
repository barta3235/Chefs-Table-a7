import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Textonly from './components/textonly/Textonly'
import RecipeCards from './components/recipeCards/RecipeCards'
import CurrentlyCooking from './components/currentlyCooking/CurrentlyCooking'
import WantToCook from './components/wantToCook/WantToCook'


function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Textonly></Textonly>
      <div className='flex flex-col lg:flex-row gap-6 mx-[10px] lg:mx-[100px]'>
          <RecipeCards></RecipeCards>
          <div className='lg:w-[40%]'>
             <CurrentlyCooking></CurrentlyCooking>
             <WantToCook></WantToCook>
          </div>
      </div>
      
    </>
  )
}

export default App
