import React, { useState, useEffect } from 'react';
import '../styles/news.css';

//used ai's help to figure out how to to work with apis since this is my first time
// my aim was to take data from the api and display it has the normal instagram feed we see
function NewsFeed() {
  const [articles, setArticles] = useState([]); //to store the articles we fetched from the api
  const [loading, setLoading] = useState(true); //loading state

  useEffect(() => {
    fetchNews(); //fetch the news
  }, []);

  const fetchNews = async () => {
    try {
      //the api key from g news
      const apiKey = 'cd2ad8c71751920b5fc8b0cda3d46565';
      //the full api url with our key, but only filtered to technology related news, and max is 10 for the free version but it might show less if there arent enough
      const apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&topic=technology&lang=en&max=10`;
      
      const response = await fetch(apiUrl); 
      const data = await response.json(); 
      setArticles(data.articles || []); //use an empty array if no articles
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false); //needs to stop loading in both scenarios -> whether successful or not
    }
  };

  // show a loading message while fetching data
  if (loading) {
    return (
      <div className="loading-message">
        👩‍💻 Loading your content...
      </div>
    );
  }

  // to actually display the main feed
return (
<div className="news-container"> 
    <h1>Suggested Posts</h1>
<div className="news-feed"> 
    
      {articles.map((article, index) => ( 
    <div key={index} className="news-card"> 

        <div className='news-header'>
            <div className='avatar'>💻</div>

            <div className='source-info'>
                <span className='source-name'>{article.source.name}</span>
                <span className="published-time">just now</span> 
            </div>
        </div>

        {/* now the image */}
        {article.image && (
            <div className="news-image">
                <img src={article.image} alt={article.title} />
            </div>
        )}

        {/* the like buttons and stuff to make it more instagram-like, not functional just for the ui */}
        <div className="news-actions">
            <button>❤️</button>
            <button>💬</button>
            <button>↗️</button>
            <button>🔖</button> {/* could build smth here that saved the post to journal entries */}
        </div>

        <h3>{article.title}</h3> {/* title of the article = h3 */}
        <p>{article.description}</p> {/* description = description of the instagram post */}
        <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className='read-more'
        >
            Read more
        </a>
    </div>
      ))}
</div>
</div>
  );
}

export default NewsFeed;