import { useState, useEffect } from 'react'
import './App.css'
import Login from './pages/login/Login'
import IniPage from './pages/ini/IniPage'
import HomePage from './pages/home/HomePage'
import ExplorePage from './pages/explore/ExplorePage'
import NotificationsPage from './pages/notifications/NotificationsPage2'
import MessagesPage from './pages/messages/MessagesPage'
import ListsPage from './pages/lists/ListsPage'
import BookmarksPage from './pages/bookmarks/BookmarksPage'
import CommunitiesPage from './pages/communities/CommunitiesPage'
import PremiumPage from './pages/premium/PremiumPage'
import ProfilePage from './pages/profile/ProfilePage'
import MorePage from './pages/more/MorePage'
import { Show } from './pages/crud/Show'
import { Edit } from './pages/crud/Edit'
import { Create } from './pages/crud/Create'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {getAuth,onAuthStateChanged} from "firebase/auth"
import {appFirebase} from "./firebase/Conexion"



function App() {
  const [usuario,setUsuario]= useState(null);

useEffect(() => {
  const auth = getAuth(appFirebase);
  const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  return () => unsubscribe();
}, []);

  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/home" element={usuario ? <HomePage correoUsuario={usuario.email} /> : <IniPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route exact path="/notifications" element={<NotificationsPage />} />    
          <Route path="/messages" element={<MessagesPage />} />
          <Route exact path="/lists" element={<ListsPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />     
          <Route path="/communities" element={<CommunitiesPage />} />     
          <Route path="/premium" element={<PremiumPage />} />     
          <Route path="/profile" element={<ProfilePage />} />     
          <Route exact path="/more" element={<MorePage />} />
          <Route path="/show" element={<Show />} />
          <Route path="/edit/:id" element={<Edit />} /> 
          <Route path="/create" element={<Create />} /> 
        </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
