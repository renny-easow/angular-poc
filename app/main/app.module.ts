// Imports
import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { PdfViewerModule }        from 'ng2-pdf-viewer';

// Declarations
import { AppComponent }           from './app.component';
import { PrintDemoComponent }        from './../print/print-demo.component';
import { PrintPageComponent }        from './../print/print-page.component';
import { PdfPocComponent }        from './../pdf-poc/pdf-poc.component';
import { routing }                from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        PdfViewerModule,
        routing
    ],
    declarations: [
        AppComponent,
        PrintDemoComponent,
        PrintPageComponent,
        PdfPocComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
    // Module class
}


