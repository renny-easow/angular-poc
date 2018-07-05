import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PdfPocComponent } from './../pdf-poc/pdf-poc.component';
import { PrintDemoComponent } from './../print/print-demo.component';

// Route Configuration
export const routes: Routes = [
    { path: 'print', component: PrintDemoComponent },
    { path: 'pdf-viewer', component: PdfPocComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });