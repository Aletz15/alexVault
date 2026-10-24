export interface User {
    id: number
    nombre: string
    apellido: string
    username: string
    fNacimiento: string
    correo: string
    numero: string
    contraseña: string
}

//omit solo omite el id, pero lo demas no
//export type RegistroForm = Omit<User, 'id'>
export interface RegistroForm {
    nombre: string
    apellido: string
    username: string
    fNacimiento: string
    correo: string
    numero: string
    contraseña: string
}

// Formulario para el inicio de sesion
export interface LoginForm{
    correo: string
    contraseña: string
}


