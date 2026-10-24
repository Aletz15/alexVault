import { ref } from 'vue'
import type { ChatMessage } from '../interfaces/chatmessage.interface'
import { getRespuestaSoporte } from '../data/soporte.ts'

// Composable: igual que useContador, junta el estado (messages) y las funciones del chat
export const useChat = () => {
  const messages = ref<ChatMessage[]>([
    {
      id: Date.now(),
      message: '¡Hola! Soy el soporte de AlexVault. ¿En qué te puedo ayudar?',
      itsMine: false,
    },
  ])

  // true mientras soporte "escribe" su respuesta
  const escribiendo = ref(false)

  // Se ejecuta cuando MessageBox emite el mensaje
  const onMessage = (text: string) => {
    messages.value.push({
      id: Date.now(),
      itsMine: true,
      message: text,
    })

    escribiendo.value = true

    // Como el setTimeout de promesas.ts: soporte responde después de 1 segundo
    setTimeout(() => {
      messages.value.push({
        id: Date.now(),
        itsMine: false,
        message: getRespuestaSoporte(text),
      })
      escribiendo.value = false
    }, 1000)
  }

  return {
    messages,
    escribiendo,
    onMessage,
  }
}