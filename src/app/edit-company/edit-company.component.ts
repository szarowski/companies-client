import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../service/company.service';
import {Router} from '@angular/router';
import {Company} from '../model/company.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private companyService: CompanyService) { }

  company: Company;
  editForm: FormGroup;
  submitted = false;

  ngOnInit() {
    const companyId = localStorage.getItem('editCompanyId');
    if (!companyId) {
      alert('Invalid action.');
      this.router.navigate(['list-company']);
      return;
    }
    this.editForm = this.formBuilder.group({
      company_id: [],
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      email: [''],
      phone: [''],
      owners_string: ['', Validators.required],
      beneficial_owners: [[]]
    });
    this.companyService.getCompanyById(companyId)
      .subscribe( data => {
        data.owners_string = data.beneficial_owners.join(',');
        this.editForm.setValue(data);
      });
  }

  get f() {
    return this.editForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    this.companyService.updateCompany(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-company']);
        },
        error => {
          alert(error);
        });
  }
}
