import { Component, Input } from '@angular/core';
import { Item } from '../../interfaces/item';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <div class="item-card">
      <div class="item-card-image">
        <img class="img" src="img/{{ item.image }}" alt="" />
      </div>
      <div class="item-card-content">
        <p class="content-rrp">RRP {{ item.rrp | currency : 'GBP' }}</p>
        <div class="content-name">
          <span class="content-brand">{{ item.brand }}</span>
          {{ item.name }}
        </div>
        <p class="content-default">Size {{ item.size }}</p>
        <p class="content-default">{{ item.rentalPrice | currency : 'GBP' }} Rental</p>
      </div>
    </div>
  `,
})
export class ItemCardComponent {
  @Input({ required: true }) item!: Item;
}
