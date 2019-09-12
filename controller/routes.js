'use strict'

ver_registro(req, res) {
        res.render('fragmentos/cocteles', {title: 'Registrate', sesion: true, fragmento: 'fragmentos/medico/frm_registro_medico'});
    }