import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { StoreModule } from "@ngrx/store";

import { loginFeature } from "./state/login.reducer";
import { EffectsModule } from "@ngrx/effects";
import { LoginEffects } from "./state/login.effects";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    StoreModule.forFeature(loginFeature),
    EffectsModule.forFeature([LoginEffects]),
  ],
})
export class LoginModule {}
