const express = require('express');
const tarefaRouter = express.Router();

const tarefaController = require('../controllers/tarefaController');


tarefaRouter.get('/', tarefaController.listar);

tarefaRouter.get('/:tarefaId', tarefaController.buscarPeloId);

tarefaRouter.post('/', tarefaController.criar);

tarefaRouter.put('/:tarefaId', tarefaController.atualizar);

tarefaRouter.delete('/:tarefaId', tarefaController.remover);



module.exports = tarefaRouter;
