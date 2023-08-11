import { useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../utils/api/api"
import { useEffect } from "react"
import { photo_url } from "../../utils/images/photo_url"
import { Link } from "react-router-dom"

function CategoryPosts() {
    const {id} = useParams()
    const [category, setCategory] = useState('')

    useEffect(() => {
        api.get(`/categories/${id}`).then((response) => {
            setCategory(response.data);
            })
            .catch((err) => {
                console.log(err)
            })
        }, [])

    return (
        <div className = "bg-white flex justify-around">
            <div className="bg-[#F0EFEF] w-4/5 min-h-screen border-r-0.1 border-l-0.1 border-black justify-center">
        
                {/* CATEGORIA */}
                <div className="mt-16 mx-8 w-max-full h-fit border-b-0.1 border-black">
                    <p className="text-3xl">{category.title}</p>
                </div>

                {category && category.posts && category.posts.map((post) => 
                {console.log(post)
                    return(
                    <div key= {post.id}>
                        <div className="mt-28 w-full max-h-screen justify-center items-center flex"> 
                            <div className="flex flex-col bg-[#D9D9D9] w-2/3 h-fit max-h-4/5 rounded-b-2xl border-2 border-black justify-center items-center">
                                <img className= 'w-full' src={photo_url.defaults.baseURL + post.post_image_url} alt="foto do post" />
                                <Link className= 'p-8 text-2xl'to= {`post/${post.id}`}>{post.title}</Link>
                            </div>
                        </div>
                    </div>
                )}
                    
                    )}
            </div>
        </div>
    )
}

export default CategoryPosts