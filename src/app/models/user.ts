export class User {
    UserName: string;
    LastName: string;
    Email: string;
    PersonId: string;
    Password: string;
    Roles: string[];

    constructor(
        userName: string = '',
        lastName: string = '',
        email: string = '',
        personId: string = '',
        password: string = '',
        roles: string[] = []) {
        this.UserName = userName;
        this.LastName = lastName;
        this.Email = email;
        this.PersonId = personId;
        this.Password = password;
        this.Roles = roles;
    };
}