import ShowCurrentCooking from '../showCurrentCooking/ShowCurrentCooking'
import PropTypes from 'prop-types';

const CurrentlyCooking = ({food,count}) => {
    return (
        <div className="font-lexend text-[24px]">
            {
                 <ShowCurrentCooking food={food} count={count}></ShowCurrentCooking>
            }
        </div>
    );
};

CurrentlyCooking.propTypes={
    food: PropTypes.object,
    count: PropTypes.number,
}


export default CurrentlyCooking;