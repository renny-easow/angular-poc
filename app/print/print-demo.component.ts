import { Component } from '@angular/core';

@Component({
 	selector: 'print-demo',
  	template: `
	  	<print-page *ngIf=data [data]=data [config]=config></print-page>
	`
})

export class PrintDemoComponent {
	config = {
  		top: '25mm',
  		bottom: '20mm',
  		left: '15mm',
  		right: '15mm',
  		letterheadMargin: '70mm'
  	};

  	data = Data;
}

export var Data = {
	text: `#	Epic	Story	Due Date	Status
1	PDF	Create PDF from JSON data		
		View PDF within Angular component		
		Open PDF as new browser tab when a link is clicked		
		Download PDF		
2	Print	Print HTML or JSON data in A4 format		
		Letter pad (with padding options)		
3	WYSIWYG Editor	Font style and indentation		
		Numbering and lists		
		Table		
		Other features available in Confluence		
4	File Upload	"Types - images, pdf, Excel & Word"		
		Send file from Angular component to Node/Express API		
		Receive file from Node/Express API		
		Open in new browser tab		
		View in Angular component		
5	Image Capture	Take photo using Webcam		
		Send image data to Node/Express API		
		Receive image data from Node/Express API		
		Show received image in Angular component`
};
