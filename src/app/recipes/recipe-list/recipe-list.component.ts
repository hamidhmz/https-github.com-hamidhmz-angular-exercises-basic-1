import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
    @Output() detailAbout = new EventEmitter<{
        nameOfRecipe;
        descriptionOfRecipe;
        pathOfRecipe;
        ingredientOfRecipe;
    }>();

    recipes: Recipe[] = [];
    constructor() {}
    selectInToItem(item: {
        name: string;
        description: string;
        imagePath: string;
        ingredients: string;
    }) {
        if (
            item.name &&
            item.description &&
            item.imagePath &&
            item.ingredients
        ) {
            console.log('this is inside rec');
            this.detailAbout.emit({
                nameOfRecipe: item.name,
                descriptionOfRecipe: item.description,
                pathOfRecipe: item.imagePath,
                ingredientOfRecipe: item.ingredients,
            });
        }
    }
    createNew(data: {
        nameOfRecipe: string;
        descriptionOfRecipe: string;
        pathOfRecipe: string;
        ingredientOfRecipe: string;
    }) {
        this.recipes.push(
            new Recipe(
                data.nameOfRecipe,
                data.descriptionOfRecipe,
                data.pathOfRecipe,
                data.ingredientOfRecipe
            )
        );
    }
    ngOnInit(): void {}
}
