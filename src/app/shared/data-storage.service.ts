import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    // const headers =  new HttpHeaders().set('Authorization', 'Bearer sdasdasdad');

    // return this.httpClient.put('https://shedon-angular-project.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new  HttpParams().set('auth',  token)
    //   // headers: headers
    // });
    const req = new HttpRequest('PUT', 'https://shedon-angular-project.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() {
    // this.httpClient.get<Recipe[]>('https://shedon-angular-project.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://shedon-angular-project.firebaseio.com/recipes.json', { observe: 'body', responseType: 'json' })
      .map(
        (recipes) => {
          console.log(recipes);
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

