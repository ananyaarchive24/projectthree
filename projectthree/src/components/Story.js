import React, {useState, useEffect} from 'react';
import '../styles/stories.css';
//still a few bugs
function Stories() { // each story will hv the title, an emoji, and a journalling prompt + a instagram like grdient which i made ai give me
  const stories = [
    { id: 1, name: "Your Story", type: "add", emoji: "+", gradient: "gradient-1" }, //this has nothing yet, but in the future i want it to have the option to upload
    { id: 2, name: "Gratitude", emoji: "🙏", prompt: "What's one small thing you're grateful for today?" , gradient: "gradient-2" },
    { id: 3, name: "Goals", emoji: "🎯", prompt: "What's one goal you're excited about?" , gradient: "gradient-3" },
    { id: 4, name: "Reflection", emoji: "💭", prompt: "What challenged you today?" , gradient: "gradient-4" },
    { id: 5, name: "Mindfulness", emoji: "🌿", prompt: "How are you really feeling right now?" , gradient: "gradient-5" },
    { id: 6, name: "Creativity", emoji: "🎨", prompt: "What inspired you recently?" , gradient: "gradient-6" },
    { id: 7, name: "Growth", emoji: "🌱", prompt: "What did you learn about yourself this week?" , gradient: "gradient-7" },
    { id: 8, name: "Dreams", emoji: "✨", prompt: "What's your wildest dream?", gradient: "gradient-8" },
    { id: 9, name: "Hobbies", emoji: "🥳", prompt: "What are you passionate about, and why?", gradient: "gradient-8" },
  ];
  
  const [activeStory, setActiveStory] = useState(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0); //the position of the story
  const [viewedStories, setViewedStories] = useState([]); //how many stories were seen

  const handleStoryClick = (story) => { //when u click on a story
  const index = stories.findIndex(s => s.id === story.id); //to find index of the story u clicked
  setActiveStory(story); //sets the story as active story
  setCurrentStoryIndex(index); //current story index is the index of the story clicked just now
  
  // mark story as viewed
  if (!viewedStories.includes(story.id)) {
    setViewedStories([...viewedStories, story.id]);
  }
};


  const goToNextStory = () => { 
    if (currentStoryIndex < stories.length - 1) { //if u click on the right half of the stories, it goes forward
      setCurrentStoryIndex(currentStoryIndex + 1); // both update
      setActiveStory(stories[currentStoryIndex + 1]);
    } else {
      setActiveStory(null); //this will close the stories if it is the last story
    }
  };

  const goToPrevStory = () => { 
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
      setActiveStory(stories[currentStoryIndex - 1]);
    }
  };
    // used AI for this

    useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27) { // apparently 27 is ESC key
        setActiveStory(null);
      }
    };

    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []); 


  //to save story replies to journal (will do later)

  return (
    <div className="stories-container">
      {activeStory && (
        <div className="story-modal">

          <div
            className={`story-content ${activeStory.gradient}`}
            onClick={goToNextStory}
          >
                      <p>esc to close story</p>

            <div className="progress-bars">
              {stories.map((story, index) => (
                <div 
                  key={story.id} 
                  className={`progress-bar ${index <= currentStoryIndex ? 'active' : ''}`}
                ></div>
              ))}
            </div>


            <div 
              className="nav-area left" 
              onClick={(e) => { e.stopPropagation(); goToPrevStory(); }}
            ></div>

            <div className="story-prompt">
              <h2>{activeStory.emoji}</h2>
              <h3>{activeStory.prompt}</h3>
            </div>
          </div>
        </div>
      )}
      
      {stories.map(story => (
        <div 
          key={story.id} 
          className="story" 
          onClick={() => handleStoryClick(story)}
        >
<div className={`story-circle ${story.type === 'add' ? 'add-story' : ''} ${viewedStories.includes(story.id) ? 'viewed' : ''}`}>            <span className="story-emoji">{story.emoji}</span>
          </div>
          <div className="story-name">{story.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Stories;