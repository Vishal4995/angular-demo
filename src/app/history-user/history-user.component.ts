import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-user',
  standalone: true,
  imports: [],
  templateUrl: './history-user.component.html',
  styleUrl: './history-user.component.scss'
})
export class HistoryUserComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/search']);
  }
}
