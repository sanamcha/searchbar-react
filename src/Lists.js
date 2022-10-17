import React from 'react';


const Lists = ({ filteredPosts }) =>{


    return (
        <div>
             <ul>
                {filteredPosts.map(post=>(
                <li key={post.id}>
                    {post.name}
                </li>
             ))}
      </ul>
        </div>
       

    )
}

export default Lists;