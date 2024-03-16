import PropTypes from 'prop-types';

const CurrentlyCooking = ({food}) => {
    const {recipe_name,preparing_time,calories}=food;
    return (
        <tr>
        <th></th>
        <td>{recipe_name}</td>
        <td>{preparing_time} minutes</td>
        <td>{calories} calories</td>
        <button className='bg-[#0BE58A] font-semibold text-black px-[18px] py-[16px] rounded-bl-2xl
        '>Preparing</button>
      </tr>  
    );
};

CurrentlyCooking.propTypes={
    food: PropTypes.object,
    count: PropTypes.number,
}


export default CurrentlyCooking;