import { useEffect, useState } from "react";
import { format } from "date-fns";

interface BlogPost {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const rssUrl = encodeURIComponent("https://silverdesert.substack.com/feed");
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.status !== "ok") {
          throw new Error("RSS feed could not be loaded");
        }
        
        const parsedPosts: BlogPost[] = data.items.map((item: any) => ({
          title: item.title || "",
          description: item.description || "",
          link: item.link || "",
          pubDate: item.pubDate || "",
          thumbnail: item.thumbnail || item.enclosure?.link || "",
        }));
        
        setPosts(parsedPosts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen py-16 md:py-24 px-5 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Thoughts on software development, technology, and life.
        </p>

        {loading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading posts...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-destructive">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="space-y-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group border-b border-border pb-8 last:border-b-0"
              >
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {post.thumbnail && (
                      <div className="md:w-32 md:flex-shrink-0">
                        <div className="relative aspect-video md:aspect-[3/2] overflow-hidden rounded-lg bg-muted">
                          <img
                            src={post.thumbnail}
                            alt={post.title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <time>
                          {post.pubDate && format(new Date(post.pubDate), "MMM dd, yyyy")}
                        </time>
                      </div>
                      <h2 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground line-clamp-3">
                        {post.description.replace(/<[^>]*>/g, "")}
                      </p>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
