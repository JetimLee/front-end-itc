from fastapi import FastAPI, Path
from typing import Optional
from pydantic import BaseModel
# similar to bringing in express to setup the server

app = FastAPI()

students = {1: {"name": "john", "age": 17, "year": "Year 12"}}


class Student(BaseModel):
    name: str
    age: int
    year: str


class UpdateStudent(BaseModel):
    name: Optional[str] = None
    age: Optional[int] = None
    year: Optional[str] = None


@app.get("/")
def index():
    return {"Hello": "Gavin"}

# path params

# dynamic route


@app.get("/get-student/{student_id}")
def get_student(student_id: int = Path(None, description="The ID of the student you want to view", gt=0, lt=3)):
    return students[student_id]

# other options in path gt, lt, ge, le


# query params
# setting none makes it no longer required
@app.get("/get-by-name/{student_id}")
def get_student(*, student_id: int, name: Optional[str] = None, test: int):
    for student_id in students:
        if students[student_id]["name"] == name:
            return students[student_id]
    return {"Data": f"Student with name {name} not found"}


@app.post("/create-student/{student_id}")
def create_student(student_id: int, student: Student):
    if student_id in students:
        return {"Error": "Student exists already"}

    students[student_id] = student
    return students[student_id]


@app.put("/update-student/{student_id}")
def update_student(student_id: int, student: UpdateStudent):
    if student_id not in students:
        return {"Error": "That student does not exist"}
    # have to manually check that the values aren't set to null when updating the student
    if student.name != None:
        students[student_id].name = student.name
    if student.age != None:
        students[student_id].age = student.age
    if student.year != None:
        students[student_id].year = student.year

    return students[student_id]


@app.delete("/delete-student/{student_id}")
def delete_student(student_id: int, studentToDelete: Student):
    if student_id not in students:
        return {"Error": "That student does not exist"}
    del students[student_id]
    return {"Message": "Student deleted successfully"}
