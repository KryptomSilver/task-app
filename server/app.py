from fastapi import FastAPI
from routes.todo import todoRouter

app = FastAPI()

app.include_router(todoRouter)
