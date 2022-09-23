import { Router} from "express";
import * as pagecontrollers from "../controllers/pagecontrollers"
import * as searchcontrollers from "../controllers/searchcontrollers"


const router = Router()
router.get("/",pagecontrollers.home)
router.get("/hamburguer",pagecontrollers.hamburguer)
router.get("/bebidas",pagecontrollers.bebidas)
router.get("/doces",pagecontrollers.doces)

router.get("/search",searchcontrollers.search)

export default router

