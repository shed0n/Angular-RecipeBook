import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    // const headers =  new HttpHeaders().set('Authorization', 'Bearer sdasdasdad');

    return this.httpClient.put('https://shedon-angular-project.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      observe: 'body',
      params: new  HttpParams().set('auth',  token)
      // headers: headers
    });
  }

  getRecipes() {
    const token = this.authService.getToken();
    // this.httpClient.get<Recipe[]>('https://shedon-angular-project.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://shedon-angular-project.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json',
      params: new  HttpParams().set('auth',  token)
    })
      .map(
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}

