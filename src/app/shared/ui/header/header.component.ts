import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div class="header">
      <img class="img" src="person-cog.svg" alt="" />
    </div>
  `,
})
export class HeaderComponent {}
