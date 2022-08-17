import { Request, Response } from "express"
import { DataSource } from "typeorm"
import dataSource from "./datasource"
import { User } from "./entity/User"


const express = require('express')
const router = express.Router()

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


router.get("/", async (req: Request, res: Response) => {
    const users = await dataSource.getRepository(User).find()
    res.json(users)
})

router.post("/", async (req: Request, res: Response) => {
    const user = req.body
    const result = await dataSource.getRepository(User).save(user)
    res.send(result)
})

router.put("/:id", async (req: Request, res: Response) => {
    const user = await dataSource.getRepository(User).findOneBy({
        id: +req.params.id,
    })
    dataSource.getRepository(User).merge(user, req.body)
    const results = await dataSource.getRepository(User).save(user)
    return res.send(results)
})


router.delete("/:id", async (req: Request, res: Response) => {
    const results = await dataSource.getRepository(User).delete(req.params.id)
    return res.send(results)
})

export default router










// import { Request, Response } from "express"
// import { DataSource } from "typeorm"
// import dataSource from "./datasource"
// import { User } from "./entity/User"


// const express = require('express')
// const router = express.Router()

// router.get("/user", async (req: Request, res: Response) => {
//     const users = await dataSource.getRepository(User).find()
//     res.json(users)
// })

// router.post('/user', async (req: Request, res: Response) => {
//     const user = req.body
//     const result = await dataSource.getRepository(User).save(user)
//     res.send(result)
// })

// router.put("/user/:id", async function (req: Request, res: Response) {
//     const user = await dataSource.getRepository(User).findOneBy({
//         id: req.params.id,
//     })
//     dataSource.getRepository(User).merge(user, req.body)
//     const results = await dataSource.getRepository(User).save(user)
//     return res.send(results)
// })

// router.delete("/user/:id", async function (req: Request, res: Response) {
//     const results = await dataSource.getRepository(User).delete(req.params.id)
//     return res.send(results)
// })

// export default router