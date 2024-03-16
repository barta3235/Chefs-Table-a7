import PropTypes from 'prop-types';

const WantToCook = ({pickedItem}) => {
    const {recipe_name,preparing_time,calories}=pickedItem;
    return (
        <div className='flex flex-col lg:flex-row justify-between mb-3 py-3 border-b-2 border-dashed bg-[#28282808] rounded-lg'>
        <div className='flex justify-between gap-[38px] items-center px-2'>
          <div>{recipe_name}</div>
          <div>{preparing_time} minutes</div>
          <div>{calories} calories</div>
        </div>
       </div>
    );
};


WantToCook.propTypes={
    pickedItem: PropTypes.object,

}

export default WantToCook;