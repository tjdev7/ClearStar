import React from 'react';
import './App.css';

function NewsFeed() {
  return (
    <div>
      <header className="header-bar">
        <h1>ClearStar</h1>
      </header>
        <section>
          <ul>
               <li>
                 News title : <span className="news-url">working url</span> 
               </li>
          </ul>
        </section>

    </div>
  );
}

export default NewsFeed;