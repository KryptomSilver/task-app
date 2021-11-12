from fastapi import APIRouter
from models.todoModel import ToDo
from config.database import collection
from schemas.todoSchema import todosEntity,todoEntity
from bson.objectid import ObjectId

todoRouter = APIRouter()


@todoRouter.post("/todo")
def create_ToDo(todo: ToDo):
    new_ToDo = dict(todo)
    del new_ToDo["id"]
    collection.insert_one(new_ToDo).inserted_id
    return "ToDo created"


@todoRouter.get("/todo")
def find_All_ToDos():
    todos = collection.find()
    return todosEntity(todos)
