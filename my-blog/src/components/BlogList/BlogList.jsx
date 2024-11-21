import {useState} from "react";
import { useSearch } from "../../hooks/useSearch";
import { useFilters } from "../../hooks/useFilters";
import BlogSearch from "../BlogSearch/BlogSearch";
import BlogFilters from "../BlogFilters/BlogFilters";
import Pagination from "../Pagination/Pagination";
import PropTypes from "prop-types";
import BlogPost from "../BlogPost/BlogPost";

//import "./BlogList.css";

const POST_PER_PAGE = 2;

function BlogList({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    filters,
    handleFilterChange,
    filteredItems,
    categories,
    authors,
    allTags,
  } = useFilters(posts);

  const {
    searchTerm,
    handleSearch,
    results: searchResults,
    isSearching,
  } = useSearch(filteredItems);

  const displayedPosts = searchResults;
  const totalPages = Math.ceil(displayedPosts.length / POST_PER_PAGE);

  const currentPosts = displayedPosts.slice(
    (currentPage - 1) * POST_PER_PAGE,
    currentPage * POST_PER_PAGE
  );

  return (
    <>
    {/* <div className="blog-list">
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          title={post.title}
          content={post.content}
          author={post.author}
          date={post.date}
          readTime={post.readTime}
        />
      ))}
    </div> */}
    
    <div className="blog-list-container">
     <form> 
    <div className="blog-controls">
      <BlogSearch
        searchTerm={searchTerm}
        onSearch={handleSearch}
        resultCount={searchResults.length}
      />
      <BlogFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        categories={categories}
        authors={authors}
        allTags={allTags}
      />
      <input type='reset' value='Reset'></input>
    </div>
    </form>
    
    
    {currentPosts.length > 0 ? (
      <>
        <div className="blog-posts">
          {currentPosts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </>
    ) : (
      <div className="no-results">No posts found matching your criteria.</div>
    )}
  </div>
  
  </>
  );
}

BlogList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.required,
      title: PropTypes.string.required,
      content: PropTypes.string.required,
      author: PropTypes.string.required,
      date: PropTypes.string.required,
      readTime: PropTypes.number.required,
    })
  ).required,
};

export default BlogList;