import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Textonly from './components/textonly/Textonly'
import RecipeCards from './components/recipeCards/RecipeCards'
import CurrentlyCooking from './components/currentlyCooking/CurrentlyCooking'
import WantToCook from './components/wantToCook/WantToCook'
import { useState } from 'react'
import Footer from './components/footer/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {

  const [sum,setSum]=useState(0);
  const [calorie,setCalorie]=useState(0);

  const [currentlyCooking,setCurrentlyCooking]=useState([]);

  const [selected,setSelected]= useState([]);

  const [count2,setCount2]= useState(0);

  const handleSelected=(pick)=>{
      const newlySelected=[...selected,pick];
      setSelected(newlySelected);

      //updated the bottom counter
      const newcount2= count2+1;
      setCount2(newcount2);

      //updating the top counter
      const newcount3= count-1;
      setCount(newcount3);

      // removing from upper list
      const change= currentlyCooking.filter((item)=>item.recipe_id!== pick.recipe_id)
      setCurrentlyCooking(change);
      
      setSum(sum+pick.preparing_time);

      setCalorie(calorie+pick.calories);
      
  }


    


  const [count,setCount]= useState(0);

  const handleCurrentlyCooking=(cooking)=>{
     const isPResent= currentlyCooking.find((khabar)=>khabar.recipe_id==cooking.recipe_id);
     if(!isPResent){
        const newcount=count+1
        setCount(newcount);
        setCurrentlyCooking([...currentlyCooking,cooking]);
     }else{
      toast("You cannot select the same recipe twice!",{
        closeOnClick: true,
        autoClose: 3000,
        draggable: true,
        style:{
          background:	'	#bb2124',
          color: 'white',
        }
      });
     }
  }


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Textonly></Textonly>
      <div className='flex flex-col lg:flex-row gap-6 mx-[10px] lg:mx-[100px] mb-[30px] lg:mb-[100px]'>
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
                <h1 className='mb-[16px] mt-[32px] text-[24px] font-bold text-center'>Currently Cooking: {count2}</h1>
                 
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
                  selected.map((pickedItem,idx)=><WantToCook key={idx} pickedItem={pickedItem} ></WantToCook>)
                 }
              </div>

              
             
              <div className='bg-[#0BE58A] flex flex-col lg:flex-row justify-around mx-[20px] py-[20px] border-[4px] border-dashed mt-[50px] text-[20px] font-semibold text-center'>
                 <h1>Total Time: <span className='bg-green-900 text-white p-1 rounded-2xl'>{sum} minutes</span></h1>
                 <h1>Total Calorie: <span className='bg-green-900 text-white rounded-2xl p-1'>{calorie} calories</span></h1>
              </div>
              



          </div>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
      
    </>
  )
}

export default App
