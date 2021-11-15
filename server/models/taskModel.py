from typing import Optional
from pydantic import BaseModel


class Task(BaseModel):
    id: Optional[str]
    name: str
    description: str
    state: bool


class State(BaseModel):
    state: bool
