import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "./Pages/Cadastro/cadastro.component";
import { HomeComponent } from "./Pages/home/home.component";
import { LoginComponent } from "./Pages/login/login.component";

const routes: Routes = [
    {
        path: "",
        component: CadastroComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }