import {Request,Response} from "express"
import { createMenuObject } from "../helpers/createMenuObject"
import { product } from "../models/produtos"

export const home = (req:Request, res:Response)=>{
  let list = product.getAll();

  res.render("pages/page",{
    menu: createMenuObject("all"),
    banner:{
      title:"Todos os Produtos",
      background:"banner_oficial.jpg",
    },
    list,
  });
};
export const hamburguer =(req:Request,res:Response)=>{
  let list = product.getFromType("hamburguer");

  res.render("pages/page",{ 
    menu: createMenuObject("hamburguer"),
    banner:{
      title:"Hamburguer",
      background:"banner_hamburguer.jpg"
    },
    list,

  });
};
export const bebidas = (req:Request,res:Response)=>{
  let list = product.getFromType("bebidas");
  res.render("pages/page",{
    menu: createMenuObject("bebidas"),
    banner:{
      title:"Bebidas",
      background:"drinks-big.jpg"
    },
    list,
  });
};
export const doces = (req:Request, res:Response)=>{
  let list = product.getFromType("doces");
  res.render("pages/page",{
    menu: createMenuObject("doces"),
    banner:{
      title:"Sobremesas",
      background:"doce2.jpg"
    },
    list,
    
  });
};


