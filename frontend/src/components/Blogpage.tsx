interface Blog {
  content: string;
  title: string;
  id: string;
  author: {
    name: string;
  };
}

export const Blogpage = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <div className="flex justify-center p-4">
        {/* Use responsive grid layout */}
        <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8 py-8">
          {/* Main content area - takes 8 columns on medium screens and up */}
          <div className="md:col-span-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 break-words">
              {blog.title}
            </h1>
            <p className="text-gray-600 text-sm mb-6">
              Posted on April 1, 2025 by{" "}
              <span className="font-semibold">
                {blog.author.name || "Anonymous"}
              </span>
            </p>
            <div className="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>

          {/* Author/sidebar area - takes 4 columns on medium screens and up */}
          <div className="md:col-span-4">
            <div className="sticky top-20 bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Author</h3>
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-8 overflow-hidden bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-lg text-gray-700">
                    {blog.author.name ? blog.author.name[0].toUpperCase() : "A"}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {blog.author.name || "Anonymous"}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {/* Placeholder for author's bio or description */}A
                    passionate writer who loves to share insights on various
                    topics.
                  </p>
                </div>
              </div>
              {/* You can add more author details or related content here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
