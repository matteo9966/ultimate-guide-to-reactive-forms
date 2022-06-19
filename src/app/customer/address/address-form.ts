import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Address, USStates } from "./address";

export class AddressForm extends FormGroup {
  readonly addressLine1 = this.get('addressLine1') as FormControl;
  readonly city = this.get('city') as FormControl;
  readonly state = this.get('state') as FormControl;
  readonly zip = this.get('zip') as FormControl;

  constructor(readonly model: Address, readonly fb: FormBuilder = new FormBuilder()) {
      super(fb.group({
          addressLine1: [model?.addressLine1, Validators.required],
          city: [model?.city, Validators.required],
          state: [model?.state, Validators.required],
          zip: [model?.zip, [Validators.required, Validators.maxLength(5), Validators.minLength(5)]]
      }).controls);
  }

  stateOptions: USStates[] = [
  "AL",
  "AK",
  "AS",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FM",
  "FL",
  "GA",
  "GU",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MH",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "MP",
  "OH",
  "OK",
  "OR",
  "PW",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VI",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
  ];
}