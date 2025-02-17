import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

const query = `*[_type == "blog" && slug.current == $slug][0] {
  title,
  slug,
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

interface Params {
  params: {
    slug: string;
  };
}

// Static params generation (for dynamic route)
export async function generateStaticParams() {
  const posts = await client.fetch('*[_type == "blog"]{slug}');
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }));
}

// Main page for dynamic blog post
const BlogPostPage = async ({ params }: Params) => {
  const { slug } = params;

  // Fetch post data based on the slug
  const post = await client.fetch(query, { slug });

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="bg-[#FCF8F3] min-h-screen">
      <header className=" bg-cover bg-center h-60 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3 space-y-8">
            <div className="flex flex-col md:flex-row-reverse items-start bg-white border rounded-md shadow-lg overflow-hidden">
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
                <p className="text-gray-600 mb-4">{post.content}</p>
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

export default BlogPostPage