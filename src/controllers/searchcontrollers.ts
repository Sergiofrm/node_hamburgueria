import { Request,Response } from "express";
import { product } from "../models/produtos";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req:Request,res:Response)=>{

  /* Função para pegar a string de busca / Pesquisar */
let query: string = req.query.busca as string;

/* "Condição se apertar o enter na busca , ele vai redirecionar para a HOME" */
if (!query){
  res.redirect('/');
  return;
}


let list = product.getFromName(query);


  res.render('pages/page',{
    menu: createMenuObject(''),
    list,
    query, /* "Item Digitado da variavel" */

  });
};