import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-quote-list',
    templateUrl: './quote-list.component.html',
    styleUrls: ['./quote-list.component.sass']
})
export class QuoteListComponent implements OnInit {
    itemList = [];
    selectedItems = [];
    showqte: boolean = false;
    quote: any;
    selectedIndex: any;
    showMainContent: any;
    showMenu = false;
    showqtefield: boolean = true;
    settings = {};
    constructor() { }
    ngOnInit() {

        // this.itemList = [
        // { "id": 1, "itemName": "India" },
        // { "id": 2, "itemName": "Singapore" },
        // { "id": 3, "itemName": "Australia" },
        // { "id": 4, "itemName": "Canada" },
        // { "id": 5, "itemName": "South Korea" },
        // { "id": 6, "itemName": "Brazil" }
        // ];

        // this.selectedItems = [
        // { "id": 1, "itemName": "India" },
        // { "id": 2, "itemName": "Singapore" },
        // { "id": 3, "itemName": "Australia" },
        // { "id": 4, "itemName": "Canada" }];
        // this.settings = {
        // text: "Select Countries",
        // selectAllText: '',
        // unSelectAllText: '',
        // classes: "myclass custom-class",
        // enableSearchFilter: true,
        // showCheckbox: false,
        // escapeToClose: true,
        // searchAutofocus: true

        // };
        // onItemSelect(item: any) {
        // console.log(item);
        // console.log(this.selectedItems);
        // }
        // OnItemDeSelect(item: any) {
        // console.log(item);
        // console.log(this.selectedItems);
        // }
        // onSelectAll(items: any) {
        // console.log(items);
        // }
        // onDeSelectAll(items: any) {
        // console.log(items);
        // }

    }
    quotenums = ['Quote123', 'Quote122', 'Quote121', 'Quote120'];
    selectedQuotes = [];

    quotenum(quote, i) {
        // 	this.quote = quote;
        // 	//this.quotegroups = [this.quote];
        // 	this.selectedIndex = i;
        // 	this.showqtefield = false;
        //    this.showqte = this.showMainContent ? false : true;
        var c = this.selectedQuotes.map(function (item) { return item }).indexOf(quote);
        if (c == -1) {
            this.selectedQuotes.push(quote);
        }
    }
    clear(quote) {
        this.showqte = false;
        this.showqtefield = true;
        // this.showMenu = true;
        var c = this.selectedQuotes.map(function (item) { return item; }).indexOf(quote);
		if (c != -1) {
			this.selectedQuotes.splice(c, 1);
		}
    }
}
