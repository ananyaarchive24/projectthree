import React, {useState, useEffect} from 'react';
import '../styles/stories.css';


//still a few bugs


// accepting prop from appjs to add journal entries from stories
function Stories({setJournalEntries}) { // each story will hv the title, an emoji, and a journalling prompt + a instagram like grdient which i made ai give me
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
  const [journalResponse, setJournalResponse] = useState(''); //what the user types as their journal response

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
    const nextIndex = currentStoryIndex + 1; // calculate the next index first
    setCurrentStoryIndex(nextIndex); // update the index
    setActiveStory(stories[nextIndex]); // set the active story using the calculated index
    
    // mark the new story as viewed when navigating to it
    if (!viewedStories.includes(stories[nextIndex].id)) {
      setViewedStories(prev => [...prev, stories[nextIndex].id]);
    }
  } else {
    setActiveStory(null); //this will close the stories if it is the last story
  }
};

const goToPrevStory = () => { 
  if (currentStoryIndex > 0) {
    const prevIndex = currentStoryIndex - 1; // calculate the previous index first
    setCurrentStoryIndex(prevIndex); // update the index
    setActiveStory(stories[prevIndex]); // set the active story using the calculated index
    
    // mark the new story as viewed when navigating to it, this is why the color wasnt changing before 
    if (!viewedStories.includes(stories[prevIndex].id)) {
      setViewedStories(prev => [...prev, stories[prevIndex].id]);
    }
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

//to save story replies to journal 
const saveToJournal = () => {
  if (journalResponse.trim() && activeStory) { //if response is not empty and there is an active story
    const newEntry = {
      id: Date.now(), //unique id
      title: `Your Response to ${activeStory.name}`,
      content: journalResponse, 
      date: new Date().toLocaleDateString(), //date of entry
      prompt: activeStory.prompt,
      type: 'story-response' //to differentiate from other journal entries
    };

    // connect to journal 
    setJournalEntries(prev => [...prev, newEntry]);
    console.log('New journal entry:', newEntry);
    alert('Response saved to journal! 📔');
    
    // Clear the input and close the story
    setJournalResponse('');
    setActiveStory(null);
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
              
        {/* input */}
<div 
  className="journal-response-bottom"
  // Stop clicks on the entire input area (now fixed)
  onClick={(e) => e.stopPropagation()}> 
                <input
                  placeholder="Answer the prompt..."
                  value={journalResponse}
                  onChange={(e) => setJournalResponse(e.target.value)}
                  className="response-input-bottom"
                  onFocus={(e) => e.stopPropagation()} // this'll prevent story navigation when typing or even if u click on the placeholder (but still not fixed)
        />
  <button 
    onClick={(e) => {
      e.stopPropagation(); // Very important - don't navigate story!
      saveToJournal();
    }}
    className="response-btn-send"
    disabled={!journalResponse.trim()}
  >
                  +
                </button>
              </div>
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
          <div className={`story-circle ${story.type === 'add' ? 'add-story' : ''} ${viewedStories.includes(story.id) ? 'viewed' : ''}`}>
            <span className="story-emoji">{story.emoji}</span>
          </div>
          <div className="story-name">{story.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Stories;