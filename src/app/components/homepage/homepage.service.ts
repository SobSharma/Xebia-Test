import { Injectable }        from '@angular/core';
import { HttpService }        from '../../services/http.service';



@Injectable()
export class HomepageService {



  constructor( private _httpService: HttpService  ) {
  }

  getBooks() {
    return this._httpService.get('http://henri-potier.xebia.fr/books');
  }

}
