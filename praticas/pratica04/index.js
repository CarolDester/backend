const express = require("express");

const tarefas = [  
    { id: 1, nome: "Estudar middleware", concluida: false },  
    { id: 2, nome: "Praticar Express", concluida: true }  
  ];

  
const app = express();

const router = express.Router();


module.exports = app;


router.get('/', (req, res) => {
    res.send(tarefas);
});

router.get('/:id' , (req, res) => {
    const { id } = req.params
    res.send(tarefas.find(x => x.id == id));
});

router.post('/', (req, res) => {
    const novaTarefa = req.body;
    tarefas.push(novaTarefa);
    res.status(201).send(tarefas);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const tarefaAtualizada = req.body;
    if (id == 1)return res.send(tarefaAtualizada);
    res.status(404).send("Tarefa não encontrada");
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (id)return res.status(204).end();
    throw Error("Tarefa não encontrada");
})


app.use(express.json());

app.use((req, res, next) => {
    console.log("Data e Hora", Date())
    next()
});

app.use('/tarefas', router);

app.listen(3000, ()=>{
    console.log("App está On!");
});