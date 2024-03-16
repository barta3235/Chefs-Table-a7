import PropTypes from 'prop-types';

const CurrentlyCooking = ({food,handleSelected}) => {
    const {recipe_name,preparing_time,calories}=food;
    return (
       <div className='flex flex-col lg:flex-row justify-between mb-3 py-3 border-b-2 border-dashed bg-[#28282808] rounded-lg'>
        <div className='flex justify-between gap-[38px] items-center px-2'>
          <div>{recipe_name}</div>
          <div>{preparing_time} minutes</div>
          <div>{calories} calories</div>
        </div>
        <button onClick={()=>handleSelected(food)} className='bg-[#0BE58A] font-semibold text-black lg:px-[15px] lg:py-[10px] rounded-bl-2xl
        '>Preparing</button> 

       </div>
    );
};

CurrentlyCooking.propTypes={
    food: PropTypes.object,
    count: PropTypes.number,
    handleSelected: PropTypes.func
}


export default CurrentlyCooking;