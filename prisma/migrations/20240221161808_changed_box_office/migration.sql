/*
  Warnings:

  - The primary key for the `Boxoffice` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Boxoffice" (
    "movie_id" INTEGER NOT NULL,
    "Rating" REAL NOT NULL,
    "Domestic_sales" INTEGER NOT NULL,
    "International_sales" INTEGER NOT NULL
);
INSERT INTO "new_Boxoffice" ("Domestic_sales", "International_sales", "Rating", "movie_id") SELECT "Domestic_sales", "International_sales", "Rating", "movie_id" FROM "Boxoffice";
DROP TABLE "Boxoffice";
ALTER TABLE "new_Boxoffice" RENAME TO "Boxoffice";
CREATE UNIQUE INDEX "Boxoffice_movie_id_key" ON "Boxoffice"("movie_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
