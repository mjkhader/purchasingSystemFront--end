
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

export interface SignUpModel {
    firstname: string
    lastname: string
    username: string
    email: string
    password: string
}