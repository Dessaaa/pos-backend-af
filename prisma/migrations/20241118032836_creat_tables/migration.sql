-- CreateTable
CREATE TABLE "autores" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100),
    "bio" TEXT NOT NULL,

    CONSTRAINT "autores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "livros" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(100),
    "resumo" TEXT NOT NULL,
    "autor_id" INTEGER,

    CONSTRAINT "livros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "senha" VARCHAR(100) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "livros" ADD CONSTRAINT "fk_autor" FOREIGN KEY ("autor_id") REFERENCES "autores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
