import React, { useState, useRef } from 'react';
import { BlogPost } from '../types/blog';
import BlogDialog from './BlogDialog';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  blog: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isHovered) {
      hoverTimeoutRef.current = window.setTimeout(() => {
        setIsHovered(false);
      }, 200);
    }
  };

  return (
    <div className="flex justify-center">
      <div
        className="group rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover-lift flex flex-col w-full max-w-md bg-white border border-[#97CADB]/20 animate-fade-in-up"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative overflow-hidden h-48">
          <img 
            src={blog.imageUrl || '/default-image.jpg'} 
            alt={blog.title || 'Blog post image'} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-[#02457A] border border-white/20">
              {blog.category}
            </span>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-[#001B48] mb-3 line-clamp-2 group-hover:text-[#02457A] transition-colors duration-300 leading-tight">
            {blog.title}
          </h3>
          
          <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed text-sm">
            {blog.excerpt}
          </p>
        </div>
        <div className="px-6 py-4 border-t border-[#97CADB]/20 bg-gray-50/50">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-[#02457A] font-medium">
              <User size={14} className="mr-2 text-[#97CADB]" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Calendar size={14} className="mr-2" />
              <span>{blog.date}</span>
            </div>
          </div>
        </div>
      </div>

      <BlogDialog blog={blog} isOpen={isHovered} onClose={() => setIsHovered(false)} />
    </div>
  );
};

export default BlogCard;