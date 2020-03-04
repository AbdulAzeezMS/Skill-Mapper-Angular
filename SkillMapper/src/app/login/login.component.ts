import { Component, OnInit } from '@angular/core';
declare const lvalidateform:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  onClick() {
    lvalidateform();
  }
 
  constructor() {
    this.loadScripts(); 
  }
  
  loadScripts() {
    const externalScriptArray = [
      '../assets/loginscript.js'
    ];

    for (let i = 0; i < externalScriptArray.length; i++) {
      const scriptTag = document.createElement('script');
      scriptTag.src = externalScriptArray[i];
      scriptTag.type = 'text/javascript';
      scriptTag.async = false;
      scriptTag.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(scriptTag);
    }
}
  ngOnInit() {
  }

}
