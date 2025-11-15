import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <div class="container">
        <h1>Assignment 1 - Six Cards</h1>
      </div>
    </header>
  `,
  styles: [`
    .header { background:#fff; }
    .container { width:min(1120px,92%); margin:22px auto 0; }
    h1 { margin:18px 0 6px; text-align:center; font-weight:800; }
  `]
})
export class HeaderComponent {}
