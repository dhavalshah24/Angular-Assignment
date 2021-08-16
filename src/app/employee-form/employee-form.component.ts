import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  minDate = new Date(1900, 0, 1);
  maxDate = new Date();

  registrationForm = this.fb.group({
    name: this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]]
    }),
    email: ["", [Validators.required, Validators.email]],
    phoneNumber: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
    address: this.fb.group({
      line1: ["", [Validators.required]],
      line2: [""],
    }),
    dob: ["", [Validators.required]]
  });
  get firstName() {
    return this.registrationForm.get("firstName")
  }
  get lastName() {
    return this.registrationForm.get("lastName")
  }

  get email() {
    return this.registrationForm.get("email")
  }
  get phoneNumber() {
    return this.registrationForm.get("phoneNumber")
  }
  get address() {
    return this.registrationForm.get("address")
  }
  get dob() {
    return this.registrationForm.get("dob")
  }

  getEmailError() {
    if (this.email?.hasError("required")) {
      return "Email is required";
    }
    if (this.email?.hasError("email")) {
      return "Invalid email";
    }
    return "";
  }

  getphoneNumberError() {
    if (this.phoneNumber?.hasError("pattern")) {
      return "Invalid phone number";
    }
    if (this.phoneNumber?.hasError("required")) {
      return "Phone number is required";
    }
    if (this.phoneNumber?.hasError("minlength") || this.phoneNumber?.hasError("maxlength")) {
      return "Phone Number should be of 10 digits";
    }
    return "";
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }

  onSubmit() {

    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      this.openSnackBar("Employee Details Added", "Close")
    } else {
      this.openSnackBar("Form is not valid", "Close")
    }

  }

}
