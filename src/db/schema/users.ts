import { pgEnum, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const RoleEnum = pgEnum("roles", ["user", "admin"]);

const users = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 320 }).notNull().unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  role: RoleEnum("roles").default("user"),
  image: varchar("image", { length: 2048 }).notNull(),
});

export default users;
