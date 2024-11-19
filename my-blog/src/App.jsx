import './App.css'
import Header from './components/Header'
import BlogList from './components/BlogList/BlogList'
import { posts } from './data/posts'
import PostEditor from './components/PostEditor/PostEditor'
//import RichTextEditor from './components/RichTextEditor/RichTextEditor'

function App() {
  

  return (
    <>
   <div className="app">
      <Header />
      <main>
        <h2>Welcome to my blog!</h2>
        <p>This is my first React component.</p>
      </main>
    </div>
    <div className="app">
      <main className="main-content">
        <PostEditor />
        <BlogList posts={posts} />
      </main>
    
    </div>

    </>
  )
}

export default App
