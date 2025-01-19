import React from 'react';

const Blogs = () => {
  const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        imageUrl: 'https://via.placeholder.com/50x50', // Add correct author image URL
      },
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1024/1*yBt65HhmARbqZDDJ1McFDg.png', // Add thumbnail image
    },
    {
      id: 2,
      title: 'How to use search engine optimization to drive sales',
      href: '#',
      description:
        'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      category: { title: 'Sales', href: '#' },
      author: {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: 'https://via.placeholder.com/50x50', // Add correct author image URL
      },
      imageUrl: 'https://www.rockitinteractive.com/wp-content/uploads/Blogging.png', // Add thumbnail image
    },
    {
      id: 3,
      title: 'Improve your customer experience',
      href: '#',
      description:
        'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas justo libero adipisci rem.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      category: { title: 'Business', href: '#' },
      author: {
        name: 'Tom Cook',
        role: 'Director of Product',
        imageUrl: 'https://via.placeholder.com/50x50', // Add correct author image URL
      },
      imageUrl: 'https://eternitymarketing.com/assets/image-cache/blog/How-to-Write-SEO-Friendly-Blogs-900x600px.2db26ef5.jpg', // Add thumbnail image
    },
    
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">From the blog</h2>
          <p className="mt-2 text-lg text-gray-600">Learn how to grow your business with our expert advice.</p>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-16 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <img src={post.imageUrl} alt={post.title} className="h-48 w-full rounded-lg object-cover" />
              <div className="mt-4">
                <time dateTime={post.datetime} className="text-sm text-gray-500">
                  {post.date}
                </time>
                <a href={post.category.href} className="ml-2 text-sm text-blue-600">
                  {post.category.title}
                </a>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                <a href={post.href}>{post.title}</a>
              </h3>
              <p className="mt-2 text-sm text-gray-600">{post.description}</p>
              <div className="mt-4 flex items-center">
                <img src={post.author.imageUrl} alt={post.author.name} className="h-10 w-10 rounded-full" />
                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-900">{post.author.name}</p>
                  <p className="text-sm text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
