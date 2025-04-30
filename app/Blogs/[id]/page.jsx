'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import DOMPurify from 'isomorphic-dompurify';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { rawBlogs } from '../data';

export default function BlogDetail() {
  const { id } = useParams();            // Next.js injects the dynamic segment here
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    // 1) Look up the post by its `id`
    const found = rawBlogs.find((b) => b.id === id);
    if (found) {
      setBlog({
        ...found,
        createdAt: new Date(found.createdAt),
        content: DOMPurify.sanitize(found.content),
      });
    }

    // 2) Build a “Recent Blogs” list (5 newest)
    const sorted = rawBlogs
      .map((b) => ({ ...b, createdAt: new Date(b.createdAt) }))
      .sort((a, b) => b.createdAt - a.createdAt)
      .slice(0, 5);

    setRecentBlogs(sorted);
  }, [id]);

  if (!blog) {
    return <p className="text-center text-red-500">Blog not found!</p>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="col-span-2">
          <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
          {/* Medium Link */}
          {blog.medium && (
            <p className="text-sm mb-4">
              Medium:{' '}
              <a
                href={blog.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {blog.medium}
              </a>
            </p>
          )}
          <p className="text-sm text-gray-500 mb-4">
            {blog.createdAt.toLocaleDateString()} • {blog.author}
          </p>
          <article
            className="mt-4 text-gray-700 prose"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Sidebar: Recent posts */}
        <div>
          <h3 className="text-xl font-bold mb-4">Recent Blogs</h3>
          <ul className="space-y-2">
            {recentBlogs.map((b) => (
              <li key={b.id}>
                <a href={`/Blogs/${b.id}`} className="text-blue-600 hover:underline">
                  {b.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
