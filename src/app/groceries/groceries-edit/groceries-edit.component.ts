import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Groceries } from '../groceries.model';

@Component({
  selector: 'app-groceries-edit',
  standalone: false,
  templateUrl: './groceries-edit.component.html',
  styleUrl: './groceries-edit.component.css',
})
export class GroceriesEditComponent
  implements OnInit, OnChanges, AfterViewInit
{
  @Input() grocery: Groceries | null = null;
  @Output() grocerySaved = new EventEmitter<Groceries>();

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('categoryInput') categoryInputRef: ElementRef;
  @ViewChild('quantityInput') quantityInputRef: ElementRef;
  @ViewChild('priceInput') priceInputRef: ElementRef;

  @Output() itemAdded = new EventEmitter<Groceries>();

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}

  ngAfterViewInit() {
    this.updateForm();
  }

  private updateForm() {
    if (this.grocery && this.nameInputRef) {
      this.nameInputRef.nativeElement.value = this.grocery.name;
      this.categoryInputRef.nativeElement.value = this.grocery.category;
      this.quantityInputRef.nativeElement.value =
        this.grocery.quantity.toString();
      this.priceInputRef.nativeElement.value = this.grocery.price.toString();
    } else if (this.nameInputRef) {
      this.nameInputRef.nativeElement.value = '';
      this.categoryInputRef.nativeElement.value = '';
      this.quantityInputRef.nativeElement.value = '1';
      this.priceInputRef.nativeElement.value = '0';
    }
  }

  onSaveItem() {
    const itemName = this.nameInputRef.nativeElement.value;
    const itemCategory = this.categoryInputRef.nativeElement.value;
    const itemQuantity = parseInt(
      this.quantityInputRef.nativeElement.value,
      10,
    );
    const itemPrice = parseFloat(this.priceInputRef.nativeElement.value);
    const newGrocery = new Groceries(
      Date.now().toString(),
      itemName,
      itemCategory,
      itemQuantity,
      itemPrice,
      false,
    );
    this.itemAdded.emit(newGrocery);
  }
}
