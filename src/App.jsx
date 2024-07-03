import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home  from'./Home'
import NewPost from'./NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from'./Missing'
import { Route,Routes} from "react-router";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { useEffect } from 'react'
import Nav from './Nav'


function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Home/>
      <NewPost/>
      <PostPage/>
      <About/>
      <Missing/>
      <Footer/>

      
    </div>
  )
}

export default App
