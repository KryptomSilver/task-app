from fastapi import APIRouter

ToDo = APIRouter()


@ToDo.post("/todo")
def create_ToDo():
    return "create_ToDo"
