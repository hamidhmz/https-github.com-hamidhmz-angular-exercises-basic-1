import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
    ingredients: string;
    description: string;
    imageUrl: string;
    name: string;
    constructor() {}

    ngOnInit(): void {}

    showDetail(item: {
        ingredientOfRecipe: string;
        descriptionOfRecipe: string;
        nameOfRecipe: string;
        pathOfRecipe: string;
    }) {
        console.log('some', item);
        this.ingredients = item.ingredientOfRecipe;
        this.description = item.descriptionOfRecipe;
        this.name = item.nameOfRecipe;
        this.imageUrl = item.pathOfRecipe;
    }
}
