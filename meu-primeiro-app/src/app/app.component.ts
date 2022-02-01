import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{valor}}
    <button (click)="adicionar()">Adicionar</button>
    <app-title *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponent()">Destruir componente></button>
    <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  public valor: number = 1;
  public destruir:boolean = true;

  constructor() { }

  public adicionar():number {
    return this.valor += 1;
  }

  public destruirComponent() {
    this.destruir = false;
  }

  ngOnInit(): void {
    setTimeout(() => { console.log("Oi") }, 5000)
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
}
