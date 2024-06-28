import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { Login2FaComponent } from './components/login-2-fa/login-2-fa.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-2Fa', component: Login2FaComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'events', component: MainComponent },
    { path: '', component: HeaderComponent },


];
