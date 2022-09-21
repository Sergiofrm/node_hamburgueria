import {Request,Response} from "express"
import { createMenuObject } from "../helpers/createMenuObject"

export const home = (req:Request, res:Response)=>{
  res.render("pages/page",{

    menu: createMenuObject("all"),
    banner:{
      title:"Todos os Produtos",
      background:"b2.jpg",
    },
  })
}
export const hamburguer =(req:Request,res:Response)=>{
  res.render("pages/page",{
    menu: createMenuObject("hamburguer"),
    banner:{
      title:"Hamburguer",
      background:"banner_hamburguer.jpg"
    }
  })
}
export const bebidas = (req:Request,res:Response)=>{
  res.render("pages/page",{
    menu: createMenuObject("bebidas"),
    banner:{
      title:"Bebidas",
      background:"drinks-big.jpg"
    }
  })
}
export const doces = (req:Request, res:Response)=>{
  res.render("pages/page",{
    menu: createMenuObject("doces"),
    banner:{
      title:"Doces",
      background:"doce2.jpg"
    }
  })
}