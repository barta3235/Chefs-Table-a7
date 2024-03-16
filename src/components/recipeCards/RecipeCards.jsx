import { useEffect } from "react";
import { useState } from "react";
import Card from "../card/Card";
import PropTypes from 'prop-types';

const RecipeCards = ({handleCurrentlyCooking}) => {

    const [recipeCards,setRecipeCards]=useState([]);

    useEffect(()=>{
        fetch('recipe.json')
        .then(res=> res.json())
        .then(data=>setRecipeCards(data));
    },[])

    return (
        <div className="lg:w-[60%] grid grid-cols-1 lg:grid-cols-2 gap-6 mb-[100px]">
            {
               recipeCards.map((recipeCard)=><Card key={recipeCard.recipe_id} card={recipeCard} handleCurrentlyCooking={handleCurrentlyCooking}></Card>)
            }
            
        </div>
    );
};

RecipeCards.propTypes={
    handleCurrentlyCooking:PropTypes.func,
}

export default RecipeCards;