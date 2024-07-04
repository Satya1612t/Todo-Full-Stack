const express = require('express')
const { createTodo, updateTodo } = require('./types')
const app = express();

app.use(express.json());


app.post('/todos', (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)

    if(!parsePayload.success){
        res.status(411).status({
            msg: "Invalid Input",
        })
        return;
    }
    //put the data in mongo DB

})

app.get('/todos', (req, res) => {

})

app.put('/completed', (req, res) => {

    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload)

    if(!parsePayload.success){
        res.status(411).status({
            msg: "Invalid Input",
        })
        return;
    }

    // update in mongo DB
    
})