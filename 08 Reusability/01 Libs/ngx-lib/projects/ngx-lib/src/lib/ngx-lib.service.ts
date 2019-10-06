import { Injectable } from '@angular/core';
import { FoodItem } from './FoodItem';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NgxLibService {
	data: FoodItem[] = [
		{ name: 'Pad Thai', rating: 5 },
		{ name: 'Butter Chicken', rating: 5 },
		{ name: 'Cannelloni', rating: 4 },
		{ name: 'Cordon Bleu', rating: 2 }
	];

	constructor() {}

	getFood(): Observable<FoodItem[]> {
		return of(this.data);
	}
}
