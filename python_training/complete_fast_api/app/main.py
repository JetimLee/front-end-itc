from fastapi import FastAPI, Response, status, HTTPException, Depends
from fastapi.params import Body
from pydantic import BaseModel
from typing import Optional
from random import randrange
import psycopg2
from psycopg2.extras import RealDictCursor
import time
from . import models
from sqlalchemy.orm import Session
from .database import engine, SessionLocal, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
# The session is what is ultimately responsible for talking with the DB


class Post(BaseModel):
    title: str
    content: str
    # if user doesn't provide published then it will default to true
    published: bool = True
    # rating: Optional[float] = None


# don't have to do this
# class UpdatePost(BaseModel):
#     title: Optional[str] = None
#     content: Optional[str] = None
#     publised: Optional[bool] = None
#     rating: Optional[float] = None


while True:
    try:
        conn = psycopg2.connect(
            host="localhost",
            database="fastapi",
            user="postgres",
            password="",
            cursor_factory=RealDictCursor,
        )
        cursor = conn.cursor()
        print("Database connection was successful")
        break
    except Exception as error:
        print("Connecting to database failed")
        print("error:", error)
        time.sleep(2)


my_posts = [
    {
        "title": "title of post 1",
        "content": "content of post 1",
        "published": False,
        "id": 1,
    },
    {
        "title": "title of post 2",
        "content": "content of post 2",
        "published": False,
        "id": 2,
    },
]


@app.get("/")
async def root():
    return {"message": "Hello World!!"}


# little test route for understanding how the orm works
@app.get("/sqlalchemy")
def test_posts(db: Session = Depends(get_db)):
    posts = db.query(models.Post).all()
    return {"data": posts}


@app.get("/posts")
def get_posts(db: Session = Depends(get_db)):
    posts = db.query(models.Post).all()
    return {"data": posts}


@app.post("/posts", status_code=status.HTTP_201_CREATED)
def create_posts(post: Post):
    cursor.execute(
        """INSERT INTO posts (title, content, published) VALUES (%s, %s, %s) RETURNING * """,
        (post.title, post.content, post.published),
    )
    new_post = cursor.fetchone()
    conn.commit()
    return {"data": new_post}


@app.get("/posts/latest")
def get_latest():
    post = my_posts[len(my_posts) - 1]

    return {"detail": post}


# converting it back and forth to prevent a user from giving some random id, works for this but not necessarily a uuid which would be a string
@app.get("/posts/{post_id}")
def get_post_by_id(post_id: int):
    cursor.execute("""SELECT * FROM posts WHERE id = %s """, (str(post_id),))
    found_post = cursor.fetchone()
    print(found_post)

    if found_post == None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"post with id {post_id} was not found",
        )
    return {"post": found_post}


@app.delete("/posts/{post_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_post(post_id: int):
    cursor.execute("""DELETE FROM posts WHERE id = %s RETURNING *""", (str(post_id),))
    deleted_post = cursor.fetchone()
    if deleted_post == None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Post with id {post_id} was not found",
        )
    conn.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@app.put("/posts/{post_id}")
def update_post(update_post: Post, post_id: int):
    cursor.execute(
        """UPDATE posts SET title = %s, content = %s, published =%s WHERE id = %s RETURNING *""",
        (update_post.title, update_post.content, update_post.published, str(post_id)),
    )

    updated_post = cursor.fetchone()
    if updated_post == None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"post with id {post_id} was not found",
        )
    conn.commit()
    return {"data": updated_post}
