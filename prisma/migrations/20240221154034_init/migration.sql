-- CreateTable
CREATE TABLE "Movies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Title" TEXT NOT NULL,
    "Director" TEXT NOT NULL,
    "Year" INTEGER NOT NULL,
    "Length_minutes" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Movies_Title_key" ON "Movies"("Title");
