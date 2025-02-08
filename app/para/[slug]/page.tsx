
// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';
// import { FaCalendarAlt, FaUser } from 'react-icons/fa';
// import { PortableText } from '@portabletext/react';

// const query = `*[_type == "blog" && slug.current == $slug][0] {
//   title,
//   slug,
//   date,
//   author,
//   content,
//   "imageUrl": image.asset->url
// }`;

// interface BlogPost {
//   title: string;
//   slug: { current: string };
//   date: string;
//   author: string;
//   content: any; // Portable Text content
//   imageUrl: string;
// }

// interface Params {
//   params: {
//     slug?: string;
//   };
// }

// // Static params generation
// export async function generateStaticParams() {
//   const posts = await client.fetch('*[_type == "blog"]{slug}');
//   return posts.map((post: { slug: { current: string } }) => ({
//     slug: post.slug.current,
//   }));
// }

// // Blog Post Page
// const BlogPostPage = async ({ params }: Params) => {
//   const { slug } = params;

//   if (!slug) {
//     return <p className="text-center text-red-500">Invalid post URL</p>;
//   }

//   const post: BlogPost | null = await client.fetch(query, { slug });

//   if (!post) {
//     return <p className="text-center text-gray-500">Post not found</p>;
//   }

//   return (
//     <div className="bg-[#FCF8F3] min-h-screen">
//       {/* Header */}
//       <header className="bg-cover bg-center h-60 flex items-center justify-center">
//         <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-6 py-12">
//         <div className="flex flex-col lg:flex-row gap-12">
//           <div className="w-full lg:w-2/3 space-y-8">
//             <div className="flex flex-col md:flex-row-reverse items-start bg-white border rounded-md shadow-lg overflow-hidden">
//               <div className="relative w-full md:w-1/3 h-60">
//                 <Image
//                   src={post.imageUrl}
//                   alt={post.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-md"
//                 />
//               </div>
//               <div className="p-4 md:w-2/3">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
//                 <div className="flex items-center text-gray-500 text-sm mb-4">
//                   <FaCalendarAlt className="mr-2" />
//                   <span>{new Date(post.date).toLocaleDateString()}</span>
//                   <FaUser className="ml-4 mr-2" />
//                   <span>{post.author}</span>
//                 </div>
//                 <div className="text-gray-600 mb-4">
//                   <PortableText value={post.content} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white py-6">
//         <div className="container mx-auto text-center">
//           <p className="text-gray-600">© 2024 Furniro. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default BlogPostPage;
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { PortableText } from '@portabletext/react';

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
  content: any; // Portable Text content
  imageUrl: string;
}

interface Params {
  slug: string;
}

// Static params generation
export async function generateStaticParams(): Promise<Params[]> {
  const posts = await client.fetch<{ slug: { current: string } }[]>('*[_type == "blog"]{slug}');
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

// Blog Post Page
const BlogPostPage = async ({ params }: { params: Params }) => {
  const { slug } = params;

  if (!slug) {
    return <p className="text-center text-red-500">Invalid post URL</p>;
  }

  const post: BlogPost | null = await client.fetch<BlogPost | null>(query, { slug });

  if (!post) {
    return <p className="text-center text-gray-500">Post not found</p>;
  }

  return (
    <div className="bg-[#FCF8F3] min-h-screen">
      {/* Header */}
      <header className="bg-cover bg-center h-60 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3 space-y-8">
            <div className="flex flex-col md:flex-row-reverse items-start bg-white border rounded-md shadow-lg overflow-hidden">
              <div className="relative w-full md:w-1/3 h-60">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />
              </div>
              <div className="p-4 md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <FaUser className="ml-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="text-gray-600 mb-4">
                  <PortableText value={post.content} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2024 Furniro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPostPage;
