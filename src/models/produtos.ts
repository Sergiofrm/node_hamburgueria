type producttype = "hamburguer"|"bebidas"|"doces";

type product = {
  type:producttype,
  image:string,
  name:string,
  color:string,
}

const data =[{
  type:"Hamburguer",
  image:"hamb4.jpg",
  name:"Simples",
  color:"Amarelo",

}]

export const product ={
  getall :()=>{
    return data;
  },
}
