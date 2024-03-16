import PropTypes from 'prop-types';
const Card = ({card}) => {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories}=card;
    return (
        <div className='font-lexend border rounded-2xl p-6'>
            <img className='mb-[24px] rounded-2xl w-[320px] h-[250px]' src={recipe_image} alt="" />
            <h1 className='text-[20px] font-semibold mb-[16px]'>{recipe_name}</h1>
            <p className='mb-[16px] font-fira-sans text-[#878787]'>{short_description}</p>

            <hr />

            <h1 className='mt-[16px] text-[19px] font-medium mb-[16px]'>Ingredients: {ingredients.length}</h1>
            <div className='mb-[16px] font-fira-sans text-[#878787]'>
               {
                ingredients.map((item,idx)=>{
                     return (<li key={idx}>{item}</li>)
                })
               }
            </div>

            <hr />

            <div className='flex flex-col lg:flex-row md:flex-row mt-[24px] gap-8 mb-[26px]'>
                
                <div className='flex gap-3'>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                   </svg>
                   <h1>{preparing_time} minutes</h1>
                </div>

                <div className='flex gap-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                  </svg>
                  <h1>{calories} calories</h1>
                </div>

            </div>

            <button className="text-[20px] font-semibold rounded-full bg-[#0BE58A] lg:px-[50px] py-[20px]">Want to Cook</button>
            
           
        </div>
    );
};

Card.propTypes={
    card: PropTypes.object,
}

export default Card;