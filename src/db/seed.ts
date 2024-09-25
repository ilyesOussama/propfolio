import db from "@/db";
import { markets, states } from "@/db/schema";

const stateData = [
  { name: "Texas" },
  { name: "North Carolina" },
  { name: "Idaho" },
  { name: "Tennessee" },
  { name: "Arizona" },
  { name: "Florida" },
  { name: "Colorado" },
  { name: "Utah" },
  { name: "Washington" },
  { name: "Nevada" },
  { name: "California" },
  { name: "Alabama" },
  { name: "Indiana" },
  { name: "Michigan" },
  { name: "Ohio" },
  { name: "New York" },
  { name: "Missouri" },
  { name: "Wisconsin" },
  { name: "Pennsylvania" },
  { name: "Oklahoma" },
  { name: "Arkansas" },
  { name: "Mississippi" },
  { name: "Illinois" },
  { name: "Georgia" },
  { name: "Maryland" },
  { name: "Virginia" },
  { name: "Iowa" },
  { name: "South Carolina" },
  { name: "Louisiana" },
  { name: "West Virginia" },
  { name: "Nebraska" },
  { name: "Oregon" },
];

/* const marketMacrosFactorsConfigData = [
    { macro: "Job growth rate", category: "Economy", dataType: "decimal" },
    { macro: "Population growth rate", category: "Economy", dataType: "decimal" },
    { macro: "Unemployment rate", category: "Economy", dataType: "decimal" },
    { macro: "MSA Budget $millions", category: "Economy", dataType: "decimal" },
    { macro: "Infra Spend $millions", category: "Economy", dataType: "decimal" },
    { macro: "Moody Rating", category: "Economy", dataType: "varchar(4)" },
    { macro: "Net Migration", category: "Economy", dataType: "number" },
    { macro: "PF Economy rating", category: "Economy", dataType: "varchar(4)" },
    { macro: "Appreciation rate 2023", category: "Performance", dataType: "decimal" },
    { macro: "Appreciation rate (3 yrs)", category: "Performance", dataType: "decimal" },
    { macro: "Rental yield", category: "Performance", dataType: "decimal" },
    { macro: "Eviction Rate", category: "Performance", dataType: "decimal" },
    { macro: "Appreciation forecast", category: "Potential", dataType: "decimal" },
    { macro: "MSA budget growth", category: "Potential", dataType: "decimal" },
    { macro: "PF potential rating", category: "Potential", dataType: "varchar(4)" },
    { macro: "PF risks rating", category: "Risks", dataType: "varchar(4)" },
    { macro: "Property crime rate", category: "Risks", dataType: "decimal" },
    { macro: "Regulatory risk rating", category: "Risks", dataType: "number" },
    { macro: "Local market risk rating", category: "Risks", dataType: "number" },
  ];

  const marketMacrosFactorsData = [
    { marketSlug: "austin-round-rock-tx", macro: "Job growth rate", value: 2.5 },
    { marketSlug: "raleigh-cary-nc", macro: "Job growth rate", value: 3.1 },
    { marketSlug: "boise-city-id", macro: "Job growth rate", value: 4.0 },
    { marketSlug: "austin-round-rock-tx", macro: "Population growth rate", value: 1.8 },
    { marketSlug: "raleigh-cary-nc", macro: "Population growth rate", value: 2.2 },
    { marketSlug: "boise-city-id", macro: "Population growth rate", value: 2.5 },
    { marketSlug: "austin-round-rock-tx", macro: "Unemployment rate", value: 3.5 },
    { marketSlug: "raleigh-cary-nc", macro: "Unemployment rate", value: 3.2 },
    { marketSlug: "boise-city-id", macro: "Unemployment rate", value: 3.1 },
    { marketSlug: "austin-round-rock-tx", macro: "Appreciation rate 2023", value: 5.5 },
    { marketSlug: "raleigh-cary-nc", macro: "Appreciation rate 2023", value: 6.1 },
    { marketSlug: "boise-city-id", macro: "Appreciation rate 2023", value: 4.9 },
  ];
  const marketMacrosFactorsData = [
    { marketSlug: "austin-round-rock-tx", macro: "Job growth rate", value: 2.5 },
    { marketSlug: "raleigh-cary-nc", macro: "Job growth rate", value: 3.1 },
    { marketSlug: "boise-city-id", macro: "Job growth rate", value: 4.0 },
    { marketSlug: "austin-round-rock-tx", macro: "Population growth rate", value: 1.8 },
    { marketSlug: "raleigh-cary-nc", macro: "Population growth rate", value: 2.2 },
    { marketSlug: "boise-city-id", macro: "Population growth rate", value: 2.5 },
    { marketSlug: "austin-round-rock-tx", macro: "Unemployment rate", value: 3.5 },
    { marketSlug: "raleigh-cary-nc", macro: "Unemployment rate", value: 3.2 },
    { marketSlug: "boise-city-id", macro: "Unemployment rate", value: 3.1 },
    { marketSlug: "austin-round-rock-tx", macro: "Appreciation rate 2023", value: 5.5 },
    { marketSlug: "raleigh-cary-nc", macro: "Appreciation rate 2023", value: 6.1 },
    { marketSlug: "boise-city-id", macro: "Appreciation rate 2023", value: 4.9 },
  ]; 

  const marketFeaturesData = [
    { marketSlug: "austin-round-rock-tx", macro: "Job growth rate", description: "Austin has a strong tech-driven job market with a steady job growth rate." },
    { marketSlug: "raleigh-cary-nc", macro: "Population growth rate", description: "Raleigh-Cary is experiencing a population boom due to its growing tech sector." },
    { marketSlug: "boise-city-id", macro: "Unemployment rate", description: "Boise has a relatively low unemployment rate compared to national averages." },
    { marketSlug: "austin-round-rock-tx", macro: "Rental yield", description: "Rental yield in Austin has remained stable despite increasing property prices." },
    { marketSlug: "raleigh-cary-nc", macro: "Appreciation rate 2023", description: "Raleigh has seen a significant rise in property values over the last year." },
  ];

  const marketRankingData = [
    { marketSlug: "austin-round-rock-tx", globalRank: 1 },
    { marketSlug: "raleigh-cary-nc", globalRank: 2 },
    { marketSlug: "boise-city-id", globalRank: 3 },
    { marketSlug: "nashville-davidson-tn", globalRank: 4 },
    { marketSlug: "phoenix-az", globalRank: 5 },
    { marketSlug: "tampa-fl", globalRank: 6 },

  ]; */

async function seedMarkets() {
  await db.delete(markets);
  await db.delete(states);

  const stateInsertResult = await db
    .insert(states)
    .values(stateData)
    .returning({
      id: states.id,
      name: states.name,
    });

  const stateIdMap = stateInsertResult.reduce(
    (map, state) => {
      map[state.name] = state.id;
      return map;
    },
    {} as Record<string, number>
  );

  const marketData = [
    {
      city: "Austin",
      stateId: stateIdMap["Texas"],
      msa: "Austin-Round Rock TX MSA",
    },
    {
      city: "Raleigh",
      stateId: stateIdMap["North Carolina"],
      msa: "Raleigh-Cary NC MSA",
    },
    { city: "Boise", stateId: stateIdMap["Idaho"], msa: "Boise City ID MSA" },
    {
      city: "Nashville",
      stateId: stateIdMap["Tennessee"],
      msa: "Nashville-Davidson--Murfreesboro--Franklin TN MSA",
    },
    {
      city: "Phoenix",
      stateId: stateIdMap["Arizona"],
      msa: "Phoenix-Mesa-Scottsdale AZ MSA",
    },
    {
      city: "Tampa",
      stateId: stateIdMap["Florida"],
      msa: "Tampa-St. Petersburg-Clearwater FL MSA",
    },
    {
      city: "Charlotte",
      stateId: stateIdMap["North Carolina"],
      msa: "Charlotte-Concord-Gastonia NC-SC MSA",
    },
    {
      city: "Denver",
      stateId: stateIdMap["Colorado"],
      msa: "Denver-Aurora-Lakewood CO MSA",
    },
    {
      city: "Salt Lake City",
      stateId: stateIdMap["Utah"],
      msa: "Salt Lake City UT MSA",
    },
    {
      city: "Dallas",
      stateId: stateIdMap["Texas"],
      msa: "Dallas-Fort Worth-Arlington TX MSA",
    },
    {
      city: "Atlanta",
      stateId: stateIdMap["Georgia"],
      msa: "Atlanta-Sandy Springs-Roswell GA MSA",
    },
    {
      city: "Orlando",
      stateId: stateIdMap["Florida"],
      msa: "Orlando-Kissimmee-Sanford FL MSA",
    },
    {
      city: "San Antonio",
      stateId: stateIdMap["Texas"],
      msa: "San Antonio-New Braunfels TX MSA",
    },
    {
      city: "Las Vegas",
      stateId: stateIdMap["Nevada"],
      msa: "Las Vegas-Henderson-Paradise NV MSA",
    },
    {
      city: "Seattle",
      stateId: stateIdMap["Washington"],
      msa: "Seattle-Tacoma-Bellevue WA MSA",
    },
    {
      city: "Miami",
      stateId: stateIdMap["Florida"],
      msa: "Miami-Fort Lauderdale-West Palm Beach FL MSA",
    },
    {
      city: "Jacksonville",
      stateId: stateIdMap["Florida"],
      msa: "Jacksonville FL MSA",
    },
    {
      city: "Sacramento",
      stateId: stateIdMap["California"],
      msa: "Sacramento--Roseville--Arden-Arcade CA MSA",
    },
    {
      city: "Huntsville",
      stateId: stateIdMap["Alabama"],
      msa: "Huntsville AL MSA",
    },
    {
      city: "Indianapolis",
      stateId: stateIdMap["Indiana"],
      msa: "Indianapolis-Carmel-Anderson IN MSA",
    },
    {
      city: "Memphis",
      stateId: stateIdMap["Tennessee"],
      msa: "Memphis TN-MS-AR MSA",
    },
    {
      city: "Cleveland",
      stateId: stateIdMap["Ohio"],
      msa: "Cleveland-Elyria OH MSA",
    },
    {
      city: "Detroit",
      stateId: stateIdMap["Michigan"],
      msa: "Detroit-Warren-Dearborn MI MSA",
    },
    {
      city: "Birmingham",
      stateId: stateIdMap["Alabama"],
      msa: "Birmingham-Hoover AL MSA",
    },
    {
      city: "Buffalo",
      stateId: stateIdMap["New York"],
      msa: "Buffalo-Cheektowaga-Niagara Falls NY MSA",
    },
    {
      city: "Kansas City",
      stateId: stateIdMap["Missouri"],
      msa: "Kansas City MO-KS MSA",
    },
    {
      city: "St. Louis",
      stateId: stateIdMap["Missouri"],
      msa: "St. Louis MO-IL MSA",
    },
    {
      city: "Milwaukee",
      stateId: stateIdMap["Wisconsin"],
      msa: "Milwaukee-Waukesha-West Allis WI MSA",
    },
    {
      city: "Pittsburgh",
      stateId: stateIdMap["Pennsylvania"],
      msa: "Pittsburgh PA MSA",
    },
    {
      city: "Oklahoma City",
      stateId: stateIdMap["Oklahoma"],
      msa: "Oklahoma City OK MSA",
    },
    {
      city: "Little Rock",
      stateId: stateIdMap["Arkansas"],
      msa: "Little Rock-North Little Rock-Conway AR MSA",
    },
    { city: "Columbus", stateId: stateIdMap["Ohio"], msa: "Columbus OH MSA" },
    { city: "Tucson", stateId: stateIdMap["Arizona"], msa: "Tucson AZ MSA" },
    {
      city: "Cincinnati",
      stateId: stateIdMap["Ohio"],
      msa: "Cincinnati OH-KY-IN MSA",
    },
    { city: "Toledo", stateId: stateIdMap["Ohio"], msa: "Toledo OH MSA" },
    { city: "Akron", stateId: stateIdMap["Ohio"], msa: "Akron OH MSA" },
    {
      city: "Rochester",
      stateId: stateIdMap["New York"],
      msa: "Rochester NY MSA",
    },
    {
      city: "Jackson",
      stateId: stateIdMap["Mississippi"],
      msa: "Jackson MS MSA",
    },
    { city: "Dayton", stateId: stateIdMap["Ohio"], msa: "Dayton OH MSA" },
    { city: "Peoria", stateId: stateIdMap["Illinois"], msa: "Peoria IL MSA" },
    {
      city: "Syracuse",
      stateId: stateIdMap["New York"],
      msa: "Syracuse NY MSA",
    },
    {
      city: "Baltimore",
      stateId: stateIdMap["Maryland"],
      msa: "Baltimore-Columbia-Towson MD MSA",
    },
    {
      city: "Albany",
      stateId: stateIdMap["New York"],
      msa: "Albany-Schenectady-Troy NY MSA",
    },
    {
      city: "Richmond",
      stateId: stateIdMap["Virginia"],
      msa: "Richmond VA MSA",
    },
    {
      city: "Macon",
      stateId: stateIdMap["Georgia"],
      msa: "Macon-Bibb County GA MSA",
    },
    {
      city: "Des Moines",
      stateId: stateIdMap["Iowa"],
      msa: "Des Moines-West Des Moines IA MSA",
    },
    {
      city: "Scranton",
      stateId: stateIdMap["Pennsylvania"],
      msa: "Scranton--Wilkes-Barre--Hazleton PA MSA",
    },
    {
      city: "Montgomery",
      stateId: stateIdMap["Alabama"],
      msa: "Montgomery AL MSA",
    },
    {
      city: "Augusta",
      stateId: stateIdMap["Georgia"],
      msa: "Augusta-Richmond County GA-SC MSA",
    },
    {
      city: "Winston-Salem",
      stateId: stateIdMap["North Carolina"],
      msa: "Winston-Salem NC MSA",
    },
    {
      city: "Athens",
      stateId: stateIdMap["Georgia"],
      msa: "Athens-Clarke County GA MSA",
    },
    {
      city: "Gainesville",
      stateId: stateIdMap["Florida"],
      msa: "Gainesville FL MSA",
    },
    {
      city: "Columbia",
      stateId: stateIdMap["Missouri"],
      msa: "Columbia MO MSA",
    },
    { city: "Lubbock", stateId: stateIdMap["Texas"], msa: "Lubbock TX MSA" },
    {
      city: "Baton Rouge",
      stateId: stateIdMap["Louisiana"],
      msa: "Baton Rouge LA MSA",
    },
    {
      city: "Tallahassee",
      stateId: stateIdMap["Florida"],
      msa: "Tallahassee FL MSA",
    },
    {
      city: "Knoxville",
      stateId: stateIdMap["Tennessee"],
      msa: "Knoxville TN MSA",
    },
    {
      city: "Fayetteville",
      stateId: stateIdMap["Arkansas"],
      msa: "Fayetteville-Springdale-Rogers AR-MO MSA",
    },
    {
      city: "Morgantown",
      stateId: stateIdMap["West Virginia"],
      msa: "Morgantown WV MSA",
    },
    {
      city: "Bloomington",
      stateId: stateIdMap["Indiana"],
      msa: "Bloomington IN MSA",
    },
    {
      city: "Columbia",
      stateId: stateIdMap["South Carolina"],
      msa: "Columbia SC MSA",
    },
    { city: "Waco", stateId: stateIdMap["Texas"], msa: "Waco TX MSA" },
    {
      city: "Champaign",
      stateId: stateIdMap["Illinois"],
      msa: "Champaign-Urbana IL MSA",
    },
    { city: "Eugene", stateId: stateIdMap["Oregon"], msa: "Eugene OR MSA" },
    {
      city: "Houston",
      stateId: stateIdMap["Texas"],
      msa: "Houston-The Woodlands-Sugar Land TX MSA",
    },
    {
      city: "Portland",
      stateId: stateIdMap["Oregon"],
      msa: "Portland-Vancouver-Hillsboro OR-WA MSA",
    },
    {
      city: "Chicago",
      stateId: stateIdMap["Illinois"],
      msa: "Chicago-Naperville-Elgin IL-IN-WI MSA",
    },
    {
      city: "Los Angeles",
      stateId: stateIdMap["California"],
      msa: "Los Angeles-Long Beach-Anaheim CA MSA",
    },
    {
      city: "San Diego",
      stateId: stateIdMap["California"],
      msa: "San Diego-Carlsbad CA MSA",
    },
    {
      city: "Omaha",
      stateId: stateIdMap["Nebraska"],
      msa: "Omaha-Council Bluffs NE-IA MSA",
    },
  ];

  const generateSlug = (city: string, stateId: number, msa: string) => {
    return `${city.toLowerCase()}-${stateId}-${msa}`
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const marketDataWithSlug = marketData.map((item) => ({
    ...item,
    slug: generateSlug(item.city, item.stateId, item.msa),
  }));

  await db.insert(markets).values(marketDataWithSlug);
}

/* async function seedAdditionalTables() {
    try {
      await db.insert(marketMacrosFactorsConfig).values(marketMacrosFactorsConfigData);
  
      await db.insert(marketMacrosFactors).values(marketMacrosFactorsData);
  
      await db.insert(marketFeatures).values(marketFeaturesData);
  
      await db.insert(marketRanking).values(marketRankingData);
  
      console.log("Additional tables seeded successfully.");
    } catch (error) {
      console.error("Error seeding additional tables:", error);
    }
  } */
async function seed() {
  try {
    await seedMarkets(); /* 
    await seedAdditionalTables(); */

    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
