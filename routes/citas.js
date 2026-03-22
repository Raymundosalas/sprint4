const express = require("express");
const router = express.Router();

let citas = require("../data/citas");
let pacientes = require("../data/pacientes");


// OBTENER TODAS LAS CITAS
router.get("/", (req, res) => {
    res.json(citas);
});


// CREAR CITA
router.post("/", (req, res) => {

    const paciente = pacientes.find(p => p.id == req.body.pacienteId);

    if (!paciente) {
        return res.status(404).json({ mensaje: "Paciente no encontrado" });
    }

    const nuevaCita = {
        id: citas.length + 1,
        pacienteId: paciente.id,
        nombre: paciente.nombre,
        fecha: req.body.fecha,
        hora: req.body.hora,
        observaciones: req.body.observaciones
    };

    citas.push(nuevaCita);

    res.json({
        mensaje: "Cita registrada",
        cita: nuevaCita
    });
});


// ELIMINAR CITA
router.delete("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    citas = citas.filter(c => c.id !== id);

    res.json({ mensaje: "Cita eliminada" });
});

module.exports = router;
