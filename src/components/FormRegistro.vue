<script setup lang="ts">
// Formulario de registro. Se muestra como ventana encima de la página.
import { reactive, ref } from 'vue'
import type { RegistroForm } from '../interfaces/user.interface'
import { registroUser } from '../data/users'

// Evento avisa al padre authmodal
const emit = defineEmits<{
  (x: 'login'): void
}>()

// Objeto reactivo tipado con la interfaz
const registroForm = reactive<RegistroForm>({
  nombre: '',
  apellido: '',
  username: '',
  fNacimiento: '',
  correo: '',
  numero: '',
  contraseña: '',
})

const error = ref('')
const registrado = ref(false)

// Fecha de hoy en 'YYYY-MM-DD' para que no se pueda elegir una fecha futura
const hoy = new Date().toISOString().slice(0, 10)

// Devuelve el mensaje del primer error, o '' si todo está bien
function validar(): string {
  const { nombre, apellido, username, fNacimiento, correo, numero, contraseña } = registroForm

  if (
    !nombre.trim() ||
    !apellido.trim() ||
    !username.trim() ||
    !fNacimiento ||
    !correo.trim() ||
    !numero.trim() ||
    !contraseña
  ) {
    return 'Completa todos los campos'
  }
  if (!/^\S+@\S+\.\S+$/.test(correo.trim())) return 'El correo no es válido'
  if (!/^\d{10}$/.test(numero.trim())) return 'El teléfono debe tener 10 dígitos'
  if (fNacimiento > hoy) return 'La fecha de nacimiento no puede ser futura'
  if (contraseña.length < 6) return 'La contraseña debe tener al menos 6 caracteres'
  return ''
}

function enviar() {
  error.value = validar()
  if (error.value) return

  try {
    registroUser(registroForm)
    registrado.value = true
  } catch (e) {
    // Aquí cae el error de "correo ya registrado"
    error.value = (e as Error).message
  }
}
</script>

<template>
  <div v-if="registrado">
    <h2 class="modal__title">Cuenta Creada Correctamente</h2>
    <p class="modal__text">Bienvenido a AlexVault, {{ registroForm.username }}. Ya puedes iniciar sesion con tu correo y contraseña</p>
    <button class="modal__submit modal__submit--full" @click="emit('login')">Iniciar Sesion</button>
  </div>

  <!-- FORMULARIO -->
   <form v-else class="model__form" @submit.prevent="enviar">
    <h2 class="modal__title">Crear Cuenta</h2>

    <div class="modal__row">
      <label class="modal__field">Nombre
        <input v-model="registroForm.nombre" type="text" />
      </label>
      <label class="modal__field">Apellido
        <input v-model="registroForm.apellido" type="text" />
      </label>
    </div>

    <label class="modal__field">Nombre de usuario
      <input v-model="registroForm.username" type="text"  />
    </label>

    <label class="modal__field">Fecha de nacimiento
      <input v-model="registroForm.fNacimiento" type="date" :max="hoy" />
    </label>

    <label class="modal__field">Correo electrónico
      <input v-model="registroForm.correo" type="email"  />
    </label>

    <label class="modal__field">Teléfono
      <input v-model="registroForm.numero" type="tel" inputmode="numeric" maxlength="10" placeholder="10 dígitos" />
    </label>

    <label class="modal__field">Contraseña
      <input v-model="registroForm.contraseña" type="password"  />
    </label>

    <p v-if="error" class="modal__error">{{ error }}</p>

    <button type="submit" class="modal__submit">Registrarme</button>

    <p class="modal__switch"> ¿Ya tienes cuenta?
      <button type="button" class="modal__link" @click="emit('login')">Inicia Sesion</button>
    </p>
   </form>
</template>
