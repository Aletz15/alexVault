import type { User, RegistroForm, LoginForm } from '../interfaces/user.interface.ts'

//simular el arreglo
//const users: User[] = []
const users: User[] = [
    {
        id:1,
        nombre:'Alejandro',
        apellido:'Gomez',
        username: 'alex',
        fNacimiento: '2002-10-01',
        correo: 'alejandrogoga15@gmail.com',
        numero: '9995343349',
        contraseña: '123456',
    },
]


export  const correoExiste = (correo: string): boolean => {
    return users.some((user) => user.correo.toLowerCase() === correo.trim().toLowerCase())
}

export const registroUser = ({
    nombre,
    apellido,
    username,
    fNacimiento,
    correo,
    numero,
    contraseña,
}: RegistroForm): User => {
    if(correoExiste(correo)){
        throw new Error('Ese correo ya esta registrado')
    }

    const newUser: User ={
        id: Date.now(),
        nombre: nombre.trim(),
        apellido: apellido.trim(),
        username: username.trim(),
        fNacimiento,
        correo: correo.trim(),
        numero: numero.trim(),
        contraseña,
    }

    users.push(newUser)
    return newUser
}

//Buscar el usuario con ese correo y contraseña, si no existe x
export const loginUser = ({ correo, contraseña }: LoginForm): User => {
    const user = users.find(( u ) => u.correo.toLowerCase() === correo.trim().toLowerCase() && u.contraseña === contraseña)


    if(!user){
        throw new Error('Correo o contraseña incorrectos')
    }

    return user
}