CREATE TABLE IF NOT EXISTS ArgazkiaZuzena(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT,
    privatea BOOLEAN
);
INSERT or IGNORE INTO ArgazkiaZuzena (id, url, privatea) VALUES (1, 'https://www.google.com', 0);

CREATE TABLE IF NOT EXISTS Ariketa(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    azalpena TEXT,
    FOREIGN KEY id_erronka REFERENCES Erronka(id)
);
INSERT or IGNORE INTO Ariketa (id, azalpena, id_erronka) VALUES (1, 'Ariketa1', 1);

CREATE TABLE IF NOT EXISTS Audioa(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    audioa TEXT,
    FOREIGN KEY id_erronka REFERENCES Erronka(id),
    FOREIGN KEY id_ariketa REFERENCES Ariketa(id)
);
INSERT or IGNORE INTO Audioa (id, audioa, id_erronka, id_ariketa) VALUES (1, 'https://www.google.com', 1, 1);

CREATE TABLE IF NOT EXISTS AukeraZuzena(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    esaldia TEXT,
    zuzena BOOLEAN
);
INSERT or IGNORE INTO AukeraZuzena (id, esaldia, zuzena) VALUES (1, 'Aukera1', 1);

CREATE TABLE IF NOT EXISTS Erantzunak(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    erantzuna TEXT,
    zuzena BOOLEAN,
    FOREIGN KEY id_ariketa REFERENCES Ariketa(id),
    FOREIGN KEY id_erronka REFERENCES Erronka(id)
);
INSERT or IGNORE INTO Erantzunak (id, erantzuna, zuzena, id_ariketa, id_erronka) VALUES (1, 'Erantzuna1', 1, 1, 1);

CREATE TABLE IF NOT EXISTS Ordenatu(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    esaldia TEXT,
    posizioa number,
    FOREIGN KEY id_ariketa REFERENCES Ariketa(id)
);
INSERT or IGNORE INTO Ordenatu (id, esaldia, posizioa, id_ariketa) VALUES (1, 'Ordenatu1', 1, 1);

CREATE TABLE IF NOT EXISTS EsaldiaBete(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    hitza TEXT,
    posizioa number
);
INSERT or IGNORE INTO EsaldiaBete (id, hitza, posizioa) VALUES (1, 'EsaldiaBete1', 1);

CREATE TABLE IF NOT EXISTS Erronka(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    azalpena TEXT,
    testu_izkutua TEXT,
    mapa_irudia TEXT
);
INSERT or IGNORE INTO Erronka (id, azalpena, testu_izkutua, mapa_irudia) VALUES (1, 'Erronka1', 'Testu izkutua1', 'https://www.google.com');

CREATE TABLE IF NOT EXISTS Funikularra(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT,
    objetua number,
    zuzena BOOLEAN
);
INSERT or IGNORE INTO Funikularra (id, url, objetua, zuzena) VALUES (1, 'https://www.google.com', 1, 1);

CREATE TABLE IF NOT EXISTS HizkiakBete(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    hizkia TEXT,
    posizioa number
);
INSERT or IGNORE INTO HizkiakBete (id, hizkia, posizioa) VALUES (1, 'HizkiaBete1', 1);

CREATE TABLE IF NOT EXISTS Lokalizazioa(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    alt number,
    lat number,
    tokia_izena TEXT,
    FOREIGN KEY id_erronka REFERENCES Erronka(id)
);
INSERT or IGNORE INTO Lokalizazioa (id, alt, lat, tokia_izena, id_erronka) VALUES (1, 1, 1, 'TokiaIzena1', 1);

CREATE TABLE IF NOT EXISTS ParekatzekoGaldera(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    aukera TEXT,
    erlazioa number
);
INSERT or IGNORE INTO ParekatzekoGaldera (id, aukera, erlazioa) VALUES (1, 'ParekatzekoGaldera1', 1);

CREATE TABLE IF NOT EXISTS MutikoaJantzi(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT,
    objetua text,
    zuzena BOOLEAN
);
INSERT or IGNORE INTO MutikoaJantzi (id, url, objetua, zuzena) VALUES (1, 'https://www.google.com', 'Objetua1', 1);