import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validationMessages = { //Esta variable la definimos para mostrar en la pantalla los posibles mensajes de error
    email: [            // según lo introducido por el usuario en el formulario
      { type: "required", message: "El email es requerido" },
      { type: "pattern", message: "El email introducido no es válido" }
    ],
    password: [
      { type: "required", message: "El password es requerido" },
      { type: "minlength", message: "El password debe contener al menos 5 letras" }
    ]
  }

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl( //El primer parámetro que recibe FormControl es qué valor va a tener por defecto el campo
        "", 
        Validators.compose([ 
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "", 
        Validators.compose([ 
          Validators.required,
          Validators.minLength(5)  // Estamos indicando que el password debe tener al menos 5 caracteres
        ])
      )   
    })
   }

  ngOnInit() {
  }

  loginUser(credentials) {
    console.log(credentials);
  }

}
