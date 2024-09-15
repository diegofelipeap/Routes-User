import express from 'express'
import { PrismaClient } from '@prisma/client' //ORM

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.get('/usuarios', async (req, res) => {

    const getUsers = await prisma.user.findMany()
    res.status(200).json(getUsers)
})

app.post('/usuarios', async (req, res) => {

    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })
    res.status(201).json(user)
})

app.put('/usuarios/:id', async (req, res) => {

    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },

        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })
    res.status(201).json(user)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(204).json({ message: 'Usuário deletado.' })
})

app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${3000} ✅🔛`)
})