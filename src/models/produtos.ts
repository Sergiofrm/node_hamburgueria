
type productype = "hamburguer"|"bebidas"|"doces";

type product = {
  type:productype;
  image:string;
  name:string;
  color:string;
};

const data: product[] = [
  {
    type: "hamburguer",
    image: "hamb1.png",
    name: "Supremo Camarão",
    color: "Camarão",
  },
  {
    type: "hamburguer",
    image: "hamb2.png",
    name: "Supremo Chiken",
    color: "Frango",
    
  },
  {
    type: "hamburguer",
    image: "hamb3.png",
    name: "Cheddar Burguer",
    color: "Carne",
    
  },
  {
    type: "hamburguer",
    image: "hamb4.png",
    name: "Smash Burguer",
    color: "Carne",
    
  },  
  {
    type: "hamburguer",
    image: "hamb5.png",
    name: "Vegano Supremo",
    color: "Soja",
    
  },  
  {
    type: "hamburguer",
    image: "hamb6.jpg",
    name: "Supremo Bacon",
    color: "Carne",
    
  },  
  {
    type: "doces",
    image: "sobre1.png",
    name: "Bannof",
    color: "Banana , Caramelo",
    
  },  
  {
    type: "doces",
    image: "sobre2.jpg",
    name: "Profecia de Morango",
    color: "Morango, Caramelo,Chocolate e Sorvete",
    
  },  
  {
    type: "doces",
    image: "sobre3.png",
    name: "Petit gateau",
    color: "Brownie , Chocolate e Sorvete",
    
  },  
  {
    type: "doces",
    image: "sobre4.png",
    name: "Supremacia de Sabores",
    color: "Chocolate ,Banana , Caramelo,Sorvete e Doce de Leite",
    
  },  
  {
    type: "doces",
    image: "sobre5.jpg",
    name: "Brownie Doce de Leite",
    color: "Brownie , Doce de Leite , Sorverte e Calda de Caramelo",
    
  },  
  {
    type: "doces",
    image: "sobre6.jpg",
    name: "Supremo Milk Shake ",
    color: "Chocolate Belga , Calda de Chocolate",
    
  },  
  {
    type: "bebidas",
    image: "drink1.png",
    name: "Morange Drink",
    color: "Morango , Laranja",
    
  },  
  {
    type: "bebidas",
    image: "drink2.png",
    name: "Lemmon Mexicana Drink",
    color: "Limão , Laranja da Terra",
    
  },  
  {
    type: "bebidas",
    image: "drink3.png",
    name: "Lemnonation Drink",
    color: "Limão e Hortelã da Africa",
    
  },  
  {
    type: "bebidas",
    image: "drink4.png",
    name: "Moranguete Drink",
    color: "Morango e Casca de Arvore",
    
  }, 
  {
    type: "bebidas",
    image: "drink5.png",
    name: "Morancujá Drink",
    color: "Maracujá e Morango",
    
  }, 
  {
    type: "bebidas",
    image: "drink6.jpg",
    name: "Maguerola Drink",
    color: "Manga e Acerola",
    
  }, 

];

export const product ={
  getAll :()=>{
    return data;
  },

  getFromType: (type: productype): product[]=>{
    return data.filter((item) => {
      if (item.type === type) {
        return true;
      }
      else{
        return false;
      }
  });
},

  getFromName:(name:string): product[] =>{
    return data.filter((item) =>{
      if (
        item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1 ){
          return true;
        }else{
          return false;
        }
        
    });
  },
};
