import { Component, Inject, OnInit,ViewChild } from '@angular/core';
import {ElementRef} from '@angular/core';
//import { FormBuilder } from '@angular/forms';
import { LoginDetailsService } from 'src/login-details.service';
import { FormBuilder, FormControl, NgModel } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
//import { HttpHeaders, HttpStatusCode } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form1=this.fb.group({
    uname: new FormControl(''),
    password: new FormControl('')

  })
  @ViewChild('loginRef', {static: true }) loginElement!: ElementRef;
  FB:any;
  auth2: any;





 userInfo:any
  constructor(@Inject(LoginDetailsService) private loginSer:LoginDetailsService,public fb:FormBuilder,public route1:Router) {



}


  ngOnInit(): void {
   // console.log('uname')
   // console.log('password')
   this.googleSDK();
  }


  // this.loginSer.login().subscribe((udata)=>
  // {
  //   this.userInfo=udata


  // })


  // lgg():void
  // {

  //   console.log(this.form1.controls.uname.value)
  //   console.log(this.form1.controls.password.value)

  //   this.loginSer.login(uname11,pwd11)


  // }
login1( )
{

  let obj={
 username:this.form1.controls.uname.value,
 password:this.form1.controls.password.value
  }


  this.loginSer.login(obj).subscribe((obj1)=>{
    console.log(obj1);
    let dd=Object.values(obj1)
    console.log(dd[0].aArId)


    if((dd[0].aArId)!=12)
    {
      alert("login failed")
      this.route1.navigate(['login'])

    }
    else
    {
      alert("Login sucess");
      this.route1.navigate(['home'])
    }
  });
  // console.log(res111)
  //if(obj1 =="admin")
  // {
  //   alert("Login Success")
  //   //open(HomeComponent)
  //   this.route1.navigate(['home'])
  // }
  // else
  // {
  //   alert("Login Failed")
  // }
  }



  // login_Method(): void

  // {

  //   for(let i=0;i<=this.userInfo.length;i++)
  //   {
  //     if(this.uname=this.userInfo[i].aUsername && this.password==this.userInfo[i].aPassword)
  //     {
  //       alert("Login Sucess")

  //     }
  //     else
  //     {
  //       alert("Login failed")
  //     }


  //   }

  // }


  googleSDK() {

    ( window as any)['googleSDKLoaded'] = () => {
     ( window as any)['gapi'].load('auth2', () => {
     // console.log(this.auth2)
         this.auth2 =  ( window as any)['gapi'].auth2.init({

           client_id: '101468219146-0jrh6i2beco1qcehmvh0375u52jta8rb.apps.googleusercontent.com',
           cookiepolicy: 'single_host_origin',
           scope: 'profile email'
         });
        //console.log(this.auth2)
         this.prepareLoginButton();
       });
     }




     (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id))
        {return;}
       js = d.createElement(s); js.id = id;
       js.src='https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
       fjs?.parentNode?.insertBefore(js, fjs);
     }(document, 'script', 'google-jssdk'));

   }

  prepareLoginButton() {
    //console.log("HEHEHEHEE")
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleAuthUser:any) => {

        let profile = googleAuthUser.getBasicProfile();
        console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());



      },
      );

  }

}
