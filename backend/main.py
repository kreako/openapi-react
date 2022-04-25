from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()


class ItemList(BaseModel):
    items: List[int]


class Item(BaseModel):
    id: int
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None
    tags: List[str] = []


DB = [
    Item(
        id=0,
        name="name 0",
        description="long long description 0",
        price=4.5,
        tax=1.2,
        tags=["tag1", "tag2"],
    ),
    Item(
        id=1,
        name="name 1",
        description="long long description 1",
        price=4.5,
        tax=1.2,
        tags=["tag1", "tag2"],
    ),
    Item(
        id=2,
        name="name 2",
        description="long long description 2",
        price=4.5,
        tax=1.2,
        tags=["tag1", "tag2"],
    ),
    Item(
        id=3,
        name="name 3",
        description="long long description 3",
        price=4.5,
        tax=1.2,
        tags=["tag1", "tag2"],
    ),
]


@app.get("/", response_model=ItemList)
async def root():
    return ItemList(items=list(map(lambda e: e.id, DB)))


@app.get("/{item_id}", response_model=Item)
async def item(item_id: int):
    for item in DB:
        if item.id == item_id:
            return item

    raise HTTPException(status_code=404, detail="Item not found")
