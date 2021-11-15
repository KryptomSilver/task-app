def taskEntity(task) -> dict:
    return{
        "id": str(task["_id"]),
        "name": task["name"],
        "description": task["description"],
        "state": task["state"]
    }


def tasksEntity(tasks) -> list:
    return [taskEntity(task) for task in tasks]
