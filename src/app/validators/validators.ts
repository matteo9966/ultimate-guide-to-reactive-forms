import { AbstractControl, ValidatorFn, Validators } from "@angular/forms";
import moment from "moment";

export const alpha: ValidatorFn = Validators.pattern('[a-zA-Z]*$');
export const alphaAllowSpaces: ValidatorFn = Validators.pattern('[a-zA-Z ]*$');
export const alphaAllowSpacesAndSplash: ValidatorFn = Validators.pattern('[a-zA-Z /]*$');
export const alphaNumeric: ValidatorFn = Validators.pattern('[a-zA-Z0-9]*$');
export const alphaNumericAllowSpaces: ValidatorFn = Validators.pattern('[a-zA-Z0-9 ]*$');
export const alphaNumericAllowDash: ValidatorFn = Validators.pattern('[a-zA-Z0-9-]*$');
export const numericAllowDash: ValidatorFn = Validators.pattern('[0-9-]*$');
export const numeric: ValidatorFn = Validators.pattern('[0-9]*$');
export const currency: ValidatorFn = Validators.pattern('[0-9,]*$');
export const addressLine: ValidatorFn = Validators.pattern('(([0-9]{1,}).(.*[a-zA-Z#/&]){2,}$)|(([RRHC]{2,}).[0-9]{1,})|(([0-9]{1,}).(.*[a-zA-Z#/&]){2,}.(.*[0-9#])$)');
export const date: ValidatorFn = Validators.pattern('((0|1)d{1})((0|1|2|3)d{1})((19|20)d{2})');

export const previousDateOnly: ValidatorFn = (control: AbstractControl) =>
        moment(control?.value).isSameOrAfter(new Date(), 'day')
            ? { date: 'The date entered must be before today'}
            : null;

    export const leapYearNotAllowed: ValidatorFn = (control: AbstractControl) =>
        control?.value?.length === 8 &&
        control?.value?.substr(0, 2) === '02' &&
        control?.value?.substr(2, 2) === '29' &&
        moment([control?.value?.substr(2, 4)]).isLeapYear()
            ? { date: 'Leap Year Is Not Allowed' }
            : null;