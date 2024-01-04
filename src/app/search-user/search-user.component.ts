
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-search-user',
  standalone: true,
  imports: [],
  templateUrl: './search-user.component.html' ,
  styleUrl: './search-user.component.scss'
})


export class SearchUserComponent implements OnInit{
  // isHistory:boolean = false
  // isHomeSearch:boolean = true
  data: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 navigateToHistory() {
    this.router.navigate(['/history']);
   
  }

  navigateToHome() {
    this.router.navigate(['/search']);
  }
}