import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-poc',
  template: `
  	<div class="pdf-viewer-outer-container">
	  <pdf-viewer src="assets/JavaScript Code Test.pdf"></pdf-viewer>
	</div>
  `,
  styles: [`
	  .pdf-viewer-outer-container {
	    height: 90vh;
	    width: 60vw;
	    margin: auto auto;
	    overflow-y: auto;
	    box-shadow: 4px 4px 10px #aaa;
	    background-color: #fff;
	}`]
})
export class PdfPocComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
