import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss'],
})
export class RecipeCreateComponent implements OnInit {
  @Output() createRecipe = new EventEmitter<{
    nameOfRecipe;
    descriptionOfRecipe;
    pathOfRecipe;
  }>();
  constructor() {}

  nameOfRecipe: string;
  descriptionOfRecipe: string;
  pathOfRecipe: string;

  onclickForCreate(nameOfRecipe: string) {
    console.log(nameOfRecipe)
    this.nameOfRecipe = nameOfRecipe;
    if (this.nameOfRecipe && this.descriptionOfRecipe && this.pathOfRecipe) {
      this.createRecipe.emit({
        nameOfRecipe: this.nameOfRecipe,
        descriptionOfRecipe: this.descriptionOfRecipe,
        pathOfRecipe: this.pathOfRecipe,
      });
    }
  }
  ngOnInit(): void {}
}
