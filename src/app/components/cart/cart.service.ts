import { Injectable }        from '@angular/core';
import { HttpService }        from '../../services/http.service';



@Injectable()
export class CartService {



  constructor( private _httpService: HttpService  ) {
  }

  getOffers(cart_isbn: string) {
      let get_url = 'http://henri-potier.xebia.fr/books/' + cart_isbn + '/' + 'commercialOffers';
    return this._httpService.get(get_url);
  }

}
