import React, { useRef, useState } from 'react';
import '../styles/stories.css'; //not creating another css

function Grid() {
  const [posts, setPosts] = useState(Array(9).fill(null)); // all posts are empty, so thatuser can add accordingly
  const fileInputRef = useRef(null); 
  const [selectedIndex, setSelectedIndex] = useState(null); //to track which index is being edited

  
  const handleAddClick = (index) => { //when clicked on add btn
    setSelectedIndex(index); //selected index beocmes index of btn clicked
    fileInputRef.current.click(); //opens the dialogue where u can upload photo
  };

  const handleFileChange = (event) => { //when the file is selected
    const file = event.target.files[0]; //get that file
    if (file && selectedIndex !== null) { //if the file exists and selected index is not null
      const imageUrl = URL.createObjectURL(file); //we create url for that file
      const newPosts = [...posts]; //this means that we create a copy of posts array because we should not directly modify state
      newPosts[selectedIndex] = imageUrl; //the selected index in the new posts array becomes the image url we just created
      setPosts(newPosts); //then update the posts state with this new array
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