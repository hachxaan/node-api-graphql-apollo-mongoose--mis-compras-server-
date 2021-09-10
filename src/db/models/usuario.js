import mongoose from "mongoose";

const UsuarioSchema = mongoose.Schema({
    id: {
            type: String,
            required: false
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    },

    direccion: {
        type: String,
        required: false
    },
    ciudad: {
        type: String,
        required: false
    },
    pais: {
        type: String,
        required: false
    },
    telefono: {
        type: String,
        required: false
    },
    
    foto: {
        type: String,
        required: false
    },


});

export default mongoose.model('Usuario', UsuarioSchema);