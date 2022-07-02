import React from 'react';

const PostList=({posts,deletepost})=>{

return(
    <>
    <div className="container">
<table className="table">
  <thead>
    <tr>
      
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
      <th>Delete</th>
    </tr>
  </thead>
 
    {posts && posts.map((post)=>(
       

  <tbody>
    <tr key={post.id}>
      
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.body}</td>
      <td><button type="button" onClick={()=>deletepost(post.id)} class="btn btn-danger">Danger</button>
</td>
    </tr>

  </tbody>



        // <h6>{post.id}</h6>
        // <h6>{post.title}</h6>
        // <p>{post.body}</p>
       
    ))}</table>
</div>
    </>
)


}
export default PostList;