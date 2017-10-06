import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
          /* for (let ingredient of ingredients) {
              this.addIngredient(ingredient);
          } */ 
          this.ingredients.push(...ingredients); //o operador ... dentro da função push "quebra" o array em uma lista
          this.ingredientsChanged.next(this.ingredients.slice());
      }
}