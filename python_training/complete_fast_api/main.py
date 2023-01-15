from fastapi import FastAPI, Response, status, HTTPException
from fastapi.params import Body
from pydantic import BaseModel
from typing import Optional
from random import randrange
app = FastAPI()

# can extract based on the model that is being used


# good to check if optional fields were already filled out, otherwise could have them overridden with the default values
class Post(BaseModel):
    title: str
    content: str
    # if user doesn't provide published then it will default to true
    published: bool = True
    rating: Optional[float] = None

# don't have to do this
# class UpdatePost(BaseModel):
#     title: Optional[str] = None
#     content: Optional[str] = None
#     publised: Optional[bool] = None
#     rating: Optional[float] = None


my_posts = [
    {"title": "title of post 1",
     "content": "content of post 1", "published": False, "id": 1},
    {"title": "title of post 2",
     "content": "content of post 2", "published": False, "id": 2}
]


@app.get("/")
async def root():
    return {"message": "Hello World!!"}

# passing in an array like this is possible in fastapi as it will automaticaly serialize it and put it into JSON format so that it can be sent by the server and received by the client


@app.get("/posts")
def get_posts():
    return {"data": my_posts}


# want a title:string and a content:string with new posts

# here post model is being used
# fastapi will try to convert the data to the specified type in the model and if it cannot convert it then it will throw a 422 error


@app.post("/posts", status_code=status.HTTP_201_CREATED)
def create_posts(post: Post):
    post_dict = post.dict()
    post_dict["id"] = randrange(0, 100000000)
    # this model is stored as pydantic model, and can be converted to a dictionary
    my_posts.append(post_dict)
    return {"data": post_dict, "message": "successfully created post!"}

# fastapi works from top down, so you just want to make sure that any routes that could possibly match each other are ordered in such a way as to where a one wouldn't be accidentally fired when the request was meant for a very different route
# here if getting the post by the id was first then anything that came through on that route would be attempted to be converted to an int, which would cause an error


@app.get("/posts/latest")
def get_latest():
    print("fired")
    post = my_posts[len(my_posts)-1]
    return {"detail": post}


@app.get("/posts/{post_id}")
def get_post_by_id(post_id: int):
    for post in my_posts:
        print(post)
        if post["id"] == post_id:
            return post
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                        detail=f"post with id {post_id} was not found")


@app.delete("/posts/{post_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_post(post_id: int):
    for i, p in enumerate(my_posts):
        if p['id'] == post_id:
            my_posts.pop(i)
            return Response(status_code=status.HTTP_204_NO_CONTENT)

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                        detail=f'Post with id {post_id} was not found')


def findIndex(id: int):
    for i, p in enumerate(my_posts):
        if p['id'] == id:
            return i


@app.put("/posts/{post_id}")
def update_post(update_post: Post, post_id: int):
    index = findIndex(post_id)
    if index == None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"post with id {post_id} was not found")
    post_Dict = update_post.dict()
    print(post_Dict)
    post_Dict['id'] = post_id
    if post_Dict['rating'] == None:
        if 'rating' in my_posts[index]:
            post_Dict['rating'] = my_posts[index]['rating']
            print(post_Dict, "with rating")

    my_posts[index] = post_Dict
    return {"data": post_Dict}
