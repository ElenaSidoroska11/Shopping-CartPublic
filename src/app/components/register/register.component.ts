import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';

/**
 *
 * @param form
 */

function passwordsMatchValidators(form){
  const password= form.get('password')
  const confirmPassword= form.get('confirmPassword')

  if(password.value !== confirmPassword.value){
    confirmPassword.setErrors({passwordMatch: true})
  }else{
    confirmPassword.setErrors(null)
  }
  return null
}



/**  ova e custom validation
 * if the data is valid return null else return an object
 */
function symbolValidator(control) { //control= registerForm.get('password')
  if(control.hasError('required')) return null;
  if(control.hasError('minLength')) return null;
  if (control.value.indexOf('@') > -1){
    return null;
}else{
  return {symbol:true}
}
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;
  constructor(private builder:FormBuilder, private router: Router) { }

  ngOnInit(): void {
   this.buildForm()
  }
  buildForm(){
    this.registerForm= this.builder.group({
      name:['' ,Validators.required],
      email:['' ,[Validators.required ,Validators.email]],
      username:['' ,Validators.required],
      password:['' ,[Validators.required ,symbolValidator,Validators.minLength(4)]],
      confirmPassword:''
    },
      {
        validators: passwordsMatchValidators
      })
  }
register(){
    console.log(this.registerForm.value);
this.router.navigateByUrl('/shop');
}
}
