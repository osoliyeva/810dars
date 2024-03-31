import { Button, CssBaseline } from '@mui/material';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Chats from './pages/Chats';
import Login from './pages/Login';
import ChatRoom from './pages/ChatRoom';


const router = createBrowserRouter([
  {
    path: "./",
    element: <App />,
  },
  {
    path: "/Chats",
    element: <Chats />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/chat-room/:id",
    element: <ChatRoom />,
  },

])



function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
