import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();


    private recipes: Recipe[] = [
        new Recipe('Test recipe', 'Test desc', 'https://upload.wikimedia.org/wikipedia/commons/7/79/Goulash_from_usa.jpg'),
        new Recipe('Another test recipe', 'Test desc', 'https://upload.wikimedia.org/wikipedia/commons/7/79/Goulash_from_usa.jpg')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}