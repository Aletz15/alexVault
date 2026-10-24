<script setup lang="ts">
//Formulario inicio sesion (correo/contaseña)
import {reactive,ref} from 'vue'
import type { LoginForm, User} from '../interfaces/user.interface.ts'
import {loginUser} from '../data/users.ts'

// Eventos que le avisa al padre en AuthModal
const emit = defineEmits<{
    (x: 'logueado', user: User): void
    (x: 'registro'): void
}>()

const loginForm = reactive<LoginForm>({
    correo: '',
    contraseña: '',
})

const error = ref('')

function enviar() {
    if (!loginForm.correo.trim() || !loginForm.contraseña) {
        error.value = 'Completa todos los campos'
        return
    }

    try{
        const user = loginUser(loginForm)
        //mandamos usuario found al padre
        emit('logueado', user)
    } catch (e) {
        //entra el error de correo o contraseña incorrecto
        error.value = (e as Error).message
    }
}
</script>

<template>
    <form class="modal__form" @submit.prevent="enviar">
        <h2 class="modal__title">Iniciar sesion</h2>

        <label class="modal__field">Correo electronico
            <input v-model="loginForm.correo" type="correo" />
        </label>

        <label class="modal__field">Contraseña
            <input v-model="loginForm.contraseña" type="contraseña"  />
        </label>

        <p v-if="error" class="modal__error">{{ error }}</p>

        <button type="submit" class="modal__submit">Iniciar Sesion</button>

        <p class="modal__switch">¿No tienes cuenta?
            <button type="button" class="modal__link" @click="emit('registro'); console.log('Registrarse')">Registrate</button>
        </p>
    </form>
</template>