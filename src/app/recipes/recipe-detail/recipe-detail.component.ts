import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
    @Input() name: string;
    @Input() imageUrl: string;
    @Input() description: string;
    @Input() ingredients: string;
    constructor() {}

    ngOnInit(): void {}
}
