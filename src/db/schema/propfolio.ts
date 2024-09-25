import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

/* 
export const macrosFactorsCategoriesEnum = pgEnum("macros_factors_categories", ["economy", "performance", "potential","risks"]); */

export const states = pgTable("states", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Markets Table
export const markets = pgTable(
  "markets",
  {
    id: serial("id").primaryKey(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    city: varchar("city", { length: 50 }).notNull(),
    stateId: integer("state_id").references(() => states.id),
    msa: varchar("msa", { length: 100 }).notNull(),
  },
  (table) => ({
    uniqueCityStateMsa: uniqueIndex("unique_city_state_msa").on(
      table.city,
      table.stateId,
      table.msa
    ),
  })
);

export const marketMacrosFactorsConfig = pgTable(
  "market_macros_factors_config",
  {
    id: serial("id").primaryKey(),
    macroFactorType: varchar("macro_factor_type", { length: 255 }).notNull(),
    category: varchar("category", { length: 255 }).notNull(),
    dataType: varchar("data_type", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  }
);

export const marketMacrosFactors = pgTable("market_macros_factors", {
  id: serial("id").primaryKey(),
  marketSlug: varchar("market_slug", { length: 255 }).notNull(),
  macroFactorType: varchar("macro_factor_type", { length: 255 }).notNull(),
  value: text("value").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const marketFeatures = pgTable("market_features", {
  id: serial("id").primaryKey(),
  marketSlug: varchar("market_slug", { length: 255 }).notNull(),
  macroFactorType: varchar("macro_factor_type", { length: 255 }).notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const marketRanking = pgTable("market_ranking", {
  id: serial("id").primaryKey(),
  marketSlug: varchar("market_slug", { length: 255 }).notNull().unique(),
  globalRank: integer("global_rank").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const employers = pgTable("employers", {
  id: serial("id").primaryKey(),
  ticker: varchar("ticker", { length: 10 }).notNull().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  totalUsEmployees: integer("total_us_employees"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const professions = pgTable("professions", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const marketEmployers = pgTable("market_employers", {
  id: serial("id").primaryKey(),
  marketSlug: varchar("market_slug", { length: 255 }).notNull(),
  ticker: varchar("ticker", { length: 10 }).notNull(),
  year: integer("year").notNull(),
  employeesCount: integer("employees_count").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const marketProfessions = pgTable("market_professions", {
  id: serial("id").primaryKey(),
  marketSlug: varchar("market_slug", { length: 255 }).notNull(),
  profession: varchar("profession", { length: 255 }).notNull(),
  year: integer("year").notNull(),
  employeesCount: integer("employees_count").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
