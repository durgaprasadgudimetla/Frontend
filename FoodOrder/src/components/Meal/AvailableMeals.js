import calsses from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealIteam from '../Meal/MealItem/MealItem'
const AvailableMeals = props =>{

    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];

    const mealsList = DUMMY_MEALS.map((meal) => <MealIteam key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);
    return(
        <section className={calsses.meals} >
            
               <Card>
                 <ul>
                    {mealsList}
                </ul>
               </Card>
                
            
        </section>
    )
}

export default AvailableMeals;