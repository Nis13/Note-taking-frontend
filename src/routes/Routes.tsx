import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import NotePage from "../pages/note/NotePage";
import NoteById from "../pages/note/view-note/ViewNote";
import Signup from "../pages/signup/Signup";

export const allRoutes = {
  publicRoutes: [
    { id: 1, path: "login", element: <Login /> },
    { id: 2, path: "signup", element: <Signup /> },
    { id: 3, path: "/", element: <Home /> },
  ],
  protectedRoutes: [
    { id: 4, path: "/note", element: <NotePage /> },
    { id: 5, path: "/note/:id", element: <NoteById /> },
  ],
};
