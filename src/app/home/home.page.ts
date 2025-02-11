import { Component } from '@angular/core';
import { ExamenService } from '../examen.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  Quote: any;
  constructor(private ExamenService: ExamenService, private router: Router) { }
  ngOnInit() {
    this.ExamenService.getQuote().subscribe((data) => { this.Quote = data; console.log(data) });
  }

}
