import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    constructor() {}

    ngOnInit(): void {}
    CreateIngredient(data: {
        ingredientName: string;
        ingredientAmount: number;
    }) {
        this.ingredients.push(
            new Ingredient(data.ingredientName, data.ingredientAmount)
        );
    }

}
