import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tabla-num-term',
  templateUrl: './tabla-num-term.component.html',
  styleUrls: ['./tabla-num-term.component.css']
})
export class TablaNumTermComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  
  num: number;
  tabla: string;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.num = parseInt(parametros.get("num"));
      this.tabla = '';
      for (let x = 1; x <= parseInt(parametros.get("term")); x++) {
        let t = x * this.num;
        this.tabla += t + '-';
      }
    })
  }

}
