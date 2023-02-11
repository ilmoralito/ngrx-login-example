import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./project/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./project/dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  { path: 'users', loadChildren: () => import('./project/users/users.module').then(m => m.UsersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
