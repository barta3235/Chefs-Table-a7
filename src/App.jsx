import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Textonly from './components/textonly/Textonly'
import RecipeCards from './components/recipeCards/RecipeCards'
import CurrentlyCooking from './components/currentlyCooking/CurrentlyCooking'
import WantToCook from './components/wantToCook/WantToCook'
import { useState } from 'react'




function App() {

  const [currentlyCooking,setCurrentlyCooking]=useState([]);

  const [selected,setSelected]= useState([]);

  const handleSelected=(pick)=>{
      const newlySelected=[...selected,pick];
      setSelected(newlySelected);

      // removing from upper list
      const change= currentlyCooking.filter((item)=>item.recipe_id!== pick.recipe_id)
      setCurrentlyCooking(change);

      // setting total time
      

      //setting total calorie
  }
    

  const [count,setCount]= useState(0);

  const handleCurrentlyCooking=(cooking)=>{
     const newcount=count+1
     setCount(newcount);
     const isPResent= currentlyCooking.find((khabar)=>khabar.recipe_id==cooking.recipe_id);
     if(!isPResent){
        setCurrentlyCooking([...currentlyCooking,cooking]);
     }else{
        alert('Cannot make the same entry twice');
        location.reload();
     }
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Textonly></Textonly>
      <div className='flex flex-col lg:flex-row gap-6 mx-[10px] lg:mx-[100px]'>
          <RecipeCards handleCurrentlyCooking={handleCurrentlyCooking}></RecipeCards>
          
        <div className='lg:w-[40%] border rounded-2xl'>
          <h1 className='mb-[16px] mt-[32px] text-[24px] font-bold text-center'>Want to Cook: {count}</h1>
          <hr />
          <div>
            

             <div className='text-[#878787] font-semibold mb-[40px]'>
               <table className="table">
                 <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                 </thead>
                 </table>
                <div className='px-2'>
                {
                   currentlyCooking.map((food,idx)=><CurrentlyCooking key={idx} food={food} count={count} handleSelected={handleSelected} ></CurrentlyCooking>)
                }
                </div>
               
              </div>


              <div>
                <h1 className='mb-[16px] mt-[32px] text-[24px] font-bold text-center'>Currently Cooking: </h1>
                 
                 <hr />
                 <table className="table">
                 <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                 </thead>
                 </table>
                 {
                  selected.map((pickedItem,idx)=><WantToCook key={idx} pickedItem={pickedItem}></WantToCook>)
                 }
              </div>
             

          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
