import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
    ingredients: string;
    description: string;
    constructor() {}

    ngOnInit(): void {}

    showDetail(item: {
        ingredientOfRecipe: string;
        descriptionOfRecipe: string;
    }) {
        console.log('some', item);
        this.ingredients = item.ingredientOfRecipe;
        this.description = item.descriptionOfRecipe;
    }
}
