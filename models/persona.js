'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PersonaSchema = Schema({
    id: mongoose.Schema.Types.ObjectId,
    external_id: String,
    apellido: String,
    nombre: String,
    area: String,
    carrera: String,
    foto: String,
    correo: String,
    secretToken: String,
    }, false);

module.exports = mongoose.model("Persona", PersonaSchema);