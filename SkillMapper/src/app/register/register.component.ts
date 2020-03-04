import { Component, OnInit } from '@angular/core';
declare const rvalidateform:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  onClick() {
    rvalidateform();
  }
 
  constructor() {
    this.loadScripts(); 
  }
  
  loadScripts() {
    const externalScriptArray = [
      '../assets/registerscript.js'
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
