import { useState } from "react";
import { Upload, Send, Sparkles, CheckCircle } from "lucide-react";

export default function Form() {
  const [formData, setFormData] = useState({
    author: "",
    date: "",
    category: "",
    title: "",
    excerpt: "",
    content: "",
  });

  const [image, setImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Form data submitted:", formData);
    console.log("Image file submitted:", image);

    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setFormData({
        author: "",
        date: "",
        category: "",
        title: "",
        excerpt: "",
        content: "",
      });
      setImage(null);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-radial-gradient-light flex items-center justify-center py-16 px-4">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[url('C:/Users/Lenovo/Downloads/your-image.jpg')] bg-cover bg-center opacity-10 z-0"></div>

      {/* Foreground Form */}
      <div className="relative z-10 w-full max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-[#97CADB]/20 animate-fade-in-up form-card-pattern">
        {isSubmitted ? (
          <div className="text-center">
            <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#001B48] mb-2">Success!</h2>
            <p className="text-[#02457A] mb-4">Your blog post has been submitted successfully.</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-gradient-to-r from-[#02457A] to-[#018ABE] h-2 rounded-full animate-pulse"></div>
            </div>
            <p className="text-sm text-gray-600">Redirecting you back to the form...</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#02457A] to-[#018ABE] text-white px-4 py-2 rounded-full mb-4">
                <Sparkles size={16} />
                <span className="text-sm font-medium">Create Content</span>
              </div>
              <h1 className="text-4xl font-extrabold text-gradient mb-2">Share Your Story</h1>
              <p className="text-[#02457A] text-lg leading-relaxed">Create and submit your blog post to our community</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[{ label: "Author", name: "author", type: "text", icon: "👤", placeholder: "Your name" },
                  { label: "Date", name: "date", type: "date", icon: "📅", placeholder: "" },
                  { label: "Category", name: "category", type: "text", icon: "🏷️", placeholder: "e.g., Technology, Design" },
                  { label: "Title", name: "title", type: "text", icon: "📝", placeholder: "Your blog title" }
                ].map((field) => (
                  <div key={field.name} className="group">
                    <label className="block font-semibold text-[#02457A] mb-2 group-hover:text-[#018ABE] transition-colors duration-300">
                      <span className="mr-2">{field.icon}</span>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={(formData as any)[field.name]}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border border-[#97CADB]/30 rounded-xl focus:border-[#018ABE] focus:ring-2 focus:ring-[#018ABE]/20 outline-none transition-all duration-300 hover:border-[#018ABE]/50 bg-white/80 backdrop-blur-sm"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              <div className="group">
                <label className="block font-semibold text-[#02457A] mb-2 group-hover:text-[#018ABE] transition-colors duration-300">
                  <span className="mr-2">📸</span>
                  Upload Image
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                    className="w-full p-4 border border-[#97CADB]/30 rounded-xl focus:border-[#018ABE] focus:ring-2 focus:ring-[#018ABE]/20 outline-none transition-all duration-300 hover:border-[#018ABE]/50 bg-white/80 backdrop-blur-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#D6EBEE] file:text-[#02457A] hover:file:bg-[#97CADB]"
                  />
                  <Upload size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#97CADB] pointer-events-none" />
                </div>
                {image && (
                  <p className="text-sm text-[#018ABE] mt-2 font-medium">
                    ✓ {image.name} selected
                  </p>
                )}
              </div>

              <div className="group">
                <label className="block font-semibold text-[#02457A] mb-2 group-hover:text-[#018ABE] transition-colors duration-300">
                  <span className="mr-2">💭</span>
                  Excerpt
                </label>
                <input
                  type="text"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-[#97CADB]/30 rounded-xl focus:border-[#018ABE] focus:ring-2 focus:ring-[#018ABE]/20 outline-none transition-all duration-300 hover:border-[#018ABE]/50 bg-white/80 backdrop-blur-sm"
                  placeholder="A brief summary of your article"
                />
              </div>

              <div className="group">
                <label className="block font-semibold text-[#02457A] mb-2 group-hover:text-[#018ABE] transition-colors duration-300">
                  <span className="mr-2">📄</span>
                  Content
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={8}
                  required
                  className="w-full p-4 border border-[#97CADB]/30 rounded-xl focus:border-[#018ABE] focus:ring-2 focus:ring-[#018ABE]/20 outline-none transition-all duration-300 hover:border-[#018ABE]/50 resize-none bg-white/80 backdrop-blur-sm custom-scrollbar"
                  placeholder="Write your blog content here... Share your insights, experiences, and knowledge with the community."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#02457A] hover:bg-[#018ABE] text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Publishing...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Publish Article</span>
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
