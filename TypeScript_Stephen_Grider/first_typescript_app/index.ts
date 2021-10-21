import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/comments/1'

axios.get(url).then(response=>{
    console.log(response.data)
})