import React, { useRef, useState } from 'react';
import '../styles/stories.css'; //not creating another css

function Grid() {
  const [posts, setPosts] = useState(Array(9).fill(null)); // all posts are empty, so thatuser can add accordingly
  const fileInputRef = useRef(null); 
  const [selectedIndex, setSelectedIndex] = useState(null); //to track which index is being edited

  
  const handleAddClick = (index) => {
    setSelectedIndex(index);
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && selectedIndex !== null) {
      const imageUrl = URL.createObjectURL(file);
      const newPosts = [...posts];
      newPosts[selectedIndex] = imageUrl;
      setPosts(newPosts);
    }
  };

  const handleDeletePhoto = (index) => {
  const newPosts = [...posts];
  newPosts[index] = null; // delete function = set back to empty
  setPosts(newPosts);
};

  
return (
  <div className="grid-container">
    {posts.map((post, index) => (   //maps thru all 9 posts
      
      <div key={index} className="grid-post">  
        {post ? ( //if post, show it with delete button
          <div className="post-container">
            <img src={post} alt="Uploaded" /> 
            <button className="delete-btn" onClick={() => handleDeletePhoto(index)}>×</button>
          </div>
        ) : ( //but if no post, show add button (i love if else statements)
          <button onClick={() => handleAddClick(index)}>+</button>
        )}
      </div> 
    ))}      
    
    <input 
      type="file"
      accept="image/*"
      ref={fileInputRef}
      style={{ display: 'none' }}
      onChange={handleFileChange}
    />
  </div>
);
}
export default Grid;