import { Component, OnInit } from "@angular/core";
import { Item } from "../item";
import { ITEMS_A, ITEMS_B, ITEMS_C } from "../mock-items";

export const SALE_TAX = 0.1;
export const IMPORT_TAX = 0.05;

@Component({
  selector: "app-receipt",
  templateUrl: "./receipt.component.html",
  styleUrls: ["./receipt.component.css"]
})
export class ReceiptComponent implements OnInit {
  public itemsList: Array<Item> = [];
  public salesTaxes: String = "";
  public totalAmount: String = "";

  constructor() {}

  ngOnInit() {
    this.itemsList = ITEMS_C;
    this.salesTaxes = this.getAllTaxes(this.itemsList).toFixed(2);
    this.totalAmount = (
      this.getTotal(this.itemsList) + this.getAllTaxes(this.itemsList)
    ).toFixed(2);
  }

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
