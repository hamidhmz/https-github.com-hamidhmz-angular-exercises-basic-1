import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ng-content-test',
  templateUrl: './ng-content-test.component.html',
  styleUrls: ['./ng-content-test.component.scss'],
})
export class NgContentTestComponent implements OnInit {
  @ContentChild('wannaAccessToContent', { static: true })
  contentSth: ElementRef;
  constructor() {
    this.something();
  }

  ngOnInit(): void {}
  something() {
    console.log(this.contentSth);
  }
}
