from fastapi import APIRouter, HTTPException
from models.todoModel import ToDo
from config.database import collection
from schemas.todoSchema import todosEntity, todoEntity
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


@todoRouter.get("/todo/{id}")
def find_ToDo(id: str):
    find_ToDo = collection.find_one({"_id": ObjectId(id)})
    if(not find_ToDo):
        raise HTTPException(status_code=404, detail="ToDo not found")
    todo = collection.find_one({"_id": ObjectId(id)})
    return todoEntity(todo)


@todoRouter.put("/todo/{id}")
def update_ToDo(id: str, todo: ToDo):
    find_ToDo = collection.find_one({"_id": ObjectId(id)})
    if(not find_ToDo):
        raise HTTPException(status_code=404, detail="ToDo not found")
    update_ToDo = dict(todo)
    del update_ToDo["id"]
    collection.find_one_and_update(
        {"_id": ObjectId(id)}, {"$set": update_ToDo})
    todo = collection.find_one({"_id": ObjectId(id)})
    return todoEntity(todo)
