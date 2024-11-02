-- CreateTable
CREATE TABLE "Artist" (
    "artist_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("artist_id")
);

-- CreateTable
CREATE TABLE "SongKey" (
    "key_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SongKey_pkey" PRIMARY KEY ("key_id")
);

-- CreateTable
CREATE TABLE "Song" (
    "song_id" SERIAL NOT NULL,
    "artist_id" INTEGER NOT NULL,
    "key_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "pdf_link" TEXT NOT NULL,
    "youtube_link" TEXT NOT NULL,
    "lyrics_link" TEXT NOT NULL,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("song_id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "tag_id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("tag_id")
);

-- CreateTable
CREATE TABLE "SongTags" (
    "song_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    CONSTRAINT "SongTags_pkey" PRIMARY KEY ("song_id","tag_id")
);

-- CreateTable
CREATE TABLE "SongsSet" (
    "set_id" SERIAL NOT NULL,
    "member" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SongsSet_pkey" PRIMARY KEY ("set_id")
);

-- CreateTable
CREATE TABLE "Presentation" (
    "set_id" INTEGER NOT NULL,
    "song_id" INTEGER NOT NULL,

    CONSTRAINT "Presentation_pkey" PRIMARY KEY ("set_id","song_id")
);

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artist"("artist_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_key_id_fkey" FOREIGN KEY ("key_id") REFERENCES "SongKey"("key_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongTags" ADD CONSTRAINT "SongTags_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "Song"("song_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongTags" ADD CONSTRAINT "SongTags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tag"("tag_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Presentation" ADD CONSTRAINT "Presentation_set_id_fkey" FOREIGN KEY ("set_id") REFERENCES "SongsSet"("set_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Presentation" ADD CONSTRAINT "Presentation_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "Song"("song_id") ON DELETE RESTRICT ON UPDATE CASCADE;
