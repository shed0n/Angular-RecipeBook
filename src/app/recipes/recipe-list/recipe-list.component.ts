import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test recipe', 'Test desc', 'https://upload.wikimedia.org/wikipedia/commons/7/79/Goulash_from_usa.jpg'),
    new Recipe('test recipe', 'Test desc', 'https://upload.wikimedia.org/wikipedia/commons/7/79/Goulash_from_usa.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
