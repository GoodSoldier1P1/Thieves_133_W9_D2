import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Player from './Games/Player.tsx'
import Likes from './Likes/Likes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Player />
    <Likes ogLike={false} />
  </>
)
