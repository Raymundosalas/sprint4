# Sistema Web para la Gestión de Citas en Consultorios

## Sprint 4 – Módulo de Programación de Citas

---

## Descripción del proyecto

Este proyecto consiste en el desarrollo de un **sistema web para la gestión de citas en consultorios pequeños**, cuyo objetivo es facilitar la administración de pacientes y la programación de citas médicas.

El sistema se desarrolla utilizando la metodología ágil **Scrum**, organizando el trabajo en Sprints que permiten la entrega incremental de funcionalidades.

En el **Sprint 4** se implementó el módulo de **programación de citas**, permitiendo registrar, visualizar y eliminar citas médicas asociadas a pacientes.

---

## Objetivo del Sprint 4

Desarrollar un módulo funcional que permita:

* Registrar citas médicas
* Relacionar citas con pacientes
* Visualizar citas en una tabla
* Eliminar citas registradas

---

## Tecnologías utilizadas

* Node.js
* Express
* Vue.js 3
* Vite
* JavaScript
* REST API
* Git y GitHub

---

## Estructura del proyecto

```text
sistema-citas
│
├── backend
│   ├── server.js
│   ├── routes
│   │   ├── pacientes.js
│   │   └── citas.js
│   └── data
│       ├── pacientes.js
│       └── citas.js
│
├── frontend
│   └── src
│       ├── views
│       │   ├── Pacientes.vue
│       │   └── Citas.vue
│       ├── components
│       └── router
```

---

## Instalación del proyecto

### 1. Clonar repositorio

```bash
git clone https://github.com/usuario/sistema-citas.git
```

---

### 2. Backend

```bash
cd sistema-citas
npm install
node server.js
```

Servidor en:

```text
http://localhost:3000
```

---

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplicación en:

```text
http://localhost:5173
```

---

## Endpoints de la API

### Obtener citas

GET

```
/api/citas
```

---

### Crear cita

POST

```
/api/citas
```

Body:

```json
{
  "pacienteId": 1,
  "fecha": "2026-03-20",
  "hora": "10:00",
  "observaciones": "Consulta general"
}
```

---

### Eliminar cita

DELETE

```
/api/citas/:id
```

---

## Funcionalidades implementadas

Durante este Sprint se lograron las siguientes funcionalidades:

* Registro de citas médicas
* Relación entre pacientes y citas
* Visualización de citas en tabla
* Eliminación de citas
* Integración con el módulo de pacientes

---

## Resultados del Sprint 4

El Sprint 4 permitió implementar un módulo esencial del sistema, logrando gestionar citas médicas de manera básica.

Este incremento funcional representa un avance significativo dentro del desarrollo del proyecto, ya que permite integrar la información de pacientes con la programación de citas.

---

## Metodología de desarrollo

Se utilizó la metodología **Scrum**, aplicando las siguientes etapas:

* Planificación del Sprint
* Desarrollo
* Reuniones diarias
* Revisión del Sprint
* Retrospectiva

Esto permitió organizar el trabajo de forma eficiente y mejorar continuamente el desarrollo del sistema.

---

## Estado actual del proyecto

Actualmente el sistema cuenta con:

* Interfaz base funcional
* Registro de pacientes
* Gestión de pacientes (CRUD)
* Programación de citas
* API REST funcional

---

## Próximos pasos (Sprint 5)

Para el siguiente Sprint se propone:

* Validación de disponibilidad de horarios
* Evitar duplicidad de citas
* Persistencia de datos con base de datos
* Mejora de la interfaz de usuario

---

## Equipo de desarrollo

* Brayan Raymundo Salas Rodríguez
* Axel Mauricio Barraza Cárdenas
* Jesús Alejandro Sainz Maldonado





