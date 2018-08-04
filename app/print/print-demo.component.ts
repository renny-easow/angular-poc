import { Component } from '@angular/core';
import { MessageService } from '../services/message-service';

@Component({
 	selector: 'print-demo',
  	template: `
	  	<print-page *ngIf=data [data]=data [config]=config></print-page>
	  	<button (click)="createPrintEvent()" title="Print Page" style="margin: 1vw; font-size: 1vw; cursor: pointer;">Print</button>
	`
})

export class PrintDemoComponent {

  	private config = {
  		top: '45mm',
  		bottom: '30mm',
  		left: '15mm',
  		right: '15mm',
  		letterheadMargin: '45mm'
  	};

  	// private data = LabData;
  	// private data = PrescriptionData;
  	private data = DischageSummaryData;
	
    constructor(private messageService: MessageService) { }

	createPrintEvent():void {
	    this.messageService.filter('print');
	}
}

export let DischageSummaryData = {
	ReportType: 'dischageSummary',
	ReportName: 'Dischage Summary',
	Sections : [
	{
		SectionHeading: 'Patient Information',
		OutputType: "Table",			
		SectionDetails: [
		{
			Key: "MRN",
			Value: ["NMC3213213"]
		}, {
			Key: "Patient Name",
			Value: ["Mr. First name and Last name"]
		}, {
			Key: "Age, Gender",
			Value: ["32 Years, Male"]
		}, {
			Key: "Address",
			Value: ["Flat No 99, 99 Street number, Test Street, Test Road, Country - PICODE"]
		}, {
			Key: "Mobile No.",
			Value: ["+91 9999999999"]
		}]
	}, {
		SectionHeading: "Case Information",
		OutputType: "Table",			
		SectionDetails: [
		{
			Key: "IP / VisitNo",
			Value: ["021355"]
		}, {
			Key: "Ward / Bed No.",
			Value: ["Special – F1 – S1234"]
		}, {
			Key: "Admission No.",
			Value: ["ADM987989"]
		}, {
			Key: "Visit Type Tags",
			Value: ["Emergency, Outpatient, Inpatient"]
		}, {
			Key: "Date of Admission",
			Value: ["021355"]
		}, {
			Key: "Date of Discharge",
			Value: ["021355"]
		}, {
			Key: "Primary Consultant",
			Value: ["021355"]
		}, {
			Key: "Referred / Visiting Consultants",
			Value: [
				"Dr. Sundaram FRCS, MS",
				"Dr. Kritika MD, DM (Cardiology)",
				"Dr. Aishwarya MD, DM (Ophthalmology)"
			]
		}, {
			Key: "Duty Doctors",
			Value: [
				"Dr. Selva M.B.B.S",
				"Dr. Devi M.B.B.S"
			]
		}]
	}, {
		SectionHeading: "Diagnosis",
		OutputType: "OrderedList",
		SectionDetails: [
			"LEFT HYDROURETERONEPHROSIS DUE TO DISTAL URETERIC CALCULUS", 
			"INTRA CEREBRAL PARENCHYMAL ACUTE HAEMORRHAGE IN LEFT THALAMUS / LEFT PERIVENTRICULAR REGION WITH INTRAVENTRICULAR EXTENSION CAUSING RIGHT HEMIPLEGIA", 
			"TYPE II DIABETES MELLITUS",  
			"CHRONIC KIDNEY DISEASE", 
			"HYPOTHYROIDISM"
		]
	}, {
		SectionHeading: "Presenting Complaints",
		OutputType: "UnorderedList",
		SectionDetails: [
			"Fever, Intermittent vomiting, nausea",
			"Generalised weakness, abdominal distension for 3 days ",
			"Headache for 5 days",
			"Decreased sleep for 3 days"
		]
	}, {
		SectionHeading: "History",
		OutputType: "Complex",
		SectionDetails: [
		{
			SubSectionHeading: "Medical History",
			OutputType: "SimpleList",
			SubSectionDetails: [
				"Patient is a known case of Chronic Kidney disease, Diabetes mellitus Hypothyroid, on regular medications.",
				"\n",
				"Patient had multiple history of admissions.",
				"1. 16.03.2016 to 21.03.2010: Cholelithiasis -CBD stenting done.",
				"2. Underwent Haemodialysis at AUM hospital.",
				"3. 17.11.2016: Underwent treatment for urinary tract infection"
			]
		}, {
			SubSectionHeading: "Regular/Current Medication",
			OutputType: "OrderedList",
			SubSectionDetails: [
				"Inj Novarapid (12 Units)---0---(12 Units) s/c",
				"Inj Lantus 0---0---(20 Units) s/c",
				"Tab.THYRONORM 75mcg 1-0-0 ",
				"Tab.NEUROBION FORTE 1-0-0 ",
				"Cap.CRANBERRY 1-0-0 ",
				"Tab. LUPIHEM 12mg 1-0-0"
			]
		}, {
			SubSectionHeading: "Surgical History",
			OutputType: "KeyValue",
			SubSectionDetails: "No history of surgeries."
		}, {
			SubSectionHeading: "Family History",
			OutputType: "KeyValue",
			SubSectionDetails: "No family history"
		}, {
			SubSectionHeading: "Social History",
			OutputType: "KeyValue",
			SubSectionDetails: "No Smoking or Drinking, Married, No Pets"
		}]
	}, {
		SectionHeading: "Vital signs on Visit",
		OutputType: "Complex",
		SectionDetails: [
		{
			SubSectionHeading: "",
			OutputType: "SimpleList",
			SubSectionDetails: [
				"B.P: 98/180",
				"Temp: 99 C",
				"Pulse: 213",
				"SPO2: n/a",
				"Sugar: 2.8",
				"R.R: 545"
			]
		}, {
			SubSectionHeading: "Examinations & Findings:",
			OutputType: "SimpleList",
			SubSectionDetails: [
				"Blood Group – O+",
				"Height – 170 cm, Weight – 79 kg, BMI – 27.34"
			]
		}]
	}]
};

export let PrescriptionData = {
	ReportType: 'prescription',
	ReportName: 'Medical Prescription',
	PatientInfo: {
		PatientName: 'Mr. Tholkappiyyan Arasu Chidambaranathan',
		Age: '30 Y',
		Gender: 'Male',
		PrescribedBy: 'Dr. Thayumana Sundaram MS., FRCS., Director',
		Date: '25-06-2018 11:15 AM'
	},
	MedicineList: [
	{
		MedicineName: 'Paracetamol 500mg',
		Dosage: '10',
		Frequency: 'Morning, Noon, Evening, Night',
		Duration: '5 days',
		Comments: 'After food'
	}, {
		MedicineName: 'Vitamin C',
		Dosage: '30',
		Frequency: 'Night',
		Duration: '1 month',
		Comments: ''
	}, {
		MedicineName: 'Eye Drops',
		Dosage: '1',
		Frequency: '2 hours',
		Duration: '1 day',
		Comments: ''
	}, {
		MedicineName: 'Prune Tablet',
		Dosage: '1',
		Frequency: 'Night',
		Duration: 'One-time only',
		Comments: ''
	}, {
		MedicineName: 'Paracetamol 500mg',
		Dosage: '10',
		Frequency: 'Morning, Noon, Evening, Night',
		Duration: '5 days',
		Comments: 'After food'
	}, {
		MedicineName: 'Vitamin C',
		Dosage: '30',
		Frequency: 'Night',
		Duration: '1 month',
		Comments: ''
	}, {
		MedicineName: 'Eye Drops',
		Dosage: '1',
		Frequency: '2 hours',
		Duration: '1 day',
		Comments: ''
	}, {
		MedicineName: 'Prune Tablet',
		Dosage: '1',
		Frequency: 'Night',
		Duration: 'One-time only',
		Comments: ''
	}, {
		MedicineName: 'Paracetamol 500mg',
		Dosage: '10',
		Frequency: 'Morning, Noon, Evening, Night',
		Duration: '5 days',
		Comments: 'After food'
	}, {
		MedicineName: 'Vitamin C',
		Dosage: '30',
		Frequency: 'Night',
		Duration: '1 month',
		Comments: ''
	}, {
		MedicineName: 'Eye Drops',
		Dosage: '1',
		Frequency: '2 hours',
		Duration: '1 day',
		Comments: ''
	}, {
		MedicineName: 'Prune Tablet',
		Dosage: '1',
		Frequency: 'Night',
		Duration: 'One-time only',
		Comments: ''
	}, {
		MedicineName: 'Paracetamol 500mg',
		Dosage: '10',
		Frequency: 'Morning, Noon, Evening, Night',
		Duration: '5 days',
		Comments: 'After food'
	}, {
		MedicineName: 'Vitamin C',
		Dosage: '30',
		Frequency: 'Night',
		Duration: '1 month',
		Comments: ''
	}, {
		MedicineName: 'Eye Drops',
		Dosage: '1',
		Frequency: '2 hours',
		Duration: '1 day',
		Comments: ''
	}, {
		MedicineName: 'Prune Tablet',
		Dosage: '1',
		Frequency: 'Night',
		Duration: 'One-time only',
		Comments: ''
	}, {
		MedicineName: 'Paracetamol 500mg',
		Dosage: '10',
		Frequency: 'Morning, Noon, Evening, Night',
		Duration: '5 days',
		Comments: 'After food'
	}, {
		MedicineName: 'Vitamin C',
		Dosage: '30',
		Frequency: 'Night',
		Duration: '1 month',
		Comments: ''
	}, {
		MedicineName: 'Eye Drops',
		Dosage: '1',
		Frequency: '2 hours',
		Duration: '1 day',
		Comments: ''
	}, {
		MedicineName: 'Prune Tablet',
		Dosage: '1',
		Frequency: 'Night',
		Duration: 'One-time only',
		Comments: ''
	}, {
		MedicineName: 'Paracetamol 500mg',
		Dosage: '10',
		Frequency: 'Morning, Noon, Evening, Night',
		Duration: '5 days',
		Comments: 'After food'
	}, {
		MedicineName: 'Vitamin C',
		Dosage: '30',
		Frequency: 'Night',
		Duration: '1 month',
		Comments: ''
	}, {
		MedicineName: 'Eye Drops',
		Dosage: '1',
		Frequency: '2 hours',
		Duration: '1 day',
		Comments: ''
	}, {
		MedicineName: 'Prune Tablet',
		Dosage: '1',
		Frequency: 'Night',
		Duration: 'One-time only',
		Comments: ''
	}, {
		MedicineName: 'Paracetamol 500mg',
		Dosage: '10',
		Frequency: 'Morning, Noon, Evening, Night',
		Duration: '5 days',
		Comments: 'After food'
	}, {
		MedicineName: 'Vitamin C',
		Dosage: '30',
		Frequency: 'Night',
		Duration: '1 month',
		Comments: ''
	}, {
		MedicineName: 'Eye Drops',
		Dosage: '1',
		Frequency: '2 hours',
		Duration: '1 day',
		Comments: ''
	}, {
		MedicineName: 'Prune Tablet',
		Dosage: '1',
		Frequency: 'Night',
		Duration: 'One-time only',
		Comments: ''
	}, {
		MedicineName: 'Paracetamol 500mg',
		Dosage: '10',
		Frequency: 'Morning, Noon, Evening, Night',
		Duration: '5 days',
		Comments: 'After food'
	}, {
		MedicineName: 'Vitamin C',
		Dosage: '30',
		Frequency: 'Night',
		Duration: '1 month',
		Comments: ''
	}, {
		MedicineName: 'Eye Drops',
		Dosage: '1',
		Frequency: '2 hours',
		Duration: '1 day',
		Comments: ''
	}, {
		MedicineName: 'Prune Tablet',
		Dosage: '1',
		Frequency: 'Night',
		Duration: 'One-time only',
		Comments: ''
	}, {
		MedicineName: 'Paracetamol 500mg',
		Dosage: '10',
		Frequency: 'Morning, Noon, Evening, Night',
		Duration: '5 days',
		Comments: 'After food'
	}, {
		MedicineName: 'Vitamin C',
		Dosage: '30',
		Frequency: 'Night',
		Duration: '1 month',
		Comments: ''
	}, {
		MedicineName: 'Eye Drops',
		Dosage: '1',
		Frequency: '2 hours',
		Duration: '1 day',
		Comments: ''
	}, {
		MedicineName: 'Prune Tablet',
		Dosage: '1',
		Frequency: 'Night',
		Duration: 'One-time only',
		Comments: ''
	}, {
		MedicineName: 'Paracetamol 500mg',
		Dosage: '10',
		Frequency: 'Morning, Noon, Evening, Night',
		Duration: '5 days',
		Comments: 'After food'
	}, {
		MedicineName: 'Vitamin C',
		Dosage: '30',
		Frequency: 'Night',
		Duration: '1 month',
		Comments: ''
	}, {
		MedicineName: 'Eye Drops',
		Dosage: '1',
		Frequency: '2 hours',
		Duration: '1 day',
		Comments: ''
	}, {
		MedicineName: 'Prune Tablet',
		Dosage: '1',
		Frequency: 'Night',
		Duration: 'One-time only',
		Comments: ''
	}, {
		MedicineName: 'Paracetamol 500mg',
		Dosage: '10',
		Frequency: 'Morning, Noon, Evening, Night',
		Duration: '5 days',
		Comments: 'After food'
	}, {
		MedicineName: 'Vitamin C',
		Dosage: '30',
		Frequency: 'Night',
		Duration: '1 month',
		Comments: ''
	}, {
		MedicineName: 'Eye Drops',
		Dosage: '1',
		Frequency: '2 hours',
		Duration: '1 day',
		Comments: ''
	}, {
		MedicineName: 'Prune Tablet',
		Dosage: '1',
		Frequency: 'Night',
		Duration: 'One-time only',
		Comments: ''
	}, {
		MedicineName: 'Paracetamol 500mg',
		Dosage: '10',
		Frequency: 'Morning, Noon, Evening, Night',
		Duration: '5 days',
		Comments: 'After food'
	}, {
		MedicineName: 'Vitamin C',
		Dosage: '30',
		Frequency: 'Night',
		Duration: '1 month',
		Comments: ''
	}, {
		MedicineName: 'Eye Drops',
		Dosage: '1',
		Frequency: '2 hours',
		Duration: '1 day',
		Comments: ''
	}, {
		MedicineName: 'Prune Tablet',
		Dosage: '1',
		Frequency: 'Night',
		Duration: 'One-time only',
		Comments: ''
	}]
};

export let LabData = {
	ReportType: 'lab',
	ReportName: 'Test Report',
	PatientInfo: {
		PatientName: 'Mr. Tholkappiyyan Arasu Chidambaranathan',
		Age: '30 Y',
		Gender: 'Male',
		MRN: 'NMC17180153',
		SampleId: 'S0005646',
		Referer: 'Dr. Thayumana Sundaram MS., FRCS., Director',
		SampleCollection: '25-06-2018 11:15 AM',
		ReportCompletion: '25-06-2018 05:30 PM',
		HospitalName: 'NMC Main'
	},
	TestList: [{
		TestParent: 'HEMATOLOGY',
		Value: null,
		Units: null,
		ReferenceRange: null,
		SubjectAreas: [{
			Subject: 'ESR',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: '1 Hour (Westergren)',
				Value: '12',
				Units: 'mm',
				ReferenceRange: ['5-20']
			}]
		}, {
			Subject: 'COMPLETE BLOOD COUNT (By Cell Counter)',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Total WBC Count',
				Value: '6,800',
				Units: 'cells/cmm',
				ReferenceRange: ['4000-11000']
			}, {
				Name: 'Total RBC Count',
				Value: '5.2',
				Units: 'cells/cmm',
				ReferenceRange: ['4.2-5.6']
			}, {
				Name: 'Haemoglobin',
				Value: '14.9',
				Units: 'gm/dl',
				ReferenceRange: ['13.5-17']
			}, {
				Name: 'PCV',
				Value: '41.0',
				Units: '%',
				ReferenceRange: ['40-52']
			}, {
				Name: 'MCV',
				Value: '79.0',
				Units: 'fl',
				ReferenceRange: ['76-96']
			}, {
				Name: 'MCH',
				Value: '28.0',
				Units: 'pg',
				ReferenceRange: ['27-31']
			}, {
				Name: 'MCHC',
				Value: '36.0',
				Units: '%',
				ReferenceRange: ['32-36']
			}, {
				Name: 'Platelet Count',
				Value: '2,38,000',
				Units: 'Lakhs/cmm',
				ReferenceRange: ['1,50,000-4,00,000']
			}]
			
		}, {
			Subject: 'DIFFERENTIAL COUNT',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Neutrophils',
				Value: '63',
				Units: '%',
				ReferenceRange: ['40-60']
			}, {
				Name: 'Lymphocytes',
				Value: '34',
				Units: '%',
				ReferenceRange: ['20-40']
			}, {
				Name: 'Eosinophils',
				Value: '02',
				Units: '%',
				ReferenceRange: ['1-6']
			}, {
				Name: 'Monocutes',
				Value: '01',
				Units: '%',
				ReferenceRange: ['2-4']
			}, {
				Name: 'Basophils',
				Value: '00',
				Units: '%',
				ReferenceRange: ['0-1']
			}]
			
		}, {
			Subject: 'BIOCHEMISTRY',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Glucose (Fasting) (GOD - POD - Serum)',
				Value: '78',
				Units: 'mg/dl',
				ReferenceRange: ['70-110']
			}, {
				Name: 'Urea (GLDH / Urease - Serum)',
				Value: '26',
				Units: 'mg/dl',
				ReferenceRange: ['15-45']
			}, {
				Name: "Creatinine (Jaffe's Kinetic - Serum)",
				Value: '0.8',
				Units: 'mg/dl',
				ReferenceRange: ['0.7-1.4']
			}]
			
		}, {
			Subject: 'LIPD PROFILE',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Cholestrol (CHOD-POD - Serum)',
				Value: '162',
				Units: 'mg/dl',
				ReferenceRange: ['< 200 : Desirable', '200-239 : Normal', '> 240 : High Risk']
			}, {
				Name: 'Triglycerides',
				Value: '98',
				Units: 'mg/dl',
				ReferenceRange: ['< 150 : Desirable', '150-199 : Normal Risk', '200-499 : High Risk', '> 500 : Very High Risk']
			}]
		}, {
			Subject: 'ESR',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: '1 Hour (Westergren)',
				Value: '12',
				Units: 'mm',
				ReferenceRange: ['5-20']
			}]
		}, {
			Subject: 'COMPLETE BLOOD COUNT (By Cell Counter)',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Total WBC Count',
				Value: '6,800',
				Units: 'cells/cmm',
				ReferenceRange: ['4000-11000']
			}, {
				Name: 'Total RBC Count',
				Value: '5.2',
				Units: 'cells/cmm',
				ReferenceRange: ['4.2-5.6']
			}, {
				Name: 'Haemoglobin',
				Value: '14.9',
				Units: 'gm/dl',
				ReferenceRange: ['13.5-17']
			}, {
				Name: 'PCV',
				Value: '41.0',
				Units: '%',
				ReferenceRange: ['40-52']
			}, {
				Name: 'MCV',
				Value: '79.0',
				Units: 'fl',
				ReferenceRange: ['76-96']
			}, {
				Name: 'MCH',
				Value: '28.0',
				Units: 'pg',
				ReferenceRange: ['27-31']
			}, {
				Name: 'MCHC',
				Value: '36.0',
				Units: '%',
				ReferenceRange: ['32-36']
			}, {
				Name: 'Platelet Count',
				Value: '2,38,000',
				Units: 'Lakhs/cmm',
				ReferenceRange: ['1,50,000-4,00,000']
			}]
			
		}, {
			Subject: 'DIFFERENTIAL COUNT',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Neutrophils',
				Value: '63',
				Units: '%',
				ReferenceRange: ['40-60']
			}, {
				Name: 'Lymphocytes',
				Value: '34',
				Units: '%',
				ReferenceRange: ['20-40']
			}, {
				Name: 'Eosinophils',
				Value: '02',
				Units: '%',
				ReferenceRange: ['1-6']
			}, {
				Name: 'Monocutes',
				Value: '01',
				Units: '%',
				ReferenceRange: ['2-4']
			}, {
				Name: 'Basophils',
				Value: '00',
				Units: '%',
				ReferenceRange: ['0-1']
			}]
			
		}, {
			Subject: 'BIOCHEMISTRY',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Glucose (Fasting) (GOD - POD - Serum)',
				Value: '78',
				Units: 'mg/dl',
				ReferenceRange: ['70-110']
			}, {
				Name: 'Urea (GLDH / Urease - Serum)',
				Value: '26',
				Units: 'mg/dl',
				ReferenceRange: ['15-45']
			}, {
				Name: "Creatinine (Jaffe's Kinetic - Serum)",
				Value: '0.8',
				Units: 'mg/dl',
				ReferenceRange: ['0.7-1.4']
			}]
			
		}, {
			Subject: 'LIPD PROFILE',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Cholestrol (CHOD-POD - Serum)',
				Value: '162',
				Units: 'mg/dl',
				ReferenceRange: ['< 200 : Desirable', '200-239 : Normal', '> 240 : High Risk']
			}, {
				Name: 'Triglycerides',
				Value: '98',
				Units: 'mg/dl',
				ReferenceRange: ['< 150 : Desirable', '150-199 : Normal Risk', '200-499 : High Risk', '> 500 : Very High Risk']
			}]
		}, {
			Subject: 'DIFFERENTIAL COUNT',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Neutrophils',
				Value: '63',
				Units: '%',
				ReferenceRange: ['40-60']
			}, {
				Name: 'Lymphocytes',
				Value: '34',
				Units: '%',
				ReferenceRange: ['20-40']
			}, {
				Name: 'Eosinophils',
				Value: '02',
				Units: '%',
				ReferenceRange: ['1-6']
			}, {
				Name: 'Monocutes',
				Value: '01',
				Units: '%',
				ReferenceRange: ['2-4']
			}, {
				Name: 'Basophils',
				Value: '00',
				Units: '%',
				ReferenceRange: ['0-1']
			}]
			
		}]
	}, {
		TestParent: 'TEST PARENT 1',
		Value: null,
		Units: null,
		ReferenceRange: null,
		SubjectAreas: [{
			Subject: 'ESR',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: '1 Hour (Westergren)',
				Value: '12',
				Units: 'mm',
				ReferenceRange: ['5-20']
			}]
		}, {
			Subject: 'COMPLETE BLOOD COUNT (By Cell Counter)',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Total WBC Count',
				Value: '6,800',
				Units: 'cells/cmm',
				ReferenceRange: ['4000-11000']
			}, {
				Name: 'Total RBC Count',
				Value: '5.2',
				Units: 'cells/cmm',
				ReferenceRange: ['4.2-5.6']
			}, {
				Name: 'Haemoglobin',
				Value: '14.9',
				Units: 'gm/dl',
				ReferenceRange: ['13.5-17']
			}, {
				Name: 'PCV',
				Value: '41.0',
				Units: '%',
				ReferenceRange: ['40-52']
			}, {
				Name: 'MCV',
				Value: '79.0',
				Units: 'fl',
				ReferenceRange: ['76-96']
			}, {
				Name: 'MCH',
				Value: '28.0',
				Units: 'pg',
				ReferenceRange: ['27-31']
			}, {
				Name: 'MCHC',
				Value: '36.0',
				Units: '%',
				ReferenceRange: ['32-36']
			}, {
				Name: 'Platelet Count',
				Value: '2,38,000',
				Units: 'Lakhs/cmm',
				ReferenceRange: ['1,50,000-4,00,000']
			}]
			
		}, {
			Subject: 'DIFFERENTIAL COUNT',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Neutrophils',
				Value: '63',
				Units: '%',
				ReferenceRange: ['40-60']
			}, {
				Name: 'Lymphocytes',
				Value: '34',
				Units: '%',
				ReferenceRange: ['20-40']
			}, {
				Name: 'Eosinophils',
				Value: '02',
				Units: '%',
				ReferenceRange: ['1-6']
			}, {
				Name: 'Monocutes',
				Value: '01',
				Units: '%',
				ReferenceRange: ['2-4']
			}, {
				Name: 'Basophils',
				Value: '00',
				Units: '%',
				ReferenceRange: ['0-1']
			}]
			
		}, {
			Subject: 'BIOCHEMISTRY',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Glucose (Fasting) (GOD - POD - Serum)',
				Value: '78',
				Units: 'mg/dl',
				ReferenceRange: ['70-110']
			}, {
				Name: 'Urea (GLDH / Urease - Serum)',
				Value: '26',
				Units: 'mg/dl',
				ReferenceRange: ['15-45']
			}, {
				Name: "Creatinine (Jaffe's Kinetic - Serum)",
				Value: '0.8',
				Units: 'mg/dl',
				ReferenceRange: ['0.7-1.4']
			}]
			
		}, {
			Subject: 'LIPD PROFILE',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Cholestrol (CHOD-POD - Serum)',
				Value: '162',
				Units: 'mg/dl',
				ReferenceRange: ['< 200 : Desirable', '200-239 : Normal', '> 240 : High Risk']
			}, {
				Name: 'Triglycerides',
				Value: '98',
				Units: 'mg/dl',
				ReferenceRange: ['< 150 : Desirable', '150-199 : Normal Risk', '200-499 : High Risk', '> 500 : Very High Risk']
			}]
		}, {
			Subject: 'ESR',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: '1 Hour (Westergren)',
				Value: '12',
				Units: 'mm',
				ReferenceRange: ['5-20']
			}]
		}, {
			Subject: 'COMPLETE BLOOD COUNT (By Cell Counter)',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Total WBC Count',
				Value: '6,800',
				Units: 'cells/cmm',
				ReferenceRange: ['4000-11000']
			}, {
				Name: 'Total RBC Count',
				Value: '5.2',
				Units: 'cells/cmm',
				ReferenceRange: ['4.2-5.6']
			}, {
				Name: 'Haemoglobin',
				Value: '14.9',
				Units: 'gm/dl',
				ReferenceRange: ['13.5-17']
			}, {
				Name: 'PCV',
				Value: '41.0',
				Units: '%',
				ReferenceRange: ['40-52']
			}, {
				Name: 'MCV',
				Value: '79.0',
				Units: 'fl',
				ReferenceRange: ['76-96']
			}, {
				Name: 'MCH',
				Value: '28.0',
				Units: 'pg',
				ReferenceRange: ['27-31']
			}, {
				Name: 'MCHC',
				Value: '36.0',
				Units: '%',
				ReferenceRange: ['32-36']
			}, {
				Name: 'Platelet Count',
				Value: '2,38,000',
				Units: 'Lakhs/cmm',
				ReferenceRange: ['1,50,000-4,00,000']
			}]
			
		}, {
			Subject: 'DIFFERENTIAL COUNT',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Neutrophils',
				Value: '63',
				Units: '%',
				ReferenceRange: ['40-60']
			}, {
				Name: 'Lymphocytes',
				Value: '34',
				Units: '%',
				ReferenceRange: ['20-40']
			}, {
				Name: 'Eosinophils',
				Value: '02',
				Units: '%',
				ReferenceRange: ['1-6']
			}, {
				Name: 'Monocutes',
				Value: '01',
				Units: '%',
				ReferenceRange: ['2-4']
			}, {
				Name: 'Basophils',
				Value: '00',
				Units: '%',
				ReferenceRange: ['0-1']
			}]
			
		}, {
			Subject: 'BIOCHEMISTRY',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Glucose (Fasting) (GOD - POD - Serum)',
				Value: '78',
				Units: 'mg/dl',
				ReferenceRange: ['70-110']
			}, {
				Name: 'Urea (GLDH / Urease - Serum)',
				Value: '26',
				Units: 'mg/dl',
				ReferenceRange: ['15-45']
			}, {
				Name: "Creatinine (Jaffe's Kinetic - Serum)",
				Value: '0.8',
				Units: 'mg/dl',
				ReferenceRange: ['0.7-1.4']
			}]
			
		}, {
			Subject: 'LIPD PROFILE',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Cholestrol (CHOD-POD - Serum)',
				Value: '162',
				Units: 'mg/dl',
				ReferenceRange: ['< 200 : Desirable', '200-239 : Normal', '> 240 : High Risk']
			}, {
				Name: 'Triglycerides',
				Value: '98',
				Units: 'mg/dl',
				ReferenceRange: ['< 150 : Desirable', '150-199 : Normal Risk', '200-499 : High Risk', '> 500 : Very High Risk']
			}]
		}]
	}, , {
		TestParent: 'TEST PARENT 2',
		Value: null,
		Units: null,
		ReferenceRange: null,
		SubjectAreas: [{
			Subject: 'ESR',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: '1 Hour (Westergren)',
				Value: '12',
				Units: 'mm',
				ReferenceRange: ['5-20']
			}]
		}, {
			Subject: 'COMPLETE BLOOD COUNT (By Cell Counter)',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Total WBC Count',
				Value: '6,800',
				Units: 'cells/cmm',
				ReferenceRange: ['4000-11000']
			}, {
				Name: 'Total RBC Count',
				Value: '5.2',
				Units: 'cells/cmm',
				ReferenceRange: ['4.2-5.6']
			}, {
				Name: 'Haemoglobin',
				Value: '14.9',
				Units: 'gm/dl',
				ReferenceRange: ['13.5-17']
			}, {
				Name: 'PCV',
				Value: '41.0',
				Units: '%',
				ReferenceRange: ['40-52']
			}, {
				Name: 'MCV',
				Value: '79.0',
				Units: 'fl',
				ReferenceRange: ['76-96']
			}, {
				Name: 'MCH',
				Value: '28.0',
				Units: 'pg',
				ReferenceRange: ['27-31']
			}, {
				Name: 'MCHC',
				Value: '36.0',
				Units: '%',
				ReferenceRange: ['32-36']
			}, {
				Name: 'Platelet Count',
				Value: '2,38,000',
				Units: 'Lakhs/cmm',
				ReferenceRange: ['1,50,000-4,00,000']
			}]
			
		}, {
			Subject: 'DIFFERENTIAL COUNT',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Neutrophils',
				Value: '63',
				Units: '%',
				ReferenceRange: ['40-60']
			}, {
				Name: 'Lymphocytes',
				Value: '34',
				Units: '%',
				ReferenceRange: ['20-40']
			}, {
				Name: 'Eosinophils',
				Value: '02',
				Units: '%',
				ReferenceRange: ['1-6']
			}, {
				Name: 'Monocutes',
				Value: '01',
				Units: '%',
				ReferenceRange: ['2-4']
			}, {
				Name: 'Basophils',
				Value: '00',
				Units: '%',
				ReferenceRange: ['0-1']
			}]
			
		}, {
			Subject: 'BIOCHEMISTRY',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Glucose (Fasting) (GOD - POD - Serum)',
				Value: '78',
				Units: 'mg/dl',
				ReferenceRange: ['70-110']
			}, {
				Name: 'Urea (GLDH / Urease - Serum)',
				Value: '26',
				Units: 'mg/dl',
				ReferenceRange: ['15-45']
			}, {
				Name: "Creatinine (Jaffe's Kinetic - Serum)",
				Value: '0.8',
				Units: 'mg/dl',
				ReferenceRange: ['0.7-1.4']
			}]
			
		}, {
			Subject: 'LIPD PROFILE',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Cholestrol (CHOD-POD - Serum)',
				Value: '162',
				Units: 'mg/dl',
				ReferenceRange: ['< 200 : Desirable', '200-239 : Normal', '> 240 : High Risk']
			}, {
				Name: 'Triglycerides',
				Value: '98',
				Units: 'mg/dl',
				ReferenceRange: ['< 150 : Desirable', '150-199 : Normal Risk', '200-499 : High Risk', '> 500 : Very High Risk']
			}]
		}, {
			Subject: 'ESR',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: '1 Hour (Westergren)',
				Value: '12',
				Units: 'mm',
				ReferenceRange: ['5-20']
			}]
		}, {
			Subject: 'COMPLETE BLOOD COUNT (By Cell Counter)',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Total WBC Count',
				Value: '6,800',
				Units: 'cells/cmm',
				ReferenceRange: ['4000-11000']
			}, {
				Name: 'Total RBC Count',
				Value: '5.2',
				Units: 'cells/cmm',
				ReferenceRange: ['4.2-5.6']
			}, {
				Name: 'Haemoglobin',
				Value: '14.9',
				Units: 'gm/dl',
				ReferenceRange: ['13.5-17']
			}, {
				Name: 'PCV',
				Value: '41.0',
				Units: '%',
				ReferenceRange: ['40-52']
			}, {
				Name: 'MCV',
				Value: '79.0',
				Units: 'fl',
				ReferenceRange: ['76-96']
			}, {
				Name: 'MCH',
				Value: '28.0',
				Units: 'pg',
				ReferenceRange: ['27-31']
			}, {
				Name: 'MCHC',
				Value: '36.0',
				Units: '%',
				ReferenceRange: ['32-36']
			}, {
				Name: 'Platelet Count',
				Value: '2,38,000',
				Units: 'Lakhs/cmm',
				ReferenceRange: ['1,50,000-4,00,000']
			}]
			
		}, {
			Subject: 'DIFFERENTIAL COUNT',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Neutrophils',
				Value: '63',
				Units: '%',
				ReferenceRange: ['40-60']
			}, {
				Name: 'Lymphocytes',
				Value: '34',
				Units: '%',
				ReferenceRange: ['20-40']
			}, {
				Name: 'Eosinophils',
				Value: '02',
				Units: '%',
				ReferenceRange: ['1-6']
			}, {
				Name: 'Monocutes',
				Value: '01',
				Units: '%',
				ReferenceRange: ['2-4']
			}, {
				Name: 'Basophils',
				Value: '00',
				Units: '%',
				ReferenceRange: ['0-1']
			}]
			
		}, {
			Subject: 'DIFFERENTIAL COUNT',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Neutrophils',
				Value: '63',
				Units: '%',
				ReferenceRange: ['40-60']
			}, {
				Name: 'Lymphocytes',
				Value: '34',
				Units: '%',
				ReferenceRange: ['20-40']
			}, {
				Name: 'Eosinophils',
				Value: '02',
				Units: '%',
				ReferenceRange: ['1-6']
			}, {
				Name: 'Monocutes',
				Value: '01',
				Units: '%',
				ReferenceRange: ['2-4']
			}, {
				Name: 'Basophils',
				Value: '00',
				Units: '%',
				ReferenceRange: ['0-1']
			}]
			
		}, {
			Subject: 'BIOCHEMISTRY',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Glucose (Fasting) (GOD - POD - Serum)',
				Value: '78',
				Units: 'mg/dl',
				ReferenceRange: ['70-110']
			}, {
				Name: 'Urea (GLDH / Urease - Serum)',
				Value: '26',
				Units: 'mg/dl',
				ReferenceRange: ['15-45']
			}, {
				Name: "Creatinine (Jaffe's Kinetic - Serum)",
				Value: '0.8',
				Units: 'mg/dl',
				ReferenceRange: ['0.7-1.4']
			}]
			
		}, {
			Subject: 'LIPD PROFILE',
			Value: null,
			Units: null,
			ReferenceRange: null,
			Tests: [{
				Name: 'Cholestrol (CHOD-POD - Serum)',
				Value: '162',
				Units: 'mg/dl',
				ReferenceRange: ['< 200 : Desirable', '200-239 : Normal', '> 240 : High Risk']
			}, {
				Name: 'Triglycerides',
				Value: '98',
				Units: 'mg/dl',
				ReferenceRange: ['< 150 : Desirable', '150-199 : Normal Risk', '200-499 : High Risk', '> 500 : Very High Risk']
			}]
		}]
	}]
};
