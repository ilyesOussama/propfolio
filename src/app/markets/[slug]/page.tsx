import { eq } from "drizzle-orm";

import db from "@/db";
import { markets } from "@/db/schema";

export default async function Page({ params }: { params: { slug: string } }) {
  const results = await db
    .select()
    .from(markets)
    .where(eq(markets.slug, params.slug));

  return (
    <main className="mx-auto mt-4 max-w-7xl">
      <h1>Markets</h1>
      <div className="flex flex-col gap-4">
        {results.map(({ id, city, msa }) => (
          <div key={id}>
            {city}
            {msa}
          </div>
        ))}
      </div>
    </main>
  );
}
