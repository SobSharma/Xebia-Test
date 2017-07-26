import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class SharedService {
    // Observable string sources
    private emitChangeSource = new Subject<any>();
     private emitCart = new Subject<any>();
    // Observable string streams
    changeEmitted$ = this.emitChangeSource.asObservable();
    cartChangeEmitted$ = this.emitCart.asObservable();
    // Service message commands
    emitChange(change: any) {
        this.emitChangeSource.next(change);
    }
      emitCartClick(change: any) {
        this.emitCart.next(change);
    }
}