import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";

export function updateValueAndValidity(form: AbstractControl, onlySelf = true) {
  if (form instanceof FormControl) {
    form.markAsDirty();
    form.updateValueAndValidity({ onlySelf });
  } else if (form instanceof FormGroup) {
    Object.values(form.controls).forEach(control => {
      updateValueAndValidity(control);
    });
  } else if (form instanceof FormArray) {
    form.controls.forEach(control => {
      updateValueAndValidity(control);
    });
  }
}
