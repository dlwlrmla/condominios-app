import { Router } from "express"

import { getUser, getUsers, deleteUser } from "../controllers/controllers.js"

const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', getUser)
router.delete('/users/:id', deleteUser)

export default router