import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../interfaces/item';
import { ITEMS } from './items-data';

@Injectable({
  providedIn: 'root'
})
export class ItemsStoreService {
  private itemsSubject = new BehaviorSubject<Item[]>(ITEMS);
  items$: Observable<Item[]> = this.itemsSubject.asObservable();
}
