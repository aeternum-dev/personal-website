import { Link } from "react-router-dom";

const activePeople = [
  { name: "Malcolm Collins", slug: "malcolm-collins" },
  { name: "John Anomaly", slug: "john-anomaly" },
  { name: "Clavicular", slug: "clavicular" },
  { name: "AellaGirl", slug: "aellagirl" },
];

const passivePeople = [
  { name: "Napoleon", slug: "napoleon" },
  { name: "Joseph Smith", slug: "joseph-smith" },
];

export default function People() {
  return (
    <main className="min-h-screen py-16 md:py-24 px-5 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">People</h1>
        
        {/* Active Index */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Active Index</h2>
          <ul className="space-y-3">
            {activePeople.map((person) => (
              <li key={person.slug}>
                <Link
                  to={`/people/${person.slug}`}
                  className="text-lg text-foreground hover:text-accent transition-colors underline"
                >
                  {person.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Passive Index */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Passive Index</h2>
          <ul className="space-y-3">
            {passivePeople.map((person) => (
              <li key={person.slug}>
                <Link
                  to={`/people/${person.slug}`}
                  className="text-lg text-foreground hover:text-accent transition-colors underline"
                >
                  {person.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
