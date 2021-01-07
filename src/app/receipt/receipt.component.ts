import { Component } from "@angular/core";
import { Item } from "../item";
import { ITEMS_A, ITEMS_B, ITEMS_C } from "../mock-items";

export const SALE_TAX = 0.1;
export const IMPORT_TAX = 0.05;

@Component({
  selector: "app-receipt",
  templateUrl: "./receipt.component.html",
  styleUrls: ["./receipt.component.css"]
})
export class ReceiptComponent {
  items = ITEMS_A;
  //items = ITEMS_B;
  //items = ITEMS_C;

  taxes = this.getAllTaxes(this.items).toFixed(2);
  total = (this.getTotal(this.items) + this.getAllTaxes(this.items)).toFixed(2);

  getItemTax(item: Item) {
    return item.isTaxable && item.isImported
      ? item.value * (SALE_TAX + IMPORT_TAX)
      : item.isTaxable
      ? item.value * SALE_TAX
      : item.isImported
      ? item.value * IMPORT_TAX
      : 0;
  }

  getItemPrice(item: Item) {
    return (item.count * (item.value + this.getItemTax(item))).toFixed(2);
  }

  getAllTaxes(items: Array<Item>) {
    return items
      .map(item => item.count * this.getItemTax(item))
      .reduce((a, b) => a + b, 0);
  }
  getTotal(items: Array<Item>) {
    return items
      .map(item => item.count * item.value)
      .reduce((a, b) => a + b, 0);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
