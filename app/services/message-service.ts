import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {
    private listners = new Subject<any>();

    listen(): Observable<any> {
       return this.listners.asObservable();
    }

    filter(filterBy: string) {
       this.listners.next(filterBy);
    }

}