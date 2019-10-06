import { Component, OnInit } from '@angular/core';
import { NgxLibService } from './ngx-lib.service';
import { FoodItem } from './FoodItem';

@Component({
	selector: 'nglib-food',
	template: `
    <h2>Food:</h2>
    <div *ngFor="let f of food">{{ f.name }}</div>
  `,
	styles: []
})
export class NgxLibComponent implements OnInit {
	constructor(private fs: NgxLibService) {}

	food: FoodItem[] = [];

	ngOnInit() {
		this.fs.getFood().subscribe((data) => {
			this.food = data;
		});
	}
}
