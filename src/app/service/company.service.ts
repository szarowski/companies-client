import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BeneficialOwner, Company} from '../model/company.model';

@Injectable()
export class CompanyService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/v1/companies';

  getCompanies() {
  /*  let fakeCompanies = [{company_id: '4ee3a8d8-ca7b-4290-a52c-dd5b6165ec11', name: 'Envisionworld Ltd.',
      address: '1 Canada Square, Canary Wharf', city: 'London', country: 'United Kingdom',
      email: 'roman.szarowski@gmail.com', phone: '+420123456789', beneficial_owners: [owner_name: 'Roman Szarowski']}];
   return Observable.of(fakeCompanies).delay(5000); */
    return this.http.get<Company[]>(this.baseUrl);
  }

  getCompanyById(company_id: string) {
    return this.http.get<Company>(this.baseUrl + '/' + company_id);
  }

  createCompany(company: Company) {
    company.beneficial_owners = company.owners_string.split(',');
    return this.http.post(this.baseUrl, company);
  }

  updateCompany(company: Company) {
    company.beneficial_owners = company.owners_string.split(',');
    return this.http.put(this.baseUrl + '/' + company.company_id, company);
  }

  deleteCompany(company_id: string) {
    return this.http.delete(this.baseUrl + '/' + company_id);
  }

  addOwner(company_id: string, owner: BeneficialOwner) {
    return this.http.put(this.baseUrl + '/' + company_id + '/add_beneficial_owner', owner);
  }
}
