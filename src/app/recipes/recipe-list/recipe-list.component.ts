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
  nameOfRecipe: string;
  descriptionOfRecipe: string;
  pathOfRecipe: string;

  onclickForCreate() {
    if (this.nameOfRecipe && this.descriptionOfRecipe && this.pathOfRecipe) {
      this.createNew(
        this.nameOfRecipe,
        this.descriptionOfRecipe,
        this.pathOfRecipe
      );
      this.nameOfRecipe = '';
      this.descriptionOfRecipe = '';
      this.pathOfRecipe = '';
    }
  }
  createNew(name, description, imagePath) {
    this.recipes.push(new Recipe(name, description, imagePath));
  }
  ngOnInit(): void {}
}
