'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PersonaSchema = Schema({
    id: mongoose.Schema.Types.ObjectId,
    external_id: String,
    nombre: String,
    correo: String,
    secretToken: String,
    }, false);

module.exports = mongoose.model("Persona", PersonaSchema);