import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tabla-num',
  templateUrl: './tabla-num.component.html',
  styleUrls: ['./tabla-num.component.css']
})
export class TablaNumComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  
  num: number;
  tabla: string;

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((parametros: ParamMap) => {
        this.num = parseInt(parametros.get("num"));
        this.tabla = '';
        for (let x = 1; x <= 10; x++) {
          let t = x * this.num;
          this.tabla += t + '-';
        }
      })
  }

}
