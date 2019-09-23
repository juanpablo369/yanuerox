'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var PublicacionSchema = Schema({
    id: mongoose.Schema.Types.ObjectId,
    external_id: String,
    nombre: String,
    correo: String,
    publish: String,
    timestamp: { type: Date, default: Date.now },    
}, false);

module.exports = mongoose.model("Publicacion", PublicacionSchema);
