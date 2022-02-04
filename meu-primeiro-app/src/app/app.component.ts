import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-template [ngIf]="getDados">
      <h1>{{getDados.nome}}</h1>
      <h2>{{getDados.idade}}</h2>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output>
    <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  public addValue: number = 0;

  public getDados: {nome: string, idade: number} | undefined;

  constructor() { }

  ngOnInit(): void {  }

  public add() {
    this.addValue += 1;
  }

  public setDados(event: any) {
    this.getDados = event;
  }
}
