from fastapi import APIRouter, HTTPException, Response
from models.taskModel import Task, State
from config.database import collection
from schemas.taskSchema import tasksEntity, taskEntity
from bson.objectid import ObjectId
from starlette.status import HTTP_204_NO_CONTENT


taskRouter = APIRouter()


@taskRouter.post("/task")
def create_Task(task: Task):
    new_Task = dict(task)
    del new_Task["id"]
    id = collection.insert_one(new_Task).inserted_id
    taskFind = collection.find_one(id)
    return taskEntity(taskFind)


@taskRouter.get("/task", response_model=list[Task])
def find_All_Tasks():
    tasks = collection.find()
    return tasksEntity(tasks)


@taskRouter.get("/task/{id}", response_model=Task)
def find_Task(id: str):
    find_Task = collection.find_one({"_id": ObjectId(id)})
    if(not find_Task):
        raise HTTPException(status_code=404, detail="Task not found")
    task = collection.find_one({"_id": ObjectId(id)})
    return taskEntity(task)


@taskRouter.patch("/task/{id}", response_model=Task)
def update_Task(id: str, task: Task):
    find_Task = collection.find_one({"_id": ObjectId(id)})
    if(not find_Task):
        raise HTTPException(status_code=404, detail="Task not found")
    update_Task = dict(task)
    del update_Task["id"]
    collection.find_one_and_update(
        {"_id": ObjectId(id)}, {"$set": update_Task})
    taskFind = collection.find_one({"_id": ObjectId(id)})
    return taskEntity(taskFind)


@taskRouter.delete("/task/{id}", status_code=HTTP_204_NO_CONTENT)
def delete_Task(id: str):
    find_Task = collection.find_one({"_id": ObjectId(id)})
    if(not find_Task):
        raise HTTPException(status_code=404, detail="Task not found")
    collection.find_one_and_delete(
        {"_id": ObjectId(id)})
    return Response(status_code=HTTP_204_NO_CONTENT)


@taskRouter.patch("/task/state/{id}")
def update_State(id: str, state: State):
    find_Task = collection.find_one({"_id": ObjectId(id)})
    if(not find_Task):
        raise HTTPException(status_code=404, detail="Task not found")
    task = dict(find_Task)
    task["state"] = state.state
    collection.find_one_and_update(
        {"_id": ObjectId(id)}, {"$set": task})
    taskUpdate = collection.find_one({"_id": ObjectId(id)})
    return taskEntity(taskUpdate)
