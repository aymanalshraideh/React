import { useEffect,useState } from "react";
import PostList from "./postslist";
const Posts =()=>{
   
 const [checkAuth , setcheckAuth]=useState("false")

    const [posts , setPosts]=useState(null)
   
    const deletepost=(id)=>{
//    const neww=posts.filter(post=>post.id!=id)
//    setPosts(neww);

   
    }
    useEffect(()=>{
        //  console.log(posts);
        //  console.log('useEffect');
      fetch("https://jsonplaceholder.typicode.com/posts").then(response=>response.json().then(data=>{
        console.log(data)
        setPosts(data)
    }))
    },[checkAuth])
   return (
    <div className="container">

    {/* <button type="button" onClick={()=>setcheckAuth('true')} class="btn btn-danger">Danger</button>
 <h1>{checkAuth}</h1> */}
   <PostList  posts={posts} deletepost={deletepost}/></div>
   );


}
export default Posts;