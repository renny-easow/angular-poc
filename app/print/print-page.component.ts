import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from '../services/message-service';

@Component({
 	selector: 'print-page',
  	template: `
	  	<div *ngIf="data.ReportType!='dischageSummary'" #content style="display: none;">
	  		<div *ngFor="let page of pages; let pageNumber=index;" class="page-style">
		  		<div class="page-title">{{data.ReportName}}</div>
			  	<table *ngIf="data.ReportType=='prescription'" class="header-table">
		  			<tr>
			  			<td class="header-col1">Name:</td>
			  			<td class="header-col2">{{data.PatientInfo.PatientName}}</td>
			  			<td class="header-col3">Age/Gender:</td>
			  			<td class="header-col4">{{data.PatientInfo.Age + ' / ' + data.PatientInfo.Gender}}</td>
		  			</tr>
		  			<tr>
			  			<td class="header-col1">Prescribed By:</td>
			  			<td class="header-col2">{{data.PatientInfo.PrescribedBy}}</td>
			  			<td class="header-col3">Date/Time:</td>
			  			<td class="header-col4">{{data.PatientInfo.Date}}</td>
		  			</tr>
		  			<tr>
			  			<td class="header-last-row-col1">&nbsp;</td>
			  			<td class="header-last-row-col2">{{'Page ' + (pageNumber + 1) + ' of ' + pages.length}}</td>
		  			</tr>
				</table>
				<table *ngIf="data.ReportType=='lab'" class="header-table">
		  			<tr>
			  			<td class="header-col1">Name:</td>
			  			<td class="header-col2">{{data.PatientInfo.PatientName}}</td>
			  			<td class="header-col3">Age/Gender:</td>
			  			<td class="header-col4">{{data.PatientInfo.Age + ' / ' + data.PatientInfo.Gender}}</td>
		  			</tr>
		  			<tr>
			  			<td class="header-col1">MRN No:</td>
			  			<td class="header-col2">{{data.PatientInfo.MRN}}</td>
			  			<td class="header-col3">Sample ID:</td>
			  			<td class="header-col4">{{data.PatientInfo.SampleId}}</td>
		  			</tr>
		  			<tr>
			  			<td class="header-col1">Referer:</td>
			  			<td class="header-col2">{{data.PatientInfo.Referer}}</td>
			  			<td class="header-col3">Sample Collection:</td>
			  			<td class="header-col4">{{data.PatientInfo.SampleCollection}}</td>
		  			</tr>
		  			<tr>
			  			<td class="header-col1">Hospital / Clinic:</td>
			  			<td class="header-col2">{{data.PatientInfo.HospitalName}}</td>
			  			<td class="header-col3">Report Completion:</td>
			  			<td class="header-col4">{{data.PatientInfo.ReportCompletion}}</td>
		  			</tr>
		  			<tr>
			  			<td class="header-last-row-col1">&nbsp;</td>
			  			<td class="header-last-row-col2">{{'Page ' + (pageNumber + 1) + ' of ' + pages.length}}</td>
		  			</tr>
				</table>

				<table *ngIf="data.ReportType=='prescription'" class="contents-table">
		  			<thead>
			  			<th class="prescription-col1 table-thead">MEDICINE</th>
			  			<th class="prescription-col2 table-thead">NOS.</th>
			  			<th class="prescription-col3 table-thead">FREQUENCY</th>
			  			<th class="prescription-col4 table-thead">DURATION</th>
			  			<th class="prescription-col5  table-theadtable-thead">COMMENTS</th>
		  			</thead>
		  			<tr *ngFor="let medicine of page;">
		  				<td class="prescription-col1">{{medicine.MedicineName}}</td>
			  			<td class="prescription-col2">{{medicine.Dosage}}</td>
			  			<td class="prescription-col3">{{medicine.Frequency}}</td>
			  			<td class="prescription-col4">{{medicine.Duration}}</td>
			  			<td class="prescription-col5">{{medicine.Comments}}</td>
		  			</tr>
		  		</table>
				<table *ngIf="data.ReportType=='lab'" class="contents-table">
		  			<thead>
			  			<th class="lab-col1 table-thead">Test Description (Method - Sample Type)</th>
			  			<th class="lab-col2 table-thead">Observed Value</th>
			  			<th class="lab-col3 table-thead">Units</th>
			  			<th class="lab-col4 table-thead">Reference Range</th>
		  			</thead>
		  			<tr *ngFor="let test of page;">
		  				<td *ngIf="test.heading" class="lab-col1"><strong>{{test.Name}}</strong></td>
		  				<td *ngIf="!test.heading" class="lab-col1" [innerHTML]="'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + test.Name"></td>
			  			<td class="lab-col2">{{test.Value}}</td>
			  			<td class="lab-col3">{{test.Units}}</td>
			  			<td class="lab-col4">
			  				<div *ngFor="let reference of test.ReferenceRange">{{reference}}</div>
			  			</td>
		  			</tr>
		  		</table>
		  	</div>
		</div>
		
		<div *ngIf="data.ReportType=='dischageSummary'" #content style="display: none;">
			<div class="discharge-title">{{data.ReportName}}</div>

			<div *ngFor="let section of data.Sections;" class="section-style">
				<div class="section-heading">{{section.SectionHeading}}</div>
				<table *ngIf="section.OutputType == 'Table'" class="discharge-table">
					<tr *ngFor="let item of section.SectionDetails;">
						<td class="discharge-table-col1"><strong>{{item.Key}}</strong></td>
						<td class="discharge-table-col2">
							<span *ngFor="let value of item.Value; let l = last;">{{value}}<br *ngIf=!l></span>
						</td>
					</tr>
				</table>
				
				<ol *ngIf="section.OutputType == 'OrderedList'">
					<li *ngFor="let item of section.SectionDetails;">{{item}}</li>
				</ol>

				<ul *ngIf="section.OutputType == 'UnorderedList' || section.OutputType == 'SimpleList'">
					<li *ngFor="let item of section.SectionDetails;" [style.list-style]="section.OutputType == 'SimpleList' ? 'none' : 'disc'">{{item}}</li>
				</ul>

				<div *ngIf="section.OutputType == 'Complex'" style="margin: 0px; padding: 0px;">
					<div *ngFor="let subSection of section.SectionDetails;">
						<div *ngIf="subSection.OutputType != 'KeyValue'" class="sub-section-heading">{{subSection.SubSectionHeading}}</div>
						<ol *ngIf="subSection.OutputType == 'OrderedList'">
							<li *ngFor="let item of subSection.SubSectionDetails;">{{item}}</li>
						</ol>

						<ul *ngIf="subSection.OutputType == 'UnorderedList' || subSection.OutputType == 'SimpleList'">
							<li *ngFor="let item of subSection.SubSectionDetails;" [style.list-style]="subSection.OutputType == 'SimpleList' ? 'none' : 'disc'">{{item}}</li>
						</ul>

						<div *ngIf="subSection.OutputType == 'KeyValue'" class="key-value">
							<span style="font-weight: bold;">{{subSection.SubSectionHeading + ':'}}</span>
							<span>{{subSection.SubSectionDetails}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	`
})

export class PrintPageComponent {

  	@Input() config: any;
  	@Input() data: any;
  	@ViewChild('content') content: ElementRef;
  	currentPage: number = 1;
  	pages: Array<any>;

  	constructor(private messageService: MessageService) {
        this.messageService.listen().subscribe((message:any) => {
            if(message == 'print') {
	            this.printPage();
	        }
        });
    }

    printPage() {
    	this.setupData();
		setTimeout(()=> {
			this.print(this.config);
		}, 100);
			
		this.content.nativeElement.remove();
    }

	setupData() {
		this.pages = [];
		switch(this.data.ReportType) {
			case 'prescription':
				this.processPrescriptionData();
				break;
			case 'lab':
				this.processLabResultData();
				break;
			case 'dischageSummary':
				break;
		}
	}

	processPrescriptionData() {
		for(let i=0, index=0, count=0; i<this.data.MedicineList.length; i++, count++) {
			if(count==0) {
				this.pages[index] = [];
			}
			this.pages[index].push(this.data.MedicineList[i]);
			if(count==17) {
				index++;
				count = -1;
			}
		}
	}

	processLabResultData() {
		let index = 0, count = 0;
		
		this.data.TestList.forEach(testParent => {
			if(count==0) {
				this.pages[index] = [];
			}
			this.pages[index].push({
				"Name": testParent.TestParent,
				"Value": testParent.Value,
				"Units": testParent.Units,
				"ReferenceRange": testParent.ReferenceRange,
				"heading": true
			});
			count++;
			testParent.SubjectAreas.forEach(subject => {
				if(count > 14) {
					index++;
					count = 0;
				}
				if(count==0) {
					this.pages[index] = [];
				}
				this.pages[index].push({
					"Name": subject.Subject,
					"Value": subject.Value,
					"Units": subject.Units,
					"ReferenceRange": subject.ReferenceRange,
					"heading": true
				});
				count++;
				if(count==17) {
					index++;
					count = 0;
				}
				subject.Tests.forEach(test => {
					if(count==0) {
						this.pages[index] = [];
					}
					this.pages[index].push(test);
					count++;
					if(count==17) {
						index++;
						count = 0;
					}
				});
			});
			index++;
			count = 0;
		});
	}

	print(config) {
	    let contents = this.content.nativeElement.innerHTML;
	    let frame = document.createElement('iframe');
	    frame.name = "printFrame";
	    frame.style.position = "absolute";
	    frame.style.top = "-1000000px";
	    document.body.appendChild(frame);
	    let frameDoc = frame.contentWindow;
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
							    color: #333;
							}
						  	.page {
							  	margin: 0;
							    box-shadow: 0;
						  	}
						  	.page-style {
						  		width: 100%
						  		margin: 0;
						  		padding: 0;
						  		page-break-inside: avoid;
						  	}
						  	.page-title {
						  		width: 100%;
						  		text-align: center;
						  		text-decoration: underline;
						  		font-size: 16px;
						  		line-height: 45px;
						  		font-family: 'Segoe UI Semibold';
						  	}
						  	.header-table {
						  		width: 100%;
						  		border: 1px solid #aaa;
						  		padding: 10px;
						  		font-size: 12px;
						  	}
						  	.header-col1 {
						  		width: 15%;
						  		float: left;
						  		margin: 0;
						  		padding: 0;
						  		font-weight: bold;
						  		margin-bottom: 5px;
						  	}
						  	.header-col2 {
						  		width: 47%; 
						  		float: left; 
						  		margin: 0; 
						  		padding: 0; 
						  		text-transform: 
						  		uppercase; margin-bottom: 5px;
						  	}
						  	.header-col3 {
						  		width: 18%; 
						  		float: left; 
						  		margin: 0; 
						  		padding: 0; 
						  		font-weight: bold; 
						  		margin-bottom: 5px;
						  	}
						  	.header-col4 {
						  		width: 20%; 
						  		float: left; 
						  		margin: 0; 
						  		padding: 0; 
						  		margin-bottom: 5px;
						  	}
						  	.header-last-row-col1 {
						  		width: 80%; 
						  		float: left; 
						  		margin: 0; 
						  		padding: 0;
						  	}
						  	.header-last-row-col2 {
						  		width: 20%; 
						  		float: left; 
						  		margin: 0; 
						  		padding: 0;
						  	}

						  	.contents-table {
						  		width: 100%; 
						  		padding: 0px; 
						  		font-size: 12px; 
						  		text-align: left; 
						  		margin-top: 50px;
						  	}
						  	.table-thead {
						  		border-bottom: 1px solid #aaa;
						  	}
						  	.prescription-col1 {
						  		width: 39%; 
						  		float: left; 
						  		margin: 0; 
						  		padding: 5px 0 5px 5px; 
						  	}
						  	.prescription-col2 {
						  		width: 7%; 
						  		float: left; 
						  		margin: 0; 
						  		padding: 5px 0; 
						  	}
						  	.prescription-col3 {
						  		width: 17%; 
						  		float: left; 
						  		margin: 0; 
						  		padding: 5px 0; 
						  	}
						  	.prescription-col4 {
						  		width: 17%; 
						  		float: left; 
						  		margin: 0; 
						  		padding: 5px 0; 
						  	}
						  	.prescription-col5 {
						  		width: 19%; 
						  		float: left; 
						  		margin: 0; 
						  		padding: 5px 0; 
						  	}
						  	.lab-col1 {
						  		width: 40%; 
						  		float: left; 
						  		margin: 0; 
						  		padding: 5px 0 5px 5px; 
						  	}
						  	.lab-col2 {
						  		width: 20%; 
						  		float: left; 
						  		margin: 0; 
						  		padding: 5px 0; 
						  	}
						  	.lab-col3 {
						  		width: 19%; 
						  		float: left; 
						  		margin: 0; 
						  		padding: 5px 0; 
						  	}
						  	.lab-col4 {
						  		width: 20%; 
						  		float: left; 
						  		margin: 0; 
						  		padding: 5px 0; 
						  	}

						  	.discharge-title {
						  		width: 100%; 
						  		text-align: center; 
						  		font-size: 16px; 
						  		font-weight: bold; 
						  		line-height: 45px; 
						  		font-family: 'Segoe UI';
						  	}
						  	.section-style {
						  		margin-bottom: 15px;
						  	}
						  	.section-heading {
						  		border-bottom: 1px solid #aaa; 
						  		font-size: 14px; 
						  		font-weight: bold; 
						  		padding: 0 0 2px 6px; 
						  		page-break-after: avoid;
						  	}
						  	.sub-section-heading {
						  		font-size: 12px; 
						  		font-weight: bold; 
						  		margin-top: 15px; 
						  		page-break-after: avoid;
						  	}
						  	.discharge-table {
						  		width: 100%; 
						  		padding: 0px; 
						  		font-size: 12px; 
						  		text-align: left; 
						  		margin-top: 15px; 
						  		border-spacing: 0px;
						  	}
						  	.discharge-table-col1 {
						  		width: 40%; 
						  		float: left; 
						  		margin: 0; 
						  		padding: 5px 0 5px 5px;
						  	}
						  	.discharge-table-col2 {
						  		width: 55%; 
						  		float: right; 
						  		margin: 0; 
						  		padding: 5px 0;
						  	}
						  	ol, ul {
						  		font-size: 12px; margin-top: 15px;
						  	}
						  	.key-value {
						  		margin: 0px; 
						  		padding: 0px; 
						  		font-size: 12px; 
						  		margin-top: 10px;
						  	}
						}
			    	</style>
			    </head>
		`);
				    	
	    frameDoc.document.write('<body>');
	    frameDoc.document.write(contents);
	    frameDoc.document.write('</body></html>');
	    frameDoc.document.close();
	    setTimeout(function () {
	        window.frames["printFrame"].focus();
	        window.frames["printFrame"].print();
	        document.body.removeChild(frame);
	    }, 400);
    }
}
