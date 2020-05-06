import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    Output,
    EventEmitter,
} from '@angular/core';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;
    @Output() CreateIngredient = new EventEmitter<{
        ingredientName: string;
        ingredientAmount: number;
    }>();
    constructor() {}

    ngOnInit(): void {}

    addAnotherIngredient() {
        this.CreateIngredient.emit({
            ingredientName: this.nameInput.nativeElement.value,
            ingredientAmount: this.amountInput.nativeElement.value,
        });
    }
}
