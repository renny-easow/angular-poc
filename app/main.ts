import 'zone.js';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './main/app.module';
import {enableProdMode} from '@angular/core';
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);