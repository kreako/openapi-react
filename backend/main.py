from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None
    tags: List[str] = []


@app.get("/", response_model=Item)
async def root():
    return Item(name="name", description="long long description", price=4.5, tax=1.2, tags=["tag1", "tag2"])