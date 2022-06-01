import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseServiceResponse, OntimizeServiceResponse, ServiceResponseAdapter } from "ontimize-web-ngx";

@Injectable({ providedIn: 'root' })
export class IgdbResponseAdapter implements ServiceResponseAdapter<BaseServiceResponse> {

  adapt(resp: HttpResponse<any>): BaseServiceResponse {
    let code = 1;
    let data = [];
    const message = '';

    // Adapt the data received from the service
    if (resp.body) {
      code = 0;
      if (resp.body.results) {
        data = resp.body.results;
        data.forEach(element => {
          const urlArray = element.valueOf()['url'].split('/');
          const uuid = urlArray[urlArray.length - 2];
          element['uuid'] = uuid;
        }

        );
      } else {
        data = [resp.body];
      }
    }

    // Create Ontimize service response with the data adapted
    return new OntimizeServiceResponse(code, data, message);
  }
}
