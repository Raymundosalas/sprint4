<template>
  <div>
    <h2>Agendar Cita</h2>

    <form @submit.prevent="crearCita" class="formulario">

      <select v-model="cita.pacienteId">
        <option value="">Selecciona paciente</option>
        <option v-for="p in pacientes" :key="p.id" :value="p.id">
          {{ p.nombre }}
        </option>
      </select>

      <input type="date" v-model="cita.fecha" />
      <input type="time" v-model="cita.hora" />
      <input type="text" v-model="cita.observaciones" placeholder="Observaciones" />

      <button type="submit">Agendar</button>
    </form>

    <h3>Lista de Citas</h3>

    <table>
      <thead>
        <tr>
          <th>Paciente</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Acción</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="c in citas" :key="c.id">
          <td>{{ c.nombre }}</td>
          <td>{{ c.fecha }}</td>
          <td>{{ c.hora }}</td>
          <td>
            <button @click="eliminarCita(c.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pacientes = ref([])
const citas = ref([])

const cita = ref({
  pacienteId: '',
  fecha: '',
  hora: '',
  observaciones: ''
})


// OBTENER PACIENTES
const cargarPacientes = async () => {
  const res = await fetch('http://localhost:3000/api/pacientes')
  pacientes.value = await res.json()
}


// OBTENER CITAS
const cargarCitas = async () => {
  const res = await fetch('http://localhost:3000/api/citas')
  citas.value = await res.json()
}


// CREAR CITA
const crearCita = async () => {
  await fetch('http://localhost:3000/api/citas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cita.value)
  })

  cita.value = { pacienteId: '', fecha: '', hora: '', observaciones: '' }

  cargarCitas()
}


// ELIMINAR CITA
const eliminarCita = async (id) => {
  await fetch(`http://localhost:3000/api/citas/${id}`, {
    method: 'DELETE'
  })

  cargarCitas()
}


onMounted(() => {
  cargarPacientes()
  cargarCitas()
})
</script>

<style scoped>
.formulario {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 6px 10px;
  cursor: pointer;
}
</style>
