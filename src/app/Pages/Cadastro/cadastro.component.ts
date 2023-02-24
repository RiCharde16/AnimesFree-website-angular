import { Component, DoCheck, OnInit } from '@angular/core';

// Importações necessarias
import { FormBuilder, FormGroup, Validators } from "@angular/forms"

// Service
import { UsuarioService } from "../../services/usuario.service"

// Model
import { usuarioData } from "../../model/usuarioData"

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

  formulario: FormGroup | any
  formularioEnviado:boolean = false

  // Variaveis do card
  dirIcon:string = ""
  message:string = ""

  usuarioExist:boolean = false

  usuarioModel: usuarioData | any
  usuario: usuarioData | any

  constructor(private formBuilder: FormBuilder, private service:UsuarioService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      user: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.maxLength(50)]],
      senha: ['', [Validators.required, Validators.maxLength(15)]]
    })

    this.getAllUsuario()
  }
  

  getAllUsuario(){
    this.service.getAllUsuarios().subscribe(
      (data: usuarioData)=>{
        this.usuarioModel = data
      }
    )
  }
  cadastrarUsuario(){
    // this.getAllUsuario()
   
    // console.log(this.formulario.get("user").value)
    // console.log(this.formulario.get("email").value)
    // console.log(this.formulario.get("user").value.trim().toLowerCase())
    // console.log(this.formulario.get("email").value.trim().toLowerCase())
    // console.log(this.formulario.get("senha").value.trim().toLowerCase())
    for(let item of this.usuarioModel){
      if(this.formulario.get("user").value.toLowerCase().trim() == item.nome.toLowerCase() || 
        this.formulario.get("email").value.toLowerCase().trim() == item.email.toLowerCase() || 
        this.formulario.get("senha").value.toLowerCase().trim() == item.senha.toLowerCase()){
        // console.log(`nome, email ou senha já existe`)

        this.usuarioExist = true
        break
      }
      else{
        this.usuarioExist = false
      }
    }
    if(this.usuarioExist){
      // console.log("usuario com nome, senha ou email ja existe!")

      this.dirIcon = "assets/Arquivos/XCircle.svg"
      this.message = "Usuario Ja Existe Mude os Dados"

      this.formularioEnviado = true

    }
    else{
      this.dirIcon = "assets/Arquivos/CheckCircle.svg"
      this.message = "Usuario Cadastrado"

      // console.log("usuario cadastrado!")
      this.formularioEnviado = true

      this.usuario = {
        nome: this.formulario.get("user").value,
        email: this.formulario.get("email").value,
        senha: this.formulario.get("senha").value,
        tipo: {
          id: 2
        }
      } 
      
      
        this.service.salvarUsuario(this.usuario).subscribe(
          sucess => this.getAllUsuario(),
          error => console.log(error)
        )
      } 

      setTimeout(()=>{
        this.formularioEnviado = false
      },5000)
      
      
    }
    
}
