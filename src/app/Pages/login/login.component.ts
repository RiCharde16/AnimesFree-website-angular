import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"

// Moddelo do JSON usuario
import { usuarioData } from "src/app/model/usuarioData"

import { UsuarioService } from "src/app/services/usuario.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginBloqueado:boolean = true;
  formulario: FormGroup | any
  usuarioModel: usuarioData | any;

  mensagem:string = ""
  iconeDir:string = ""

  constructor(private formBuilder:FormBuilder, private service:UsuarioService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      senha: ['',[Validators.required]] 
    })
  }

  logarUsuario(){
    console.log("logando...")
    console.log(this.formulario.get("usuario").value)
    console.log(this.formulario.get("senha").value)

    this.service.getAllUsuarios().subscribe(
      (data: usuarioData)=>{
        // if(data.nome == this.formulario.get("usuario").value && data.senha == this.formulario.get("senha").value){
        //   this.loginBloqueado = true
        // }
        this.usuarioModel = data
        // this.usuariosLista.push(data)
        // console.log(data)
        for(let usuario of this.usuarioModel){
          // console.log(usuario)
          if(usuario.nome == this.formulario.get("usuario").value && usuario.senha == this.formulario.get("senha").value){
            this.loginBloqueado = false
          }
        }
        console.log(!this.loginBloqueado)
        if(!this.loginBloqueado){
          this.iconeDir = "assets/Arquivos/CheckCircle.svg"
          this.mensagem = "Login Concluido Bem-vindo"
          setTimeout(()=>{
            window.location.href = "http://localhost:4200/home"
          }, 1000)
        }
        else{
          this.iconeDir = "assets/Arquivos/XCircle.svg"
          this.mensagem = "Usuario Não Existe"

          this.loginBloqueado = false

          setTimeout(() => {
              this.loginBloqueado = true
          }, 5000);
        }
      }
      )
  }

}
