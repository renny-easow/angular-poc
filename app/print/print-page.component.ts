import { Component, OnChanges, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
 	selector: 'print-page',
  	template: `
	  	<div #content style="display: none;"></div>
	`
})

export class PrintPageComponent implements OnChanges {

  	constructor() { }

  	@Input() config: any;
  	@Input() data: any;
  	@ViewChild('content') content: ElementRef;

	ngOnChanges() {
		this.readFile();
		this.print(this.config);
		this.content.nativeElement.remove();
	}

	readFile() {
	    var file = this.data.text;
	    let str = '<table style="border-collapse: collapse; width: 100%; page-break-inside: avoid;">';

	    var lines = file.split('\n');
	    for(var line = 0; line < lines.length; line++){
	        str += line==0 ? '<tr style="background-color: #777; color: #fff;">' : '<tr>';
	        var tabs = lines[line].split('\t');
	        for(var tab = 0; tab < tabs.length; tab++){    
                str += '<td style="border: 1px solid #aaa;">' + tabs[tab] + '</td>';
	        }
	        str += '</tr>';
	    }
	    str += '</table>';

	    //to be removed
	    str += '<br/><br/>' + str + '<br/><br/>' + str;
	    // str += '<div class="pagebreak"></div>' + str + '<div class="pagebreak"></div>' + str;

	    this.content.nativeElement.innerHTML = '<div class="page">' + str + '</div>';
  	}

	print(config){
	    var contents = this.content.nativeElement.innerHTML;
	    var frame1 = document.createElement('iframe');
	    frame1.name = "frame3";
	    frame1.style.position = "absolute";
	    frame1.style.top = "-1000000px";
	    document.body.appendChild(frame1);
	    var frameDoc = frame1.contentWindow;
	    frameDoc.document.open();
	    frameDoc.document.write(`
	    	<html>
	    		<head>
	    			<style>
						@media print {
							@page {
								size: auto; 
								margin: ` + config.top + ` ` + config.right + ` ` + config.bottom + ` ` + config.left + `;
							}
							@page :first {
							    margin-top: ` + config.letterheadMargin + `;
							}
							body {
								margin: 0;
							    box-shadow: 0;
							    font-family: 'Segoe UI';
							}
						  	.page {
							  	margin: 0;
							    box-shadow: 0;
						  	}
						}
			    	</style>
			    </head>
		`);
		// @page {size: auto; margin: 20mm auto; } 
		// 		    	html{ background-color: #FFFFFF; margin: 0px; } 
		// 		    	body { margin: 50mm 15mm 20mm 15mm;
		// 		    	page-break-after: always; }
		// 		    	.pagebreak { page-break-before: always; }
				    	
	    frameDoc.document.write('<body>');
	    frameDoc.document.write(contents);
	    frameDoc.document.write('</body></html>');
	    frameDoc.document.close();
	    setTimeout(function () {
	        window.frames["frame3"].focus();
	        window.frames["frame3"].print();
	        document.body.removeChild(frame1);
	    }, 500);
	    return false;
    }
}