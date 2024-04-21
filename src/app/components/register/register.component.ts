import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { format } from 'path';
import { JsonPipe, NgFor } from '@angular/common';
import { Validators } from '@angular/forms';
import { Iuser } from '../../models/iuser';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgFor],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  user: Iuser = {} as Iuser;
  userReegitriationForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userReegitriationForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.pattern('^[a-z-A-Z]{3,10}$')],
      ],
      password: [''],
      emall: [''],
      addres: this.fb.group({
        Street: [''],
        City: [''],
      }),
      phoneNumbers: this.fb.array([['']]),
    });
  }
  ngOnInit(): void {
    // this.userReegitriationForm.setValue({
    //   name: 'alaa',
    //   emall: 'a@yahoo.com',
    //   password: '',
    //   addres: {
    //     Street: '8-n-city',
    //     City: 'assiut',
    //   },
    // });
    this.userReegitriationForm.patchValue({
      name: 'alaa',
      emall: 'a@yahoo.com',
      addres: {
        Street: '8-n-city',
        City: 'assiut',
      },
    });
  }
  register() {
    this.user = this.userReegitriationForm.value;
    console.log(this.user);
  }
  addNewPhone() {
    this.phones.push(new FormControl(''));
  }
  removeAphoneNumber(i: number) {
    this.phones.removeAt(i);
  }
  get name() {
    return this.userReegitriationForm.get('name');
  }
  get phones() {
    return this.userReegitriationForm.get('phoneNumbers') as FormArray;
  }
}
