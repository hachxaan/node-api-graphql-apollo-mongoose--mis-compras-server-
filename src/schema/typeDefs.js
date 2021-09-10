import { gql } from 'apollo-server-express'
//Queries


export const typeDefs = gql` 
    type Query {

        usuarios:[Usuario!]
        usuariobyID(_id: ID):Usuario
        usuario(email: String = "anonimous@mail.com", name: String):IdUsuario
        
        compras:[Compra!]
        compra(id: String):Compra
        comprasUsuario(_id: ID):[Compra!]
        
    }
    type IdUsuario {
      _id: String
    }


    type Usuario {
        _id: ID
        email: String!
        name: String
        direccion: String
        ciudad: String
        pais: String
        telefono: String
        foto: String
    }
    type Compra {
        _id: ID
        id_user: Usuario
        descripcion: String!
        estado: Boolean
        
    }




    input CompraInput {
      id_user: String!
      descripcion: String!
      estado: Boolean = false
    }

    input UsuarioInput { 

        name: String
        email: String!
        direccion: String
        ciudad: String
        pais: String
        telefono: String
        foto: String
    },


    input UsuarioInputUpdate { 
      _id: ID!
      email: String
      name: String
      direccion: String
      ciudad: String
      pais: String
      telefono: String
      foto: String
  },




    type Mutation {
 
      addCompra(input:  CompraInput): Compra
      delCompra(_id: ID!): Compra
      updCompra(_id: ID!, estado:Boolean!): Compra



      updUsuario(input:  UsuarioInputUpdate!): Usuario

      
      
      addUsuario(input:  UsuarioInput!): Usuario 
    
    }
  
  `;


const typeDefs_ = gql`
  type Post {
    id: ID
    title: String
    description: String
  }
  type Query {
    hello: String
    getAll: [Post]
  }
  input PostInput {
    title: String
    description: String
  }
  type Mutation {
    createPost(post: PostInput): Post
    updatePost(id: String, post: PostInput): Post
    deletePost(id: String): String
  }
`;

