import React, {useState} from 'react';
import SearchBar from './SearchBar';
import { BrowserRouter  } from "react-router-dom";
// import Helper from './Helper'
import Lists from './Lists'
import './App.css';

const posts = [
  { id: '1', name: 'This first post is about React' },
  { id: '2', name: 'This next post is about Preact' },
  { id: '3', name: 'We have yet another React post!' },
  { id: '4', name: 'This is the fourth and final post' },
];

const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }

  return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
  });
};

function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '')
  const filteredPosts = filterPosts(posts, searchQuery);


  return (
    <div className="App">
      <BrowserRouter>
      {/* <Helper message={`${filteredPosts.length} posts`} /> */}
      
      <SearchBar 
      searchQuery={searchQuery} 
      setSearchQuery ={setSearchQuery}
      />
      <Lists filteredPosts ={ filteredPosts } />
      
      </BrowserRouter>
       
    </div>
  );
}





export default App;
