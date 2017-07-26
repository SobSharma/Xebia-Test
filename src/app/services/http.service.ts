
import { Injectable }                      from '@angular/core';
import { Http, Response, Headers,
         URLSearchParams }                 from '@angular/http';
import { Observable }                      from 'rxjs/Observable';
import 'rxjs/Rx';
import { Router }                          from '@angular/router';

@Injectable()
export class HttpService {

    public headers: Headers;

    constructor( private _http: Http, private router: Router ) {
        let header = new Headers();
        this.headers = this.createAuthorizationHeader(header);
    }

    createAuthorizationHeader = (headers: Headers) => {
	    headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return headers;
	}

    public get = (url: string, params?: URLSearchParams, overwriteHeader?: Headers): Observable<any> => {
        return this._http.get(url, { search: params, headers: overwriteHeader ? overwriteHeader : this.headers })
            .share()
            .map((response: Response) => response.text() && this.isJson(response.text()) ? <any>response.json() : {})
            .catch(this.handleError);
    }

    public post = (url: string, body: any, overwriteHeader?: Headers): Observable<any> => {
        return this._http.post(url, body, {headers: overwriteHeader ? overwriteHeader : this.headers })
            .map((response: Response) => response.text() && this.isJson(response.text()) ? <any>response.json() : {})
            .catch(this.handleError);
    }

   

    private handleError = (error: Response) => {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }

    private isJson(str: string) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

}
