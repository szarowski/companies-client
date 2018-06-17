import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../service/company.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private companyService: CompanyService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      company_id: [uuidv4()],
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      email: [''],
      phone: [''],
      owners_string: ['', Validators.required],
      beneficial_owners: [['']]
    });

    function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  }

  get f() {
    return this.addForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.companyService.createCompany(this.addForm.value)
      .subscribe(
        data => {
          this.router.navigate(['list-company']);
        },
        error => {
          alert(error);
        });
  }
}
