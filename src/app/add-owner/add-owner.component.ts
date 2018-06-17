import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../service/company.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {BeneficialOwner, Company} from '../model/company.model';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {

  companyId: string;
  addForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private companyService: CompanyService) { }

  ngOnInit() {

    this.companyId = localStorage.getItem('addOwnerCompanyId');
    if (!this.companyId) {
      alert('Invalid action.');
      this.router.navigate(['list-company']);
      return;
    }
    this.addForm = this.formBuilder.group({
      company_id: [],
      owner_name: ['', Validators.required]
    });
    this.companyService.getCompanyById(this.companyId)
      .subscribe( data => {
        this.addForm.setValue({company_id: this.companyId, owner_name: ''});
      });
  }

  get f() {
    return this.addForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.companyService.addOwner(this.companyId, this.addForm.value)
      .subscribe(
        data => {
          this.router.navigate(['list-company']);
        },
        error => {
          alert(error);
        });
  }
}
