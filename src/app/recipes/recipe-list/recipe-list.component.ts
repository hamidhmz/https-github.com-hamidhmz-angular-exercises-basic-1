import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor() {}

  createNew(data: {
    nameOfRecipe: string;
    descriptionOfRecipe: string;
    pathOfRecipe: string;
  }) {
    this.recipes.push(
      new Recipe(data.nameOfRecipe, data.descriptionOfRecipe, data.pathOfRecipe)
    );
  }
  ngOnInit(): void {}
}
