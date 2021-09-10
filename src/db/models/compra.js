import mongoose from "mongoose";

const compraSchema = mongoose.Schema({
    id: {
        type: Number,
        required: false
    },
    id_user: {
            type: String,
            required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: false
    },
});

export default mongoose.model('Compra', compraSchema);