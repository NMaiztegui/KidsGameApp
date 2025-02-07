PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS erronkas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    azalpena TEXT NOT NULL,
    testu_izkutua TEXT,
    mapa_irudia TEXT,
    testu_izkutua_id INTEGER NOT NULL 
);
INSERT OR IGNORE INTO erronkas (id, azalpena, testu_izkutua, mapa_irudia, testu_izkutua_id) VALUES (1, 'Erronka1', 'Testu izkutua1', 'https://www.google.com', 1);

CREATE TABLE IF NOT EXISTS ariketas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    azalpena TEXT NOT NULL,
    id_erronka INTEGER NOT NULL,
    FOREIGN KEY (id_erronka) REFERENCES erronkas(id) ON DELETE CASCADE
);
INSERT OR IGNORE INTO ariketas (id, azalpena, id_erronka) VALUES (1, 'Ariketa1', 1);

CREATE TABLE IF NOT EXISTS argazkiaZuzenas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL,
    zuzena BOOLEAN NOT NULL
);
INSERT OR IGNORE INTO argazkiaZuzenas (id, url, zuzena) VALUES (1, 'https://www.google.com', 0);

CREATE TABLE IF NOT EXISTS Audioa(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    audioa TEXT NOT NULL,
    id_erronka INTEGER NOT NULL,
    id_ariketa INTEGER NOT NULL,
    FOREIGN KEY (id_erronka) REFERENCES Erronka(id) ON DELETE CASCADE,
    FOREIGN KEY (id_ariketa) REFERENCES Ariketa(id) ON DELETE CASCADE
);
INSERT OR IGNORE INTO Audioa (id, audioa, id_erronka, id_ariketa) VALUES (1, 'https://www.google.com', 1, 1);

CREATE TABLE IF NOT EXISTS AukeraZuzena(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    esaldia TEXT NOT NULL,
    zuzena BOOLEAN NOT NULL
);
INSERT OR IGNORE INTO AukeraZuzena (id, esaldia, zuzena) VALUES (1, 'Aukera1', 1);

CREATE TABLE IF NOT EXISTS Erantzunak(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    erantzuna TEXT NOT NULL,
    zuzena BOOLEAN NOT NULL,
    id_ariketa INTEGER NOT NULL,
    id_erronka INTEGER NOT NULL,
    FOREIGN KEY (id_ariketa) REFERENCES Ariketa(id) ON DELETE CASCADE,
    FOREIGN KEY (id_erronka) REFERENCES Erronka(id) ON DELETE CASCADE
);
INSERT OR IGNORE INTO Erantzunak (id, erantzuna, zuzena, id_ariketa, id_erronka) VALUES (1, 'Erantzuna1', 1, 1, 1);

CREATE TABLE IF NOT EXISTS Ordenatu(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    esaldia TEXT NOT NULL,
    posizioa INTEGER NOT NULL,
    id_ariketa INTEGER NOT NULL,
    FOREIGN KEY (id_ariketa) REFERENCES Ariketa(id) ON DELETE CASCADE
);
INSERT OR IGNORE INTO Ordenatu (id, esaldia, posizioa, id_ariketa) VALUES (1, 'Ordenatu1', 1, 1);

CREATE TABLE IF NOT EXISTS EsaldiaBete(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    hitza TEXT NOT NULL,
    posizioa INTEGER NOT NULL
);
INSERT OR IGNORE INTO EsaldiaBete (id, hitza, posizioa) VALUES (1, 'EsaldiaBete1', 1);

CREATE TABLE IF NOT EXISTS Funikularra(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL,
    objetua INTEGER NOT NULL,
    zuzena BOOLEAN NOT NULL 
);
INSERT OR IGNORE INTO Funikularra (id, url, objetua, zuzena) VALUES (1, 'https://www.google.com', 1, 1);

CREATE TABLE IF NOT EXISTS HizkiakBete(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    hizkia TEXT NOT NULL,
    posizioa INTEGER NOT NULL
);
INSERT OR IGNORE INTO HizkiakBete (id, hizkia, posizioa) VALUES (1, 'HizkiaBete1', 1);

CREATE TABLE IF NOT EXISTS Lokalizazioa(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    alt INTEGER NOT NULL,
    lat INTEGER NOT NULL,
    tokia_izena TEXT NOT NULL,
    id_erronka INTEGER NOT NULL,
    FOREIGN KEY (id_erronka) REFERENCES Erronka(id) ON DELETE CASCADE
);
INSERT OR IGNORE INTO Lokalizazioa (id, alt, lat, tokia_izena, id_erronka) VALUES (1, 1, 1, 'TokiaIzena1', 1);

CREATE TABLE IF NOT EXISTS ParekatzekoGaldera(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    aukera TEXT NOT NULL,
    erlazioa INTEGER NOT NULL
);
INSERT OR IGNORE INTO ParekatzekoGaldera (id, aukera, erlazioa) VALUES (1, 'ParekatzekoGaldera1', 1);

CREATE TABLE IF NOT EXISTS MutikoaJantzi(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL,
    objetua TEXT NOT NULL,
    zuzena BOOLEAN NOT NULL
);
INSERT OR IGNORE INTO MutikoaJantzi (id, url, objetua, zuzena) VALUES (1, 'https://www.google.com', 'Objetua1', 1);
