import React, {useState} from 'react';
import '../styles/stories.css';

function Stories() {
  const stories = [
    { id: 1, name: "Your Story", type: "add", emoji: "+", gradient: "gradient-1" },
    { id: 2, name: "Gratitude", emoji: "🙏", prompt: "What's one small thing you're grateful for today?" , gradient: "gradient-2" },
    { id: 3, name: "Goals", emoji: "🎯", prompt: "What's one goal you're excited about?" , gradient: "gradient-3" },
    { id: 4, name: "Reflection", emoji: "💭", prompt: "What challenged you today?" , gradient: "gradient-4" },
    { id: 5, name: "Mindfulness", emoji: "🌿", prompt: "How are you really feeling right now?" , gradient: "gradient-5" },
    { id: 6, name: "Creativity", emoji: "🎨", prompt: "What inspired you recently?" , gradient: "gradient-6" },
    { id: 7, name: "Growth", emoji: "🌱", prompt: "What did you learn about yourself this week?" , gradient: "gradient-7" },
    { id: 8, name: "Dreams", emoji: "✨", prompt: "What's your wildest dream?", gradient: "gradient-8" },
    { id: 9, name: "Dreams", emoji: "✨", prompt: "What's your wildest dream?", gradient: "gradient-8" },
  ];
  
  const [activeStory, setActiveStory] = useState(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const goToNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      setActiveStory(stories[currentStoryIndex + 1]);
    } else {
      setActiveStory(null);
    }
  };

  const goToPrevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
      setActiveStory(stories[currentStoryIndex - 1]);
    }
  };


  const [viewedStories, setViewedStories] = useState([]);

const handleStoryClick = (story) => {
  const index = stories.findIndex(s => s.id === story.id);
  setActiveStory(story);
  setCurrentStoryIndex(index);
  
  // Mark story as viewed
  if (!viewedStories.includes(story.id)) {
    setViewedStories([...viewedStories, story.id]);
  }
};

  return (
    <div className="stories-container">
      {activeStory && (
        <div className="story-modal">
          <div 
            className={`story-content ${activeStory.gradient}`}
            onClick={goToNextStory}
          >
            <button className="close-btn" onClick={() => setActiveStory(null)}>×</button>
            
            <div className="progress-bars">
              {stories.map((story, index) => (
                <div 
                  key={story.id} 
                  className={`progress-bar ${index <= currentStoryIndex ? 'active' : ''}`}
                ></div>
              ))}
            </div>

            {/* Left side for previous story */}
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