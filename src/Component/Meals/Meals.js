import React from "react";
import AvailabelMeals from "./AvailableMeals";
import MealsSummery from "./MealsSummery";


const Meals = () => {
    return (
        <React.Fragment>
            <MealsSummery />
            <AvailabelMeals />
        </React.Fragment>

    );
}
export default Meals;