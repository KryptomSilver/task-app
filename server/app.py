from fastapi import FastAPI
from routes.todo import ToDo

app = FastAPI()

app.include_router(ToDo)
