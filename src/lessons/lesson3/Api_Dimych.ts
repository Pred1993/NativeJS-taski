import axios from "axios";

axios.get('https://social-network.samuraijs.com/api/1.0/users?page=2&count=3').then((data) => {
    console.log(data)
})
