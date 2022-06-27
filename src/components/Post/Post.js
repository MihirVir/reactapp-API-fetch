import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './style.css'
const Post = () => {
    const url = 'https://reqres.in/api/users?page=1';
    const [post, setPost] = useState(null);
    useEffect(() => {
        axios.get(url).then((res) => {
            setPost(res.data)
            console.log(res.data)
        })
    }, [url])
    if(post) {
        return (
            <>
                <section className = "details">
                    
                        {post.data.map((i) => {
                            return (
                                <>
                                    <div className = "wrapper">
                                        <img className = "img" src={i.avatar} alt="" />
                                        <p className = "name">{i.first_name}</p>
                                        <p className = "name">{i.last_name}</p>
                                        <h1 className = "email">{i.email}</h1>
                                    </div>
                                    
                                </>
                            )
                        })}
                    
                </section>
            </>
        )
    }
    return (
        <div>
            Loading... or no data available
        </div>
    )
}

export default Post