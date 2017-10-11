import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();


    private recipes: Recipe[] = [
        new Recipe('Big Mac', 'A Big-Mac with double cheese',
        'http://d701vexhkz032.cloudfront.net/media/images/menu-content/BR/sanduiches-de-carne/bigmac_v2.png',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 2),
            new Ingredient('Cheese', 4)
        ]),
        new Recipe('Schnitzel', 'A super-tasty Schnitzel', 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
          this.recipes[index] = newRecipe;
          this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }
}
