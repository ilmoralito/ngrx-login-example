import { Injectable } from "@angular/core";
import { delay, of, throwError } from "rxjs";

import { User } from "src/app/project/users/models/user.model";
import { Credentials } from "../../models/credentials";

const users: readonly User[] = [
  { id: crypto.randomUUID(), username: "ada", email: "ada.wong" },
  { id: crypto.randomUUID(), username: "jill", email: "jill.valentine" },
  { id: crypto.randomUUID(), username: "leon", email: "leon.kennedy" },
];

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor() {}

  login(credentials: Credentials) {
    const user = users.find((user) => user.username === credentials.username);

    if (!user) {
      return throwError("Error: something has gone wrong");
    }

    return of(user).pipe(delay(5000));
  }
}
