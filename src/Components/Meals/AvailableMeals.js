import {useEffect, useState } from 'react'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
 import classes from './AvailableMeals.module.css'

// const SAMPLE_MEALS=[
//     {
//         id:'f1',
//         name:'Hyderabadi Mutton Dum Biryani',
//         description:'One of the finest food in Hyderabad and world famous food,The best in taste cooked with best ingredients and high quality POTLA "GOAT MEAT" brought from the best farms of  Telanagana.',
//         price: 299,
//     },
//     {
//         id:'f2',
//         name: 'Hyderabadi Chicken Dum Biryani',
//         description:'One of the finest food in Hyderabad and world famous food,The best in taste cooked with best ingredients and high quality "CHICKEN" brought from the best farms of Telanagana.',
//         price: 249,
//     },
//     {
//         id:'f3',
//         name :'Telanagana Spicy Chicken Curry',
//         description:'Spiciest curry with lots of masala and the best Meat, perfectly cooked with tender meat.  ',
//         price:250,
//     },

//     {
//         id:'f4',
//         name :'Telanagana Spicy Mutton Curry',
//         description:'Spiciest curry with lots of masala and the best Meat, perfectly cooked with tender meat.  ',
//         price:350,
//     },
//     {
//         id:'f5',
//         name:'Naatu Kodi & Raagi Sangati',
//         description:'All the way from Rayalaseema, the best Naatu Kodi and Raagi Sangati spicy,tasty,healthy. It is Cooked with Country Chicken from the Wild Forests of Telangana & Andhra Pradesh',
//         price: 250,
//     },
//     {
//         id:'f6',
//         name:'Meka thalakai koora(Goat Head)',
//         description:'The traditional way of cooking Goat head with choosen spices and cooked on slow flame for 5hrs for the best taste you need',
//         price:350,
//     },
// ]

// function chechoutPage() {
//     window.location = 'default.aspx'; 
//   }
  

const AvailableMeals =()=>{
    const [food, setFood] = useState([]);
    const [isLoading , setIsLoading] =useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(()=>{
        const fetchFood= async () =>{
        const response =  await  fetch('https://food-http-eaaf3-default-rtdb.firebaseio.com/foods.json'
            
        );
      
        if(!response.ok){
            throw new Error('పోయింది...మల్లా ట్రై చెయ్యి!!!')
        }
        const responseData = await response.json();

        const loadedFood = [];

        for(const key in responseData){
            loadedFood.push({
                id: key,
                name: responseData[key].name,
                description: responseData[key].description,
                price: responseData[key].price,
            })
        }
        setFood(loadedFood);
        setIsLoading(false);
    }
    fetchFood().catch((error)=>{
            setIsLoading(false);
            setHttpError(error.message);
    });
    },[]);

    if(isLoading){
        return(
            <section className={classes.FoodLoading}>
                <p>Looooooading....</p>
            </section>
        )
    }

    if (httpError) {
        return (
          <section className={classes.FoodError}>
            <p>{httpError}</p>
          </section>
        );
      }
    
    const foodList=food.map((food)=>(
        <MealItem 
             key={food.id} 
             id={food.id}
             name={food.name} 
             description={food.description}
             price={food.price}
             />
             ))

             
    return (<section className={classes.food}>
        <Card>
           <ul> {foodList}</ul>
          
        {/* <button className={classes.btn} onClick={chechoutPage}>🏃🏻Checkout</button>  */}
        {/*  <HeaderCartButton /> */}
        </Card>
    </section>
    );
};

export default AvailableMeals;



