import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
//import Home from "../pages/Home";
import BlogList from "../components/BlogList/BlogList.jsx";
import PostDetail from "../pages/PostDetail";
import NewPost from "../pages/NewPost";
//import EditPost from "../pages/EditPost";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound/NotFound.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      
      {
        path: "posts",
        children: [
          {
            index: true,
            element: <BlogList />,
          },
          {
            path: ":id",
            element: <PostDetail />,
          },
          {
            path: "new",
            element: <NewPost />,
          },
          {
            path: ":id/edit",
            element: <NewPost />,
          },
        ],
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default RouterNav