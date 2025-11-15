
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

type Card = { rank: number; src: string; alt: string };

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  private readonly sorted: Card[] = [
    { rank: 2, src: '/cards/card_2.png', alt: 'Two of Hearts' },
    { rank: 3, src: '/cards/card_3.png', alt: 'Three of Hearts' },
    { rank: 4, src: '/cards/card_4.png', alt: 'Four of Hearts' },
    { rank: 5, src: '/cards/card_5.png', alt: 'Five of Hearts' },
    { rank: 6, src: '/cards/card_6.png', alt: 'Six of Hearts' },
    { rank: 7, src: '/cards/card_7.png', alt: 'Seven of Hearts' },
  ];

  cards: Card[] = [...this.sorted];

  onSort(): void { this.cards = [...this.sorted]; }
  onReverse(): void { this.cards = [...this.cards].reverse(); }
  onShuffle(): void {
    const a = [...this.cards];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    this.cards = a;
  }
}
