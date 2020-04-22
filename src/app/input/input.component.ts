import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private router : Router) { }
  ngOnInit() {
  }
  namajurusan  :string;
  deskripsijurusan : string;

  submit()
  {
     this.router.navigate(['/list', this.namajurusan, this.deskripsijurusan]);
  }
}