import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React and TypeScript",
      excerpt: "A comprehensive guide to setting up your first React project with TypeScript for better developer experience.",
      date: "2024-01-15",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "The Art of Clean Code",
      excerpt: "Principles and practices for writing maintainable, readable, and efficient code that stands the test of time.",
      date: "2024-01-10",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Building Scalable Applications",
      excerpt: "Architecture patterns and best practices for creating applications that can grow with your user base.",
      date: "2024-01-05",
      readTime: "12 min read",
    },
  ];

  return (
    <main className="min-h-screen py-16 md:py-24 px-5 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Thoughts on software development, technology, and life.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group border-b border-border pb-8 last:border-b-0"
            >
              <Link to={`/blog/${post.id}`} className="block">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <time>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
