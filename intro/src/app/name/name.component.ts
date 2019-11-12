import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  template:`<p>
  {{name}}
</p>`,
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  constructor() { }
  name="Gamzee"
  ngOnInit() {
  }

}
