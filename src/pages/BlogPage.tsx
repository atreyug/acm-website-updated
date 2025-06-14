import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types/blog'; // Adjust the path based on your file structure
import Hero from '../components/Hero';
import BlogGrid from '../components/BlogGrid';
import { Filter } from 'lucide-react'; 

const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);  
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true); 
        setError(null);  
 
        const response = await fetch('http://localhost:8080/api/public/blogs'); 
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: BlogPost[] = await response.json();
        setBlogPosts(data);
      } catch (err: any) {  
        setError(err.message || 'Failed to fetch blog posts');
      } finally {
        setLoading(false); 
      }
    };

    fetchBlogPosts();
  }, []);  

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  const filteredBlogs = activeCategory
    ? blogPosts.filter(blog => blog.category === activeCategory)
    : blogPosts;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#D6EBEE] bg-opacity-30">
        <p className="text-[#02457A] text-xl">Loading blog posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#D6EBEE] bg-opacity-30">
        <p className="text-red-600 text-xl">Error: {error}</p>
        <button
          onClick={() => window.location.reload()} 
          className="ml-4 bg-[#02457A] hover:bg-[#001B48] text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#D6EBEE] bg-opacity-30">
      <Hero />

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#001B48] mb-2">Latest Articles</h2>
            <p className="text-[#02457A]">Discover our most recent insights and stories</p>
          </div>

          <div className="flex items-center mt-4 md:mt-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <div className="hidden md:flex items-center mr-4">
              <Filter size={16} className="text-[#02457A] mr-2" />
              <span className="text-[#02457A] font-medium">Filter:</span>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === null
                    ? 'bg-[#02457A] text-white'
                    : 'bg-white text-[#02457A] hover:bg-gray-100'
                }`}
              >
                All
              </button>

              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-[#02457A] text-white'
                      : 'bg-white text-[#02457A] hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <BlogGrid blogs={filteredBlogs} />
        </div>

        {filteredBlogs.length > 0 && (
          <div className="flex justify-center mt-12">
            <button className="bg-white hover:bg-gray-50 text-[#02457A] font-medium px-6 py-3 rounded-lg border border-[#97CADB] transition-colors">
              Load More Articles
            </button>
          </div>
        )}

        {filteredBlogs.length === 0 && activeCategory !== null && (  
          <div className="bg-white rounded-lg p-8 text-center mt-8">
            <p className="text-[#02457A] text-lg mb-4">No articles found in this category.</p>
            <button
              onClick={() => setActiveCategory(null)}
              className="bg-[#02457A] hover:bg-[#001B48] text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              View All Articles
            </button>
          </div>
        )}
         {filteredBlogs.length === 0 && activeCategory === null && (  
          <div className="bg-white rounded-lg p-8 text-center mt-8">
            <p className="text-[#02457A] text-lg mb-4">No articles available at the moment. Please check back later!</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPage;