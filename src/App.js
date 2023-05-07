import React, { useEffect, useState } from 'react';
import { Routes, Route,  BrowserRouter, Link } from "react-router-dom";
import './App.css';
import { 
  getAllPosts
 } from './api/helpers';
import {
  Header,
  Footer,
  Posts,
  ListingForm
} from "./components"

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts()
    .then((posts) => {
      setPosts(posts);
    })
    .catch((e) => {
      console.error('Faile to load Posts')
    });
  }, [setPosts])

  console.log(posts)

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/create">Create Listing</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Posts posts={posts} />} />
          <Route path="/create" element={<ListingForm />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
  
}

export default App;
