import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('searchInput')
  input!: { nativeElement: { focus: () => void; }; };
  onClick(): void {
    this.input.nativeElement.focus();
  }
}
