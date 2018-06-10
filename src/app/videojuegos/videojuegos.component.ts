import { Component } from '@angular/core';

@Component({
    selector: 'videojuegos',
    template: `<h2>Componente de {{nombre}}</h2>
   <h3 *ngIf="mostrar_retro != true">el mejor juego es: {{mejor_juego}}</h3>
   <h3 [style.background]="color" *ngIf="mostrar_retro"> el  juego retro es {{mejor_juego_retro}}</h3>
   <h2>listado de video juegos</h2>
   <ul>
   <li *ngFor="let game of videojuegos">{{game}}</li>
   </ul>
   `
})
export class VideojuegosComponent{
    public nombre='Video juegos';
    public mejor_juego ='gta 5';
    public mejor_juego_retro ='super mario 64';
    public mostrar_retro=true;
    public color = "yellow";

    public videojuegos=['los simpson hit and run'
    ,'call of duty','taken','gta','otro'];
}