import { Component, OnInit, inject } from '@angular/core';
import { Item } from './interfaces/item';
import { ItemCardComponent } from './ui/item-card/item-card.component';
import { ItemsStoreService } from './data-access/items-store.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ItemCardComponent, AsyncPipe],
  template: `
    @if(items$ | async; as items) {
    <div class="item-container">
      @for (item of items; track $index) {
      <app-item-card class="item-card" [item]="item" />
      }
    </div>
    } @else {
    <div class="loading">Loading...</div>
    }
  `,
})
export class HomeComponent implements OnInit {
  private itemStore = inject(ItemsStoreService);
  items$!: Observable<Item[]>;

  ngOnInit(): void {
    this.items$ = this.itemStore.items$;
  }
}
