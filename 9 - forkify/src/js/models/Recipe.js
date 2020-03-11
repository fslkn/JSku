import axios from 'axios';
import {config} from '../config';

export default class Recipe {
    constructor(id){
        this.id = id;
    }

    async getRecipe(){
        try{
            const res = await axios(`${config.getRecipeAPI}/${this.id}/information?includeNutrition=false&apiKey=${config.key}`);
            this.title = res.data.title;
            this.img = res.data.image;
            this.url = res.data.sourceUrl;
            this.time = res.data.readyInMinutes;
            this.servings = res.data.servings;
            this.ingredients = res.data.extendedIngredients;
        }catch(error){
            alert(error);
        }
    }

    parseIngredients(){
        // const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        // const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];

        // let ingr = [];
        // const count = [];
        // const unit = [];
        // const ingredients = [];

        const newIngredients = this.ingredients.map(el => {
            // 1. Uniform units
            // console.log(el);
            // let amount = el.amount.toString().toLowerCase();
            let amountRounded = Math.round((el.amount + Number.EPSILON) * 100) / 100;
            let unit = el.unit.toString().toLowerCase();
            let ingredient = el.originalName.toString().toLowerCase();


            let ingr = {
                amount: amountRounded,
                unit: unit,
                ingredient: ingredient
            }
            // unitsLong.forEach((unit, i) => {
            //     ingredient = ingredient.replace(unit, unitsShort[i]);
            // });
            // alert(ingredient)

            // 2. Remove parentheses
            // ingredient = ingredient.replace(/ *\([^)]*\) */g, '');
    

            // 3. Parse ingredients into count, unit and ingredient
            // const arrIng = ingredient.split(' ');
            // const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2));

            // let amount = el.amount;
            // let units = el.unit;
            // let ori = el.originalName;


            // console.log(`${amountRounded} = ${units} = ${ori}`);

            // count.push(`${amountRounded} ${units} ${ori}`);
            // unit.push(units);
            // ingredients.push(ori);
            // ingr = {
            //     count: count,
            //     unit: unit,
            //     ingredient: ingredients
            // };


            // console.log(`${amount} ${unit} ${ori}`);
            // let objIng;
            // if(unitIndex > -1){
            //     // There a unit
            //     const arrCount = arrIng.slice(0, unitIndex);

            //     let count;
            //     if(arrCount.length === 1){
            //         count = eval(arrIng[0].replace('-', '+'));
            //     }else{
            //         count = eval(arrIng.slice(0, unitIndex).join('+'));
            //     }

            //     objIng = {
            //         count,
            //         unit: arrIng[unitIndex],
            //         ingredient: arrIng.slice(unitIndex + 1).join(' ')
            //     }
            // }else if(parseInt(arrIng[0], 10)){
            //     // There is NO unit, but 1st element is number
            //     objIng = {
            //         count: parseInt(arrIng[0], 10),
            //         unit: '',
            //         ingredient: arrIng.slice(1).join(' ')
            //     }
            // }else if(unitIndex === -1){
            //     // There is NO unit
            //     objIng = {
            //         count: 1,
            //         unit: '',
            //         ingredient
            //     }
            // }

            return ingr;

        });
        
        this.ingredients = newIngredients;
    }
}