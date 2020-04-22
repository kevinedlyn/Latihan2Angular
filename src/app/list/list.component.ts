import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  temp = '';
  data : String[];

  ngOnInit() {
    this.temp="";
    this.temp = this.temp + "Jurusan : ";
    let nama = this.route.snapshot.paramMap.get('namajurusan');
    this.temp = this.temp + nama;
    this.temp = this.temp + " ,Penjelasan : ";
    let des = this.route.snapshot.paramMap.get('deskripsijurusan');
    this.temp = this.temp + des;
    this.data.push(this.temp);
  }
}