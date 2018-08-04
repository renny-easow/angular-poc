// Imports
import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { PdfViewerModule }        from 'ng2-pdf-viewer';

// Declarations
import { AppComponent }           from './app.component';
import { routing }                from './app.routes';
import { MessageService }         from './../services/message-service';

import { PrintDemoComponent }     from './../print/print-demo.component';
import { PrintPageComponent }     from './../print/print-page.component';
import { PdfPocComponent }        from './../pdf-poc/pdf-poc.component';

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
    providers: [MessageService],
    bootstrap: [ AppComponent ]
})
export class AppModule {
    // Module class
}


