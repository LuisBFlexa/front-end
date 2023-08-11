import { useEffect } from "react"
import { api } from "../../utils/api/api"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { photo_url } from "../../utils/images/photo_url"
import { Link } from "react-router-dom"

function Post({isshowpage}) {
    const {id} = useParams('')
    const [post, setPost] = useState('')
    const [posts, setPosts] = useState('')

    useEffect(() => {
        id?
        api.get(`/posts/${id}`).then((response) => {
            setPost(response.data);
            })
            .catch((err) => {
                console.log(err)
            }):
        api.get('/posts/').then((response) => {
            setPosts(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
        }, [id])

    console.log(post)
    return (
        <div className = "bg-white flex justify-around">
            <div className="bg-[#F0EFEF] w-4/5 min-h-screen border-r-0.1 border-l-0.1 border-black justify-center">
                {posts? posts.map((post) => {
                    console.log(post)
                return (
                <div key = {post.id}>
                    <div className="mt-16 mx-8 w-max-full h-fit border-b-0.1 border-black">
                        <Link  to={`/post/${post.id}`} className="text-3xl">{post.title}</Link>
                    </div>

                    <div className="mt-28 w-full max-h-screen justify-center items-center flex"> 
                        <div className="bg-[#D9D9D9] w-1/2 h-fit max-h-4/5 justify-center items-center flex rounded-2xl border-0.1 border-black">
                            <img className='p-8'src={photo_url.defaults.baseURL + post.post_image_url} alt="foto do post" />
                        </div>
                    </div>

                    <div className="mx-10 my-20 w-fit h-fit max-h-1/5 flex justify-center items-center">
                        <div className="bg-[#D9D9D9] w-fit h-fit max-w-1/2 rounded-2xl border-0.1 border-black">
                            <p className="p-4">
                            {post.description}  
                            </p>
                        </div>
                    </div>
                </div>
                )}

                ): 
                <div>
                    <div className="mt-16 mx-8 w-max-full h-fit border-b-0.1 border-black flex justify-between">
                        <p className="text-3xl">{post.title}</p>
                        <p className="text-2xl">{`de:${post.user}`}</p>
                    </div>

                    <div className="mt-28 w-full max-h-screen justify-center items-center flex"> 
                        <div className="bg-[#D9D9D9] w-1/2 h-fit max-h-4/5 justify-center items-center flex rounded-2xl border-0.1 border-black">
                            <img className='p-8'src={photo_url.defaults.baseURL + post.post_image_url} alt="foto do post" />
                        </div>
                    </div>

                    <div className="mx-10 my-20 w-fit h-fit max-h-1/5 flex justify-center items-center">
                        <div className="bg-[#D9D9D9] w-fit h-fit max-w-1/2 rounded-2xl border-0.1 border-black">
                            <p className="p-4">
                            {post.description}  
                            </p>
                        </div>
                    </div>

                    {post.feedbacks? post.feedbacks.map((feedback)  => {
                        return (
                    <div className="mx-10 my-20 w-fit h-fit max-h-1/5 flex flex-col justify-center items-center">
                        <div className="mt-16 mx-8 w-max-full h-fit border-b-0.1 border-black">
                            <p className="text-3xl">Feedbacks</p>
                        </div>
                        <div className="bg-[#D9D9D9] w-fit h-fit max-w-1/2 rounded-2xl border-0.1 border-black">
                            <p className="p-4">
                            {feedback.comment}  
                            </p>
                        </div>
                    </div>
    )   }):
                    <div className="flex flex-col justify-center">
                        <div className="mt-16 mx-8 w-max-full h-fit border-b-0.1 border-black">
                            <p className="text-3xl">Feedbacks</p>
                        </div>
                        <div className="flex w-full ml-10 h-fit my-10 justify-left">
                            <div className="bg-[#D9D9D9] w-96 h-fit flex-col rounded-3xl">
                                <p className="my-3 text-center text-white text-2xl">O post ainda não possui feedbacks</p>
                            </div>
                        </div>
                    </div>
                 }
                </div>
}

            </div>
        </div>
    )
}

export default Post