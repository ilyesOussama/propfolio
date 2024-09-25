import Link from "next/link";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { IconBuildingBank } from "@tabler/icons-react";
import { eq } from "drizzle-orm";

import db from "@/db";
import { markets, states } from "@/db/schema";

export default async function Home() {
  const results = await db
    .select()
    .from(markets)
    .innerJoin(states, eq(markets.stateId, states.id))
    .execute();

  return (
    <main className="mx-auto mt-4 max-w-7xl">
      <h1>Markets</h1>
      <div className="flex flex-col gap-4">
        {results.map(({ markets, states }) => (
          <Link key={markets.id} href={`/markets/${markets.slug}`}>
            <Card>
              <CardHeader>
                <IconBuildingBank />
              </CardHeader>
              <CardBody>
                {markets.city}
                {states.name}
                {markets.msa}
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
