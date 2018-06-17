export class Company {

  company_id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  email: string;
  phone: string;
  beneficial_owners: string[];
  owners_string: string;
}

export class BeneficialOwner {
  owner_name: string;
}
