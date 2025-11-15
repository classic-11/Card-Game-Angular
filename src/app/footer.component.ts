import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DatePipe],
  template: `
    <footer class="footer">
      <div class="container">
        <p>&copy; Sunita Khatiwada | {{ today | date:'MMMM d, y' }}</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer { background:#f3f3f3; border-top:1px solid #ececec; margin-top:28px; }
    .container { width:min(1120px,92%); margin:0 auto; padding:16px 0; text-align:center; color:#555; font-size:14px; }
  `]
})
export class FooterComponent {
  today = new Date();
}
