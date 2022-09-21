type MenuOptions = "" | "all" |"hamburguer"|"bebidas"|"doces"

export const createMenuObject = (activeMenu: MenuOptions) =>{
  let returnObject = {
    all:false,
    hamburguer:false,
    bebidas:false,
    doces:false
  };
  if(activeMenu != ""){
    returnObject [activeMenu] = true;
  }

  return returnObject;
  
}
