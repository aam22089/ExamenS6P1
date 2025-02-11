import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  imports: [CommonModule, NgFor]
})
export class FormularioComponent implements OnInit {


  items: {
    id: number; title: string; date: string, name: string,
    producer: string, protagonist: string
  }[] = [];
  nextId: number = 1;
  constructor(public navCtrl: NavController) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  addItem(title: string, date: string, name: string, producer: string, protag: string): void {
    if (name.trim() && date.trim() && title.trim() && producer.trim() && protag.trim()) {
      this.items.push({
        id: this.nextId++,
        title: title.trim(),
        date: date.trim(),
        name: name.trim(),
        producer: producer.trim(),
        protagonist: protag.trim(),
      });
    }
    else {
      console.error('El nombre y la fecha no pueden estar vacíos');
    }
  }

}
