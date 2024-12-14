function Header() {
    return (
      <header className="blog-header">
        <h1>My Awesome Blog</h1>
        <nav>
          <ul>
            <li>
              <a href="Home">Home</a>
            </li>
            <li>
              <a href="Blog">blog</a>
            </li>
            <li>
              <a href="NewPost">New Post</a>
            </li>
            <li>
              <a href="Profile">Profile</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;