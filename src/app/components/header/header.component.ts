import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  href: string;

  constructor(private router: Router) {
    this.router.events.subscribe((res) => (this.href = this.router.url));
  }

  ngOnInit(): void {}
}
