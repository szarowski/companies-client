import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CompanyService} from '../service/company.service';
import {Company} from '../model/company.model';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {

  companys: Company[];

  constructor(private router: Router, private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanies()
      .subscribe( data => {
        this.companys = data;
      });
  }

  deleteCompany(company: Company): void {
    this.companyService.deleteCompany(company.company_id)
      .subscribe( data => {
        this.companys = this.companys.filter(u => u !== company);
      });
  }

  editCompany(company: Company): void {
    localStorage.removeItem('editCompanyId');
    localStorage.setItem('editCompanyId', company.company_id);
    this.router.navigate(['edit-company']);
  }

  addCompany(): void {
    this.router.navigate(['add-company']);
  }

  addOwner(company: Company): void {
    localStorage.setItem('addOwnerCompanyId', company.company_id);
    this.router.navigate(['add-owner']);
  }
}
