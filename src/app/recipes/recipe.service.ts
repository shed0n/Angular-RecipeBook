import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();


    private recipes: Recipe[] = [
        new Recipe('Big Mac', 'A Big-Mac with double cheese', 
        'http://d701vexhkz032.cloudfront.net/media/images/menu-content/BR/sanduiches-de-carne/bigmac_v2.png',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Schnitzel', 'A super-tasty Schnitzel', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 2),
            new Ingredient('Cheese', 4)
        ])
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}