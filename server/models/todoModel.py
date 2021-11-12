from typing import Optional
from pydantic import BaseModel


class ToDo(BaseModel):
    id: Optional[str]
    name: str
    description: str
    state: bool
