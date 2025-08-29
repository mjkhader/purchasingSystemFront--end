export interface LoginModel {
    username: string
    password: string
}

export interface Token {
    token: string
    roles: string[]
}

export interface UserModel {
    firstname: string
    lastname: string
    email: string
    roles: string[]
}