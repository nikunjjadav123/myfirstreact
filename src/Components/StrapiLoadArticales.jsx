import React, { useState, useEffect } from 'react';

function StrapiLoadArticales() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/articles')
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div className="App">
      <h1>Articles</h1>
      {articles.map(article => (
        <div key={article.id}>
          <h2>{article.Title}</h2>
          <p>{article.Auther}</p>
        </div>
      ))}
    </div>
  );
}

export default StrapiLoadArticales;
