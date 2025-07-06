import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types/blog';
import Hero from '../components/Hero';
import BlogGrid from '../components/BlogGrid';
import { Filter, Search, TrendingUp } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [displayedBlogs, setDisplayedBlogs] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [blogsToShow, setBlogsToShow] = useState<number>(6);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('http://localhost:8080/api/public/blogs');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
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

  useEffect(() => {
    let filtered = blogPosts;
    if (activeCategory) filtered = filtered.filter(blog => blog.category === activeCategory);
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.author.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query)
      );
    }
    setDisplayedBlogs(filtered.slice(0, blogsToShow));
  }, [blogPosts, activeCategory, searchQuery, blogsToShow]);

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  const hasMoreBlogs = displayedBlogs.length < blogPosts.filter(blog => {
    const matchCategory = !activeCategory || blog.category === activeCategory;
    const matchQuery = !searchQuery.trim() || blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || blog.author.toLowerCase().includes(searchQuery.toLowerCase()) || blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchQuery;
  }).length;

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#D6EBEE] bg-opacity-30">
        <div className="w-16 h-16 border-4 border-[#02457A] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-[#02457A] text-xl">Loading...</p>
      </div>
    );
  }


  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#D6EBEE] bg-opacity-30">
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
    <div className="min-h-screen bg-radial-gradient-light">
      <Hero />
      <section id="blog-content" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-[#97CADB]/30 rounded-full px-4 py-2 mb-4">
            <TrendingUp size={16} className="text-[#018ABE]" />
            <span className="text-sm font-medium text-[#02457A]">Featured Content</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Latest Articles</h2>
          <p className="text-lg text-[#02457A] max-w-2xl mx-auto leading-relaxed">
            Discover our most recent insights and stories from industry experts
          </p>
        </div>

        <div
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-[#97CADB]/20 shadow-lg animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#97CADB]" />
              <input
                type="text"
                placeholder="Search articles, authors, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#97CADB]/30 focus:border-[#018ABE] focus:ring-2 focus:ring-[#018ABE]/20 outline-none transition-all duration-300 bg-white/80"
              />
            </div>

            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="hidden lg:flex items-center gap-2 text-[#02457A] font-medium">
                <Filter size={16} />
                <span>Filter:</span>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === null
                      ? 'bg-[#02457A] text-white shadow-lg'
                      : 'bg-white/80 text-[#02457A] hover:bg-white border border-[#97CADB]/30'
                  }`}
                >
                  All ({blogPosts.length})
                </button>

                {categories.map(category => {
                  const count = blogPosts.filter(blog => blog.category === category).length;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeCategory === category
                          ? 'bg-[#02457A] text-white shadow-lg'
                          : 'bg-white/80 text-[#02457A] hover:bg-white border border-[#97CADB]/30'
                      }`}
                    >
                      {category} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <BlogGrid blogs={displayedBlogs} />
        </div>

        {displayedBlogs.length > 0 && hasMoreBlogs && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setBlogsToShow(prev => prev + 6)}
              className="bg-white hover:bg-gray-50 text-[#02457A] font-medium px-6 py-3 rounded-lg border border-[#97CADB] transition-colors"
            >
              Load More Articles
            </button>
          </div>
        )}

        {displayedBlogs.length === 0 && activeCategory !== null && (
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

        {displayedBlogs.length === 0 && activeCategory === null && (
          <div className="bg-white rounded-lg p-8 text-center mt-8">
            <p className="text-[#02457A] text-lg mb-4">No articles available at the moment. Please check back later!</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPage;
