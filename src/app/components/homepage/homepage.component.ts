import { Component,  OnInit, ViewChild, 
 Output, EventEmitter}                     from '@angular/core';
import {  HomepageService }                from './homepage.service';
import {NgbModal, NgbActiveModal,
    NgbModalOptions, NgbDateStruct,
    NgbDatepickerConfig,NgbModalRef }     from '@ng-bootstrap/ng-bootstrap';
import {  SharedService }                 from '../../services/shared.service';


@Component({
  selector: 'connect-homepage',
  templateUrl: './homepage.component.html',
  providers: [HomepageService]
})
export class HomepageComponent {
 @ViewChild('content') public content: any;

 private _books: any;
 private _selected_book: any;
 private local_modal: NgbModalRef;
 constructor( public _homeService: HomepageService, 
 private modalService: NgbModal, private _sharedService: SharedService ) {}
 
  ngOnInit() {
   this._homeService.getBooks()
    .subscribe((data: any) => {
      this._books = data;
    },
   error => console.log(error),
    );
  }
  
  showBookDetails(clicked_book: any) {
   this._selected_book = clicked_book;
    this.local_modal = this.modalService.open(this.content, { windowClass: 'modal-center', size: 'lg' });
  }
  
  AddtoCart() {
   this.local_modal.close();
   this._sharedService.emitChange(this._selected_book);
  }
}
