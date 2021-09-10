import mongoose from "mongoose";
import CompraModel from "./models/compra";
import UsuarioModel from "./models/usuario";

export const conectaDB = () => {
    mongoose.connect(
        'mongodb://localhost/mongographql', {useNewUrlParser: true})
        .then( ()=> console.log('conectado a db [OK]') )
        .catch( (e)=> console.log({error:e}) );

};

//* USUARIOS

export const getUsuarios = async ()=> await UsuarioModel.find();


/** OBTIENE EL ID DE USUARIO DE CORREO DEGISTRADO
 * SI NO EXISTE EL CORREO CREA NUEVO USUARIO
 */
export const getUsuario = (email, name) => {
    return new Promise((resolve,reject)=>{
      UsuarioModel.findOne({email:email},async (err,UsuarioDataset)=>{
        if (err) reject(err)
        else {
            if (UsuarioDataset) resolve(UsuarioDataset)
            else {
                let usuario = new UsuarioModel({ name, email });
                const nuevoUsuario = await usuario.save();
                resolve(nuevoUsuario);
            }
            
        }
    })
})};

/** OBTIENE LISTA DE COMPRAS DEL USUARIO
 * 
 */

 export const getComprasUsuario = (_id) => 
    new Promise((resolve,reject)=> 
        CompraModel.find({id_user:_id}, (err,ComprasDataset)=>
            (err)?reject(err):resolve(ComprasDataset)  )
);


/** OBTIENE USUARIO POR ID
 * 
 */

export const getUsuarioById = async (_id) => await UsuarioModel.findById(_id);
          
    
export const updateUsuario = async (usuario)=> await UsuarioModel.findByIdAndUpdate(usuario._id, { 
        email: usuario.email,
        name: usuario.name,
        direccion: usuario.direccion,
        ciudad: usuario.ciudad,
        pais: usuario.pais,
        telefono: usuario.telefono,
        foto: usuario.foto });


//* COMPRAS
export const getCompras   = async  ()=> await CompraModel.find();
export const deleteCompra = async (_id)=> await CompraModel.findByIdAndDelete(_id);
export const updateCompra = async (_id, estado)=> await CompraModel.findByIdAndUpdate(_id, { estado });
export const createCompra = async (compra)=>{
    const data = new CompraModel(compra);
    await data.save();
    return data;
};


export const createUsuario = async (usuairo)=> new UsuarioModel(usuairo).save();



