import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable, take } from 'rxjs';

// Modelo para o service
import { usuarioData } from "../model/usuarioData"

// Service
import { environment } from "src/environments/environment"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private Url:string = ''
  private usuarioModel:usuarioData | any

  constructor(private http:HttpClient ) { 
    this.Url = environment.apiUsuario
  }

  getAllUsuarios():Observable<usuarioData>{
    this.usuarioModel = this.http.get<usuarioData>(this.Url);
    
    return this.usuarioModel;
  }

  salvarUsuario(usuario: usuarioData){
    return this.http.post<usuarioData>(this.Url, usuario).pipe(take(1));
  }
}
