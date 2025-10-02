const supertest = require("supertest");
const app = require("../app");

const request = supertest(app);

const url = "/tarefas";

describe("Testes da rota /tarefas", () => {
    let id;

test("GET / deve retornar 200", async () => {
    const response = await request.get(url);
    expect(response.status).toBe(200);
});

test("POST /tarefas deve retornar 201 e JSON, salvando o id", async () => {
    const response = await request.post(url).send({
      nome: "Estudar Node",
      concluida: false,
    });
    expect(response.status).toBe(201);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body["id"]).toBeDefined();

    id = response.body["id"];

    expect(response.body["nome"]).toBe("Estudar Node");
    expect(response.body["concluida"]).toBe(false);
  });

  test("GET /tarefas/:id deve retornar 200 e JSON da tarefa criada", async () => {
    const response = await request.get(`${url}/${id}`);
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body["id"]).toBe(id);
    expect(response.body["nome"]).toBe("Estudar Node");
    expect(response.body["concluida"]).toBe(false);
  });

  test("GET /tarefas/1 deve retornar 404 e JSON", async () => {
    const response = await request.get(`${url}/1`);
    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("PUT /tarefas/:id deve retornar 200 e JSON com tarefa atualizada", async () => {
    const response = await request.put(`${url}/${id}`).send({
      nome: "Estudar Node e Express",
      concluida: true,
    });
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body["id"]).toBe(id);
    expect(response.body["nome"]).toBe("Estudar Node e Express");
    expect(response.body["concluida"]).toBe(true);
  });

  test("PUT /tarefas/1 deve retornar 404 e JSON", async () => {
    const response = await request.put(`${url}/1`).send({
      nome: "Teste inexistente",
      concluida: false,
    });
    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("DELETE /tarefas/:id deve retornar 204 e sem conteúdo", async () => {
    const response = await request.delete(`${url}/${id}`);
    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
  });

  test("DELETE /tarefas/1 deve retornar 404 e JSON", async () => {
    const response = await request.delete(`${url}/1`);
    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toMatch(/json/);
  });

});