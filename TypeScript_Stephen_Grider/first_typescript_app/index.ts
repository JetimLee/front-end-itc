import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/comments/1'

//interfaces are used to describe the structure of an object
//can ignore properties if wanted/needed
interface Comment {
   postId: number;
   id: number;
   name: string;
   email: string;
   body: string;
}

axios.get(url).then(response=>{
   //response.data has properties of:
   //list properties
   const comment = response.data as Comment;
   const id = comment.id
   const postId = comment.postId
   const name = comment.name
   const email = comment.email
   const body = comment.body
   logComment(body)
})

const logComment = (body: string) =>{
   console.log(`The body is ${body}`)

}