

import UsuarioModel from "../db/models/usuario";

import { getCompras, getUsuarios, getUsuario, getUsuarioById, getComprasUsuario, updateUsuario, createCompra, createUsuario, deleteCompra, updateCompra } from '../db/database';

/**
 * NOTE: El acceso a la base de datos queda fuera de los resolverers
 */

export const resolvers = {
  Query: {
      usuario:(root,{email, name})=> getUsuario(email, name),

      usuarios: () => getUsuarios(),
      usuariobyID: (_, {_id}) => getUsuarioById(_id),
      
      compras: () => getCompras(),
      comprasUsuario: (_, {_id}) => getComprasUsuario(_id),

  },
  Mutation: {
    addUsuario: (_, { input }) => createUsuario(input),
    updUsuario: (_, { input }) => updateUsuario(input),

    addCompra: (_, { input }) => createCompra(input),
    delCompra: (_, { _id }) => deleteCompra(_id),
    updCompra: ( _, {_id, estado} ) => updateCompra(_id, estado),
  },

  Compra: {
    id_user : ( {id_user} ) => getUsuarioById(id_user),
  }
  
};
