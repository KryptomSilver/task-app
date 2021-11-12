from fastapi import FastAPI
from routes.todoRouter import todoRouter

app = FastAPI()

app.include_router(todoRouter)
