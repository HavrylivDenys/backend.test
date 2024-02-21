-- CreateTable
CREATE TABLE "Boxoffice" (
    "movie_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Rating" REAL NOT NULL,
    "Domestic_sales" INTEGER NOT NULL,
    "International_sales" INTEGER NOT NULL
);
