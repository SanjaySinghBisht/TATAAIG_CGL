import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  public logintag = true;
  public routerPathToAppend: string;
  public paymentUrl: string;
  public url: string;
  public domain: string;
  public domainUrl: string;
  public productId: string = 'M000000001005';

  public quoteUrl = 'quote';
  public quoteDetailUrl = 'quote?quote_id=';
  public policyDetailUrl = 'policy?quote_id=';
  public policyNoteUrl = 'policy/note/';
  public qnstpMessageUrl = "qnstp/message/";
  public underwriterURL = 'policy/note/';
  public firstname: string;
  public email: string;
  public loginrole: string;
  public token: string;
  public capchacount: number = 0;
  public headers = {
    'in-auth-token': '',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  };
  public sitekey = '6Lee0acZAAAAAFvDwSsb1J4LM6lkrt9ra5lCqzLd';
  public productLob = 'propertyandenergy';
  public profileDetails: any;
  public getBasicDetails: any = {};
  groupList: any = {};

  public loginTag: Observable<boolean>;
  public loginTagSubject: BehaviorSubject<boolean>

  public bre_CalcPremURL = 'qms_bre_integration/mopCalcPrem/';
  public master_insurInfoURL = 'master_data/insur_Info';
  public master_multiselectURL = 'master_data/multi_select/';
  public master_recordURL = 'master_data/master_records/';
  public basicVal_URL = 'master_data/mop_basisvaluemap/';
  public quoteURL = 'quote';
  public policyURL = 'policy';
  public proposalURL = 'proposal';
  public PolicyDetURL = 'policy?quote_id=';
  public quotedataURL = 'quote?quote_id=';
  public quotepdfURL = "/quote.pdf/quote.pdf?download=1";
  public qnstpURL = "qnstp/message/";
  public Declaration_typeURL = "master";

  environment: string = '';
  loginUrl: string;
  result: string;
  productName: string;
  underWriterLevel: any;
  quoteData: any;
  getbasicdetails: any = {};
  product_group_name: string;
  constructor(private router: Router, private http: HttpClient) {

    this.loginUrl = '/ipdsv2/login/#/';
    const url = window.location.href;
    const arr = url.split("/");
    this.result = arr[0] + "//" + arr[2];

    this.loginTagSubject = new BehaviorSubject<boolean>(true);
    this.loginTag = this.loginTagSubject.asObservable();
    const { host } = window.location;
    console.log('HOST - ', host)                                                               
                                                                                                                           
     if (host == 'localhost:4202') {
      this.environment = "UAT"
    } else if (host == 'ipds1.cloware.in') {
      this.environment = 'DEV'
    } else if (host == 'qaipds1.cloware.in') {
      this.environment = 'QC'
    } else if (host == 'uatipds1.cloware.in') {
      this.environment = 'UAT'
    }
    if (this.environment == 'LOCAL') {
      this.url = 'https://ipds2.cloware.in/api/v1/';
      this.domain = 'https://ipds2.cloware.in';
      this.domainUrl = 'https://ipds1.cloware.in/api/v1/';
      this.productId = 'M000000001005';
      this.routerPathToAppend = '';
      this.paymentUrl = '/ipdsv2/payment'
      this.product_group_name = "QMS CAR";
    }
    else if (this.environment == 'DEV') {
      this.url = 'https://ipds2.cloware.in/api/v1/';
      this.domain = 'https://ipds2.cloware.in';
      this.domainUrl = 'https://ipds1.cloware.in/api/v1/';
      this.productId = 'M000000001005';
      this.routerPathToAppend = '';
      this.paymentUrl = '/ipdsv2/payment';
      this.product_group_name = "QMS CAR";
    }
    else if (this.environment == 'UAT') {
      this.url = 'https://uatipds2.cloware.in/api/v1/';
      this.domain = 'https://uatipds2.cloware.in';
      this.domainUrl = 'https://uatipds1.cloware.in/api/v1/';
      this.productId = 'M200000000006';
      this.routerPathToAppend = '';
      this.paymentUrl = '/ipdsv2/payment';
      this.product_group_name = "CAR";
    }
    else if (this.environment == 'QC') {
      this.url = 'http://qaipds2.cloware.in/api/v1/';
      this.domain = 'http://qaipds2.cloware.in';
      this.domainUrl = 'http://qaipds1.cloware.in/api/v1/';
      this.productId = 'M200000000004';
      this.routerPathToAppend = '';
      this.paymentUrl = '/ipdsv2/payment'
    }
    else if (this.environment == 'TEST') {
      this.url = 'http://qanda.cloware.in/api/v1/';
      this.domain = 'http://qanda.cloware.in';
      this.domainUrl = 'http://qanda.cloware.in/api/v1/';
      this.productId = '';
      this.routerPathToAppend = '';
      this.paymentUrl = '/ipdsv2/payment'
    }
  }

  public get currentLoginTag(): boolean {
    return this.loginTagSubject.value;
  }

  public setCurrentLoginTag(value: boolean) {
    this.loginTagSubject.next(value);
  }

  callcurrenturl() {
    // venmani manage current url in every page used for iframe F5.
  //  sessionStorage.setItem('product', this.result + '/ipdsv2/qms/smp/#' + this.router.url);
  //  this.fetchProfileDetails();
  }

  async fetchProfileDetails(resolve) {
  await  this.profile().subscribe(resp => {
      if (resp.status === 0) {
        this.profileDetails = {
          // 'is_admin': resp.data['is_admin'], 'is_broker': resp.data['is_broker'],
          // 'is_UW': resp.data['is_underwriter'], 'level': resp.data['data']['level'] || '',
          // 'email': resp.data['email'] || '',
          // 'broker_code': resp.data['broker_code'] || '',
          // 'producer_name': resp.data['name'] || '',
          //added ven for conver to proposal producer details
          'is_admin': resp.data['is_admin'], 'is_broker': resp.data['is_broker'],
          'is_UW': resp.data['is_underwriter'], 'level': resp.data['data']['level'] || '',
          'email': resp.data['email'] || '', 'broker_id': resp.data['broker_id'] || '',
          "producer_name": resp.data['first_name'], "mobile_no": resp.data['mobile_no'],
          "employee_id": resp.data['data']['employee_id'], 'broker_code': resp.data['broker_code'] || '',
          "channel": resp.data['data']['channel'] || '',
          //added ven for conver to proposal producer details
        };
        sessionStorage.setItem('profileDetails', JSON.stringify(this.profileDetails));
        resolve();
      }
    });
  }

  auth(data: any): Observable<any> {
    return this.http.post(this.url + 'auth', data);
  }

  profile(): Observable<any> {
    return this.http.get(this.url + 'profile', { headers: new HttpHeaders(this.headers) });
  }

  checkLogin() {
    if (window.location.origin.includes('localhost') && sessionStorage.getItem('in-auth-token') === '' || sessionStorage.getItem('in-auth-token') === undefined
    || sessionStorage.getItem('in-auth-token') === null) {
      Swal.fire({ icon: 'error', text: "Token Not Found", allowOutsideClick: false })
      
    }else{
      if (sessionStorage.getItem('in-auth-token') === '' || sessionStorage.getItem('in-auth-token') === undefined
      || sessionStorage.getItem('in-auth-token') === null) {
      this.setCurrentLoginTag(true)
      if (this.environment != 'LOCAL') {
        window.location.href = this.result + this.loginUrl;
      }//this.router.navigate([`${this.routerPathToAppend}/login`]);
      
    } else {
      this.setCurrentLoginTag(false)
      this.loginrole = sessionStorage.getItem('loginrole');
      this.headers['in-auth-token'] = sessionStorage.getItem('in-auth-token');
    }
    }
   
  }

  async userlevel(resolve) {
    await this.httpGetMethod(this.domainUrl + 'master/product_groups/lob_map/' + this.productLob, '', 'application/json', true, '')
      .then(result => {
        if (result['status'] == 0) {
          // const productList = result['data'].filter(x => (x.value == this.productId)); //product name - openPolicymarine Cargo
         // this.productName = productList[0]['name'];
         this.productName = this.product_group_name
          console.log(this.profileDetails['is_UW']);
          if (this.profileDetails && this.profileDetails['is_UW'] == 1) {
            const res = { "product": this.productName, "location": sessionStorage.getItem('location') || 'SERVICE CENTER', "email_id": sessionStorage.getItem('email') }
            this.httpPostMethod(this.domainUrl + 'transact/userLevel', res, 'application/json')
              .then(resp => {
                if (resp && resp['status'] == 0) {
                  this.underWriterLevel = resp["data"][0]["level"]; //Set UW level
                 
                } else {
                  Swal.fire({ icon: 'info', text: resp['txt'], allowOutsideClick: false });
                }
              }).catch(error => {
                Swal.fire({ icon: 'error', text: error, allowOutsideClick: false })
              })
          }
          
        } else {
          Swal.fire({ icon: 'info', text: result['txt'], allowOutsideClick: false });
        }
        
      }).catch(error => {
        Swal.fire({ icon: 'error', text: error, allowOutsideClick: false })
      })
      resolve();
  }

  async refer_UW(reason) {
    /** Fetch Product group Name using Product LOB **/
    await this.httpGetMethod(this.domainUrl + 'master/product_groups/lob_map/' + this.productLob, '', 'application/json', true, '')
      .then(result => {
        if (result['status'] == 0) {
          var productList = result['data'].filter(x => (x.value == this.productId)); //product name - openPolicymarine Cargo
          this.productName = productList[0]['name'];
          /** Fetch UW Group ID mapped to product **/
          const product = { "product": this.productName };
          this.httpPostMethod(this.domainUrl + 'transact/UW_groupnames', product, 'application/json')
            .then(res => {
              if (res['status'] == 0 && res['data'].length > 0) {
                this.groupList = res['data'];
                if (this.profileDetails.is_broker == 1) {
                  this.Assign_TO(reason, 'one')
                }
                else if (this.profileDetails.is_UW == 1) {
                  var refer_level = '';
                  if (this.underWriterLevel == 'one') refer_level = 'two';
                  else if (this.underWriterLevel == 'two') refer_level = 'three';
                  this.Assign_TO(reason, refer_level); //Assign to UW level two or three
                }
              }
            });
        }
      });
  }

  Assign_TO(reason, refer_level): void {
    /*** Filter Group ID based on the level***/
    const filterList = this.groupList.filter(x => (x.name.indexOf(refer_level) != -1)); //group ID to refer
    const group_id = filterList[0]['value'];
    /*** REFER TO UW  ***/
    const UWJson = { subject: "Assigned to Underwriter level " + refer_level, message: reason, assign_to: group_id };
    this.httpPostMethod(this.url + 'policy/note/' + this.getBasicDetails['policy_id'],
      UWJson, 'application/json')
      .then(result => {
        if (result['status'] == 0) {
          Swal.fire({ text: 'Assigned To Underwriter level ( ' + refer_level + ' )', allowOutsideClick: false });
          this.router.navigate([`${this.routerPathToAppend}/aigcquotelist`]);
        } else {
          Swal.fire({ icon: 'info', text: result['txt'], allowOutsideClick: false });
        }
      }).catch(error => {
        Swal.fire({ icon: 'error', text: error, allowOutsideClick: false })
      })
  }


  refer_Creator(status, reason: string): void {
    const sub = status.toUpperCase() + " Assigned to " + this.getBasicDetails['created_by'];
    const UWJson = { subject: sub, message: reason, assign_to: this.getBasicDetails['created_by'] };
    this.httpPostMethod(this.url + 'policy/note/' + this.getBasicDetails['policy_id'],
      UWJson, 'application/json')
      .then(result => {
        if (result['status'] == 0) {
          Swal.fire({ text: sub, allowOutsideClick: false });
          this.router.navigate([`${this.routerPathToAppend}/aigcquotelist`]);
        } else {
          Swal.fire({ icon: 'info', text: result['txt'], allowOutsideClick: false });
        }
      }).catch(error => {
        Swal.fire({ icon: 'error', text: error, allowOutsideClick: false })
      })
  }

  /****  Common HTTP GET Method****/
  async httpGetMethod(url: string, type: string, contentType: string, token: boolean, moduleName: string): Promise<any[]> {
    let options: any;
    options = await this.getHeaders(contentType);
    return await this.http.get(url, options)
      .toPromise()
      .then(async response => {
        let data = response['body'];
        if (data[`status`] == -114 || data[`status`] == -106) {
          Swal.fire({ text: 'Token is expired.', allowOutsideClick: false });
          sessionStorage.setItem('in-auth-token', '');
          this.setCurrentLoginTag(true)
          if (this.environment == 'LOCAL') this.router.navigate([`${this.routerPathToAppend}/login`]);
          else window.location.href = this.result + this.loginUrl;
        }
        else if (data.status == 0) {
          return data;
        } else if (data.status == -102 || data.status == -103 || data.status == -107) {
          Swal.fire({ text: data[`txt`], allowOutsideClick: false });
        }
      })
  }


  getHeaders(contentType) {
    let options;
    options = {
      headers: new HttpHeaders({ 'Content-Type': contentType, 'in-auth-token': this.getCurrentToken() }),
      observe: 'response'
    };
    return options;
  }

  getCurrentToken(): string {
    let token = '';
    token = sessionStorage.getItem('in-auth-token');
    return token;
  }

  /****  Common HTTP POST Method****/
  async httpPostMethod(url: string, parameter: any, contentType: string): Promise<any[]> {
    let options: any;
    options = this.get_headers(contentType);
    console.log(options);
    return this.http.post(url, parameter, options)
      .toPromise().then(async response => {
        let data = response['body'];
        if (data[`status`] == -114 || data[`status`] == -106) {
          Swal.fire({ text: 'Token is expired.', allowOutsideClick: false });
          sessionStorage.setItem('in-auth-token', '');
          this.logintag = true;
          if (this.environment == 'LOCAL') this.router.navigate([`${this.routerPathToAppend}/login`]);
          else window.location.href = this.result + this.loginUrl;
        } // Error Handling Here >
        else if (data.status == 0 || data.status == -116 || data.status == -104 || data.status == -113 || data.status == -107) {
          this.readResponseHeader(data, response['headers']);
          return data;
        }
        // else if (data.status == -116 || data.status == -104 || data.status == -113 || data.status == -107) {
        //   this.readResponseHeader(data, response['headers']);
        //   return data;
        // }
        else if (data.status == -102 || data.status == -103 || data.status == -107) {
          Swal.fire({ text: data[`txt`], allowOutsideClick: false });
        }

      }).catch(err => Promise.reject(err.error || 'Server error'));
  }

  get_headers(contentType) {
    let options;
    options = {
      headers: new HttpHeaders({ 'Content-Type': contentType, 'in-auth-token': this.getCurrentToken() }),
      observe: 'response'
    };
    return options;
  }

  readResponseHeader(data, respHead) {
    // let token = '';
    // token = sessionStorage.getItem('in-auth-token');
  }

  /****  Common HTTP PDF Download Method****/
  async httpPdfDownload(url, policyID) {
    const httpOptions = {
      headers: new HttpHeaders({
        'in-auth-token': await this.getCurrentToken()
      }),
      observe: 'response' as 'body',
      responseType: 'blob' as 'blob'
    };
    this.http.get(url, httpOptions)
      .toPromise()
      .then((response) => {
        let blob = new Blob([response["body"]], { type: 'application/pdf' });
        // const data = window.URL.createObjectURL(blob);
        let link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = policyID + ".pdf";
        link.click();
        /* setTimeout(function () {
          // For Firefox it is necessary to delay revoking the ObjectURL
          window.URL.revokeObjectURL(data);
        }, 100); */
      })
      .catch(err => Promise.reject(err.error || 'Server error'));
  }

  async getClone(quoteId) {
    this.getBasicDetails["quote_id"] = quoteId;
    let req = { "no_version": "1" };
    this.httpPostMethod(this.url + 'quote/clone/' + quoteId, req, 'application/json')
    .then(result => {
      if(result != undefined) {
        if(result['status'] == 0) {
          let getData = result['data'][0]['quote']
          this.router.navigate([`${this.routerPathToAppend}/cardetailsinsured/${getData['quote_id']}`]);
        } else {
          Swal.fire({ icon: 'info', text: result && result['txt'], allowOutsideClick: false })
        }
      }
    }).catch(error => {
      Swal.fire({ icon: 'error', text: error, allowOutsideClick: false })
    })
  }

  /*DELETE METHOD TO REMOVE DOCUMENT FROM PROPOSAL */
  async deleteMethod(url, params) {
    let options = this.getHeaderOption(params);
    let promise = new Promise((resolve, reject) => {
      this.http.delete(url, options)
        .toPromise()
        .then(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    }
    );
    return promise;
  }

  /*METHOD TO SET HEADERS FOR FILE UPLOAD */
  getHeaderOption(webparams) {
    let options = {
      headers: new HttpHeaders({
        'in-auth-token': this.getCurrentToken(),
      }),
      params: webparams,
      observe: 'response' as 'response',
    };
    return options;
  }

  /*POST METHOD TO SAVE A DOCUMENT TO PROPOSAL */
  async post(url, body, params) {
    let promise = new Promise((resolve, reject) => {
      this.http.post(url, body, this.getHeaderOption(params))
        .toPromise()
        .then(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    });
    return promise;
  }

  /* Jayaraman  Common Validation  */

  num_keyPress(event: any) {
    const pattern = /[0-9]/;

    let inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    var keystobepassedout = '$Backspace$Delete$Home$Tab$ArrowLeft$ArrowRight$ArrowUp$ArrowDown$End$';
    if (keystobepassedout.indexOf('$' + event.key + '$') != -1) {
      return true;
    }
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }
  }


  text_keyPress(event: any) {
    const pattern = /[a-zA-Z ]/;

    let inputChar = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // If the key is backspace, tab, left, right or delete
    var keystobepassedout = '$Backspace$Delete$Home$Tab$ArrowLeft$ArrowRight$ArrowUp$ArrowDown$End$';
    if (keystobepassedout.indexOf('$' + event.key + '$') != -1) {
      return true;
    }
    if (!pattern.test(inputChar)) {
      event.preventDefault();
      return false;
    }
  }
}
