def todoEntity(todo) -> dict:
    return{
        "id": str(todo["_id"]),
        "name": todo["name"],
        "description": todo["description"],
        "state": todo["state"]
    }


def todosEntity(todos) -> list:
    return [todoEntity(todo) for todo in todos]
