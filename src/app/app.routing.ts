import { RouterModule, Routes } from '@angular/router';
import {AddCompanyComponent} from './add-company/add-company.component';
import {ListCompanyComponent} from './list-company/list-company.component';
import {EditCompanyComponent} from './edit-company/edit-company.component';
import {AddOwnerComponent} from './add-owner/add-owner.component';

const routes: Routes = [
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'list-company', component: ListCompanyComponent },
  { path: 'edit-company', component: EditCompanyComponent },
  { path: 'add-owner', component: AddOwnerComponent },
  { path : '', component : ListCompanyComponent }
];

export const routing = RouterModule.forRoot(routes);
