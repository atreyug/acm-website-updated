import React, { useRef, useEffect } from 'react';
import { BlogPost } from '../types/blog';
import { X } from 'lucide-react';

interface BlogDialogProps {
  blog: BlogPost;
  isOpen: boolean;
  onClose: () => void;
}

const BlogDialog: React.FC<BlogDialogProps> = ({ blog, isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        ref={dialogRef}
        onMouseEnter={() => clearTimeout((dialogRef.current as any)?.hoverTimeout)}
        onMouseLeave={() => {
          const timeout = setTimeout(() => {
            onClose();
          }, 200);
          (dialogRef.current as any).hoverTimeout = timeout;
        }}
        className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl max-h-[90vh] animate-scaleIn"
      >
        <div className="relative">
          <div className="h-64 w-full overflow-hidden">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white bg-opacity-80 text-[#001B48] p-2 rounded-full hover:bg-opacity-100 transition-all duration-200"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 16rem)' }}>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm font-medium text-[#018ABE] bg-[#D6EBEE] px-3 py-1 rounded">
              {blog.category}
            </span>
            <span className="text-sm text-gray-500">{blog.date}</span>
          </div>

          <h2 className="text-3xl font-bold text-[#001B48] mb-4">{blog.title}</h2>
          <p className="text-sm text-[#02457A] mb-6">By {blog.author}</p>

          <div
            className="prose prose-lg max-w-none text-gray-700 text-justify"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDialog;
