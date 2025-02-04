
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaChevronRight } from 'react-icons/fa';

const query = `*[_type == "blog"] {
  title,
  slug {
    current
  },
  date,
  author,
  content,
  "imageUrl": image.asset->url
}`;

interface BlogPost {
  title: string;
  slug: { current: string };
  date: string;
  author: string;
  content: string;
  imageUrl: string;
}

export async function generateStaticParams() {
  const posts = await client.fetch(query);
  return posts.map((post: BlogPost) => ({
    slug: post.slug.current,
  }));
}

const BlogPage = async () => {
  const posts: BlogPost[] = await client.fetch(query);

  return (
    <div className="bg-[#FCF8F3] min-h-screen">
      <header className="bg-[url('/blog.png.png')] bg-cover bg-center h-60 flex items-center justify-center">
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main content */}
          <div className="w-full lg:w-2/3 space-y-8">
            {posts.map((post: BlogPost) => (
              <div key={post.slug.current} className="flex flex-col md:flex-row-reverse items-start bg-white border rounded-md shadow-lg overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full md:w-1/3 object-cover"
                  width={300}
                  height={300}
                />
                <div className="p-4 md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <FaCalendarAlt className="mr-2" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <FaUser className="ml-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {post.content.slice(0, 100)}...
                  </p>
                  <Link href={`/para/${post.slug.current}`} className="text-[#B88E2F] font-semibold">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 bg-white border rounded-md shadow-lg p-6">
            {/* Categories Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
              <ul className="space-y-2">
                {["Furniture", "Interior Design", "Tips & Tricks", "DIY Projects"].map((category, index) => (
                  <li key={index} className="flex items-center text-gray-600 hover:text-[#B88E2F] cursor-pointer">
                    <FaChevronRight className="mr-2" />
                    <span>{category}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Posts</h2>
              <ul className="space-y-4">
              
                {[
                  { title: "5 Tips for Choosing the Right Sofa", date: "Dec 5, 2024" },
                  { title: "Top Interior Design Trends for 2024", date: "Nov 28, 2024" },
                  { title: "How to Choose Durable Furniture", date: "Oct 15, 2024" },
                ].map((post, index) => (
                  <li key={index}>
                    <p className="text-gray-800 font-semibold hover:text-[#B88E2F] cursor-pointer">
                      {post.title}
                    </p>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Search Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Search</h2>
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full border p-2 rounded-md"
              />
            </div>

            {/* Tags Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {["Sofa", "Trendy", "Interior", "Design", "Durable", "Quality"].map((tag, index) => (
                  <span key={index} className="bg-[#FCF8F3] text-gray-600 px-3 py-1 rounded-full border text-sm hover:bg-[#B88E2F] hover:text-white cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2024 Furniro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
