import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function MalcolmCollins() {
  return (
    <main className="min-h-screen py-16 md:py-24 px-5 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/people"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to People
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Malcolm Collins
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Content coming soon...
          </p>
        </div>
      </div>
    </main>
  );
}
