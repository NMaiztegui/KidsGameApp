PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS erronkas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    azalpena TEXT NOT NULL,
    testu_izkutua TEXT,
    mapa_irudia TEXT,
    testu_izkutua_id INTEGER NOT NULL 
);
INSERT OR IGNORE INTO erronkas (id, azalpena, testu_izkutua, mapa_irudia, testu_izkutua_id) VALUES (1, '<span class=’laranja’>Dolores</span> herri honen historia eta garrantzia oso ondo ezagutzen dituen andre bat da. <span class=’laranja’>Politikari espainiarra</span> izan zelako da ezaguna batez ere, baina hori alde batera utzita ondo ezagutzen zuen La Arboledako eta inguruko meatzaritzaren historia osoa. Izan ere, bere familia eta bere senarra herri honetako meategietan lan egiten zuten.
Gogoratu! <span class=’laranja’>meatzaritza lana Trapagarango elementu garrantzitsuenetako bat</span>  zela, eta bere senarra garai hartako meatzari ezaguna zenez, Doloresek asko ikasi ahal izan zuen lanbideari buruz. <span class=’laranja’>Meategietako langileen eskubideak defendatzera</span> ere iritsi zen, oso lan-baldintza txarretan lan egiten baitzuten.', 'Aspaldian, Trapagaran misteriotsuan, meatzari ausartak mendietan sartzen ziren altxor ezkutuak ateratzeko; hain zuzen, herriari bizia ematen zioten mineral distiratsuak.', '/assets/img/mapa1.png', 1);

INSERT OR IGNORE INTO erronkas (id, azalpena, testu_izkutua, mapa_irudia, testu_izkutua_id) VALUES (2, 'Aspaldian, Bizkaiko meategietan,<span class=’laranja’> meatzariek altzairuzko barrenak erabiltzen zituzten. Barrenak makila oso luzeak ziren.</span> Harkaitzetan zuloak egin, lehergailuak jarri eta horrela harriak puskatzeko erabiltzen zituzten. Pertsona horiei <span class=’laranja’>harrizulatzaile deitzen zitzaien.</span> 
1889an, Gallartan, harrizulatzaileen lehen lehia ospatu zen, non meatzariak zuloak azkarrago egiteko lehiatzen ziren. Jaietan ekintza hau egitea ohikoa zen ere.
Makinen etorreraren ondorioz, 1920ko hamarkadan harrizulatzaileak desagertu ziren arren, 1998an berreskuratu egin ziren tradizioari eusteko eta euskara sustatzeko. Gaur egun ezagunak dira, batez ere Bizkaiko Meatzaldean.', 'Herritarren artean, Dolores Ibarruri izeneko emakume berezi bat oso maitatua zen.', '/assets/img/mapa2.png', 2);

INSERT OR IGNORE INTO erronkas (id, azalpena, testu_izkutua, mapa_irudia, testu_izkutua_id) VALUES (3, 'Ba al dakizue greba bat zer den? Pertsona talde batek<span class=’laranja’> lan egiteari uztea eta protesta egitea </span> erabakitzen duenean da, beren lanean zerbait bidezkoa ez denean.
1890eko greba oso garrantzitsua izan zen Bizkaiko meatzeetako langileentzat. Maiatzaren 1ean, Langileen Nazioarteko Eguna, parte hartzeagatik La Orconera enpresako<span class=’laranja’> 5 meatzari kaleratu</span> zituzten. Nagusiak berriz kontratatzeari uko egin zionean, gainerako meatzariek bat egin zuten, 500 grebalari izatetik 8000 izatera igaroz.
Meategi eta lantegietan zehar ibili ziren hobekuntzak eskatuz. <span class=’laranja’>Loma izeneko jeneral</span> bat negoziatzera bidali zuten eta, meatzarien baldintza gogorrak ikusi ondoren, grebalariei lagundu zien. Horrela jaio zen <span class=’laranja’>"Loma Ituna",</span> bere bizitzak hobetu zituena.', 'Handik ez oso urrun, Gallartan, meatzariek lehia zirraragarria ospatzen zuten: altzairuzko barra izugarriekin zuloak egiten zituzten harkaitzetan! Nork azkarrago egiten zuen ikustea benetako ikuskizuna zen.', '/assets/img/mapa3.png', 3);

INSERT OR IGNORE INTO erronkas (id, azalpena, testu_izkutua, mapa_irudia, testu_izkutua_id) VALUES (4, 'Espainiako meatzaritzaren museorik zaharrena Gallartan</span>  dago, eta meatzari ohiek sortu zuten haien bizimodua, meatzaritza, inoiz ahaztu ez zedin.
Gaur egun museoak eskaintzen duen bisita gidatuari esker, meatzarien bizimodua, ustiatzeko teknikak eta garai hartako gizartea ezagutzeko aukera izango duzue.
Gainera, museo honek hainbat jarduera eskaintzen ditu, zeuek parte hartzeko eta meatzaritzaren esperientzia bizitzeko aukera izan dezazuen. Horrela, meatzariek eurek erabilitako <span class=’laranja’>babes-kaskoak</span>  eta Kontxa IIn erabilitako <span class=’laranja’>tontorrak</span>  zuen eskuekin hartu ahal izango dituzue. Zatozte museoa ezagutzera!', 'Makinak iritsi eta beren lekua hartu bazuten ere, tradizio horren emozioak bizirik dirau.', '/assets/img/mapa4.png', 4);

INSERT OR IGNORE INTO erronkas (id, azalpena, testu_izkutua, mapa_irudia, testu_izkutua_id) VALUES (5, '1926an funikularra izeneko <span class=’laranja’> garraiobide</span> berezi bat inauguratu zen, aldapa handiak igo eta jaisteko balio duena. Funikular horrek  <span class=’laranja’> Zugaztieta eta Trapagaran </span> lotzen zituen. Existitu baino lehen, jendeak ordu eta erdi behar izaten zuen ibilbide hori egiteko, baina funikularrarekin 10 minutu baino ez ziren behar!
Gainera, meatzarientzat oso garrantzitsua izan zen, bizitza errazagoa egiten zielako. Pertsonak ez ezik,<span class=’laranja’> mineralak eta ibilgailuak</span> ere garraiatzen zituen, eta horrek asko lagundu zien bere lanean, eta inguruko guztien bizitza hobetu zuen.', '1890ean, meatzariek euren unerik zailenetako bat bizi izan zuten. Greba handi bat hasi zen lankide batzuk bidegabeki kaleratu zituztenean. Baina ez zuten amore eman, eta azkenean, haien bizitzak hobetu zituen akordio bat irabazi zuten, Loma Ituna bezala ezaguna.', '/assets/img//mapa5.png', 5);

INSERT OR IGNORE INTO erronkas (id, azalpena, testu_izkutua, mapa_irudia, testu_izkutua_id) VALUES (6, 'Zugaztieta ez da jada meatzaritza gune bat eta aisialdirako leku bihurtu da, baina oraindik ere baditu iragana gogorarazten diguten elementuak, hala nola <span class=’laranja’> lurraren kolore gorrixkak, eskulturak eta bagoneta zaharrak</span>.
Aspaldi, erromatarren garaitik, bazekiten <span class=’laranja’>Zugaztietan mineralak zeudela</span>, baina Industria Iraultzan (makina berri asko asmatzen hasi ziren garaian), XIX. mendearen amaieran, askoz gehiago ateratzen hasi ziren. Urteak igaro ahala, meategiak ixten joan ziren, eta <span class=’laranja’>1993an ez zen bat ere zabalik geratu.</span>
Meatzeak itxi zituztenean, lur azpiko urak zulo horiek bete zituen eta <span class=’laranja’> lakuak sortu ziren, Ostion aintzira bezala.</span>', 'Gainera, funikularra, asmakizun harrigarria, agertu zen. Garraio magiko horrek Trapagarango jendea Zugaztietara eramaten zuen minutu gutxitan, bizitza askoz errazagoa eginez.', '/assets/img/mapa6.png', 6);

INSERT OR IGNORE INTO erronkas (id, azalpena, testu_izkutua, mapa_irudia, testu_izkutua_id) VALUES (7, 'Zugaztietako meategietan lan egiten zuten antzinako langileek babarrun asko jaten zituzten, baina <span class=’laranja’>babarrunak ez ziren gaur egun bezain ospetsuak.</span> Orain, Zugaztietako plan edo ospakizun ohikoenetako bat lagunekin edo familiarekin babarrunak jatera joatea da, tabernak eta jatetxeak jendez beteta egoten dira babarrunen eraginez. 
Babarrunak ematen dituzten taberna herriko plazan dago, eta bertan txorizoa, txerri saiheskia, Getxoko odolkia eta aza eta piparra erabiltzen dituzte babarrun goxo hauek prestatzeko. 
Zuek noizbait joan zarete <span class=’laranja’>Zugaztietako babarrunak </span> jatera? Probatu ez badituzue, animatzen zaituztegu egitera. Errepikatzeko gogoekin geratuko zarete eta, sinets iezaiguzue!', 'Gaur egun, meategiak itxita badaude ere, Zugaztieta leku berezia da oraindik. Aintzinako putzuak laku eder bihurtu ziren, eta familiak herrian hain gustuko dituzten babarrun gozoak jatera joaten dira.', '/assets/img/mapa/mapa7.png', 7);

INSERT OR IGNORE INTO erronkas (id, azalpena, testu_izkutua, mapa_irudia, testu_izkutua_id) VALUES (8 'Oso ondo egin duzue! Tamalez, bidaia honen amaierara iristen ari gara, eta ahalik eta ondoen amaitzeko, <span class=’laranja’>letra-zopa</span> bat egitea proposatzen dizuegu.', NULL, '/assets/img/mapa8.png', 8);

CREATE TABLE IF NOT EXISTS ariketas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    azalpena TEXT NOT NULL,
    id_erronka INTEGER NOT NULL,
    FOREIGN KEY (id_erronka) REFERENCES erronkas(id) ON DELETE CASCADE
);

INSERT OR IGNORE INTO ariketas (id, azalpena, id_erronka) VALUES (1, 'Kaixo! Erronka honetan Ibarrurik utzitako <span class=’laranja’>mezua deszifratu </span>beharko duzue, <span class=’laranja’>hutsune bakoitzean letra bat jarriz</span> bere esanahia osatzeko.', 1);

INSERT OR IGNORE INTO ariketas (id, azalpena, id_erronka) VALUES (2, 'Kaixo! Erronka honetan harri zulatzaileen <span class=’laranja’>inguruko 2 galdera erantzun beharko dituzue.</span>', 2);

INSERT OR IGNORE INTO ariketas (id, azalpena, id_erronka) VALUES (3, 'Ondorengo argazkietatik, zeinek erakusten du <span class=’laranja’>harrizulatzaile bat?</span>', 2);

INSERT OR IGNORE INTO ariketas (id, azalpena, id_erronka) VALUES (4, 'Zein da<span class=’laranja’> harrizulatzaile baten lana?</span><span class=’light’>Esaldia ordenatu</span>', 2);

INSERT OR IGNORE INTO ariketas (id, azalpena, id_erronka) VALUES (5, 'Zer da <span class=’laranja’>greba</span> bat?</span><span class=’light’>Aukeratu erantzun zuzena</span>', 3);

INSERT OR IGNORE INTO ariketas (id, azalpena, id_erronka) VALUES (6, 'Greba <span class=’laranja’>Bizkaiko 500 langileekin hasi </span> zen.</span><span class=’light’>Egia edo gezurra</span>', 3);

INSERT OR IGNORE INTO ariketas (id, azalpena, id_erronka) VALUES (7, 'Funtsezko  <span class=’laranja’>pertsonaiak eta gertaerak erlazionatu</span> <span class=’light’>Lotu</span>', 3);

INSERT OR IGNORE INTO ariketas (id, azalpena, id_erronka) VALUES (8, 'Argazki honetan agertzen den pertsonaia <span class=’laranja’>meatzariz mozorratu</span> nahi da. Zein <span class=’laranja’>elementu</span> erabiliko ditu?', 4);

INSERT OR IGNORE INTO ariketas (id, azalpena, id_erronka) VALUES (9, 'Zuen aurrean <span class=’laranja’>La Reinetako funikularra</span> duzue eta alboan hainbat elementuren argazkiak. Hauetako <span class=’laranja’> zein elementu garraiatzen zituzten antzinean funikularrean?</span> garraiazten zituzten elementuen argazkiak funikularreraino <span class=’laranja’>arrastratu</span> beharko dituzue.', 5);

INSERT OR IGNORE INTO ariketas (id, azalpena, id_erronka) VALUES (10, 'Jarduera honetan, esaldietan agertzen diren <span class=’laranja’>hutsuneak bete</span> beharko dituzue. Horretarako, goian agertzen diren <span class=’laranja’>hitzetatik egokia dena aukeratu </span> eta bere lekura arrastratu.', 6);


INSERT OR IGNORE INTO ariketas (id, azalpena, id_erronka) VALUES (11, 'Tabernako sukaldariei <span class=’laranja’>babarrunen errezetaren orriak jausi zaizkie</span>, eta desordenatu egin da errezeta. Azken erronka honetan babarrunak egiteko <span class=’laranja’>errezeta ordenatu beharko duzue</span>, babarrunak berriz prestatu ahal izateko.', 7);

INSERT OR IGNORE INTO ariketas (id, azalpena, id_erronka) VALUES (12, 'Zenbat <span class=’laranja’>hitz berri</span> ikasi dituzue gaur? Ikasitakoa frogatzeko aukera duzue orain.', 8);

CREATE TABLE IF NOT EXISTS argazkia_zuzenas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL,
    zuzena BOOLEAN NOT NULL
);
INSERT OR IGNORE INTO argazkia_zuzenas (id, url, zuzena) VALUES (1, '/assets/img/arrastre.png', 0);

INSERT OR IGNORE INTO argazkia_zuzenas (id, url, zuzena) VALUES (1, '/assets/img/harri_j.png', 0);


INSERT OR IGNORE INTO argazkia_zuzenas (id, url, zuzena) VALUES (1, '/assets/img/harri_z.png', 1);

CREATE TABLE IF NOT EXISTS audioas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    audioa TEXT NOT NULL,
    id_erronka INTEGER NOT NULL,
    id_ariketa INTEGER NOT NULL,
    FOREIGN KEY (id_erronka) REFERENCES erronkas(id) ON DELETE CASCADE,
    FOREIGN KEY (id_ariketa) REFERENCES ariketas(id) ON DELETE CASCADE
);
INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (1, '/assets/audio/aurkezpena1.m4a', 1, NULL);


INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (2, '/assets/audio/aurkezpena2.m4a', 2, NULL);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (3, '/assets/audio/aurkezpena3.m4a', 3, NULL);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (4, '/assets/audio/aurkezpena4.m4a', 4, NULL);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (5, '/assets/audio/aurkezpena5.m4a', 5, NULL);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (6, '/assets/audio/aurkezpena6.m4a', 6, NULL);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (7, '/assets/audio/aurkezpena7.m4a', 7, NULL);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (8, '/assets/audio/aurkezpena8.m4a', 8, NULL);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (9, '/assets/audio/erronka1.m4a', 1, 1);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (10, '/assets/audio/erronka2.m4a', 2, 2);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (11, '/assets/audio/erronka2.m4a', 2, 3);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (9, '/assets/audio/erronka2.m4a', 2, 4);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (9, '/assets/audio/erronka3.m4a', 3, 5);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (9, '/assets/audio/erronka3.m4a', 3, 6);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (9, '/assets/audio/erronka3.m4a', 3, 7);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (9, '/assets/audio/erronka4.m4a', 4, 8);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (9, '/assets/audio/erronka5.m4a', 5, 9);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (9, '/assets/audio/erronka6.m4a', 6, 10);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (9, '/assets/audio/erronka7.m4a', 7, 11);

INSERT OR IGNORE INTO audioas (id, audioa, id_erronka, id_ariketa) VALUES (9, '/assets/audio/amaierakoerronka.m4a', 8, 12);

CREATE TABLE IF NOT EXISTS aukera_zuzenas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    esaldia TEXT NOT NULL,
    zuzena BOOLEAN NOT NULL,
    id_ariketa INTEGER NOT NULL,
    FOREIGN KEY (id_ariketa) REFERENCES ariketas(id) ON DELETE CASCADE

);
INSERT OR IGNORE INTO aukera_zuzenas (id, esaldia, zuzena,id_ariketa) VALUES (1, 'Lan egiteari uztea protestan',1,5);

INSERT OR IGNORE INTO aukera_zuzenas (id, esaldia, zuzena,id_ariketa) VALUES (2, 'Jaiegun batean lana egitea',0,5);

INSERT OR IGNORE INTO aukera_zuzenas (id, esaldia, zuzena,id_ariketa) VALUES (3, 'Lan gehiago egitea',0,5);

INSERT OR IGNORE INTO aukera_zuzenas (id, esaldia, zuzena,id_ariketa) VALUES (4, 'Egiazkoa',1,6);

INSERT OR IGNORE INTO aukera_zuzenas (id, esaldia, zuzena,id_ariketa) VALUES (5, 'Gezurra',0,6);

CREATE TABLE IF NOT EXISTS erantzunaks(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    erantzuna TEXT NOT NULL,
    zuzena BOOLEAN NOT NULL,
    id_ariketa INTEGER NOT NULL,
    id_erronka INTEGER NOT NULL,
    FOREIGN KEY (id_erronka) REFERENCES erronkas(id) ON DELETE CASCADE,
    FOREIGN KEY (id_ariketa) REFERENCES ariketas(id) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS ordenatus(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    esaldia TEXT NOT NULL,
    posizioa INTEGER ,
    id_erronka INTEGER NOT NULL,
    FOREIGN KEY (id_erronka) REFERENCES erronkas(id) ON DELETE CASCADE
);
INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (1, 'Barrenak', NULL, 2);

INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (2, 'harkaitzetan', NULL, 2);

INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (3, 'zuloak', NULL, 2);

INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (4, 'egiten', NULL, 2);

INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (5, 'eta', NULL, 2);

INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (6, 'lehergailuak', NULL, 2);

INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (7, 'jarriz', NULL, 2);

INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (8, 'harriak', NULL, 2);

INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (9, 'puskatzeko', NULL, 2);

INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (10, 'erabiltzen', NULL, 2);

INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (11, 'zituzten', NULL, 2);

INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (12, '.', NULL, 2);

INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (13, 'Ziurtatu beharrezko material eta osagai guztiak dituzula. ', NULL, 7);

INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (14, 'Ura berotu.', NULL, 7);

INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (15, 'Babarrunak uretan bota.', NULL, 7);

INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (16, 'Babarrunak eginda daudenean, beste elikagaiak nahastu babarrunekin. ', NULL, 7);

INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (17, 'Itxaron hoztu arte', NULL, 7);

INSERT OR IGNORE INTO ordenatus (id, esaldia, posizioa, id_erronka) VALUES (18, 'Prest jateko!', NULL, 7);

CREATE TABLE IF NOT EXISTS esaldia_betes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    hitza TEXT NOT NULL,
    posizioa INTEGER 
);
INSERT OR IGNORE INTO esaldia_betes (id, hitza, posizioa) VALUES (1, 'gorrixka', NULL);

INSERT OR IGNORE INTO esaldia_betes (id, hitza, posizioa) VALUES (2, 'eskulturak', NULL);

INSERT OR IGNORE INTO esaldia_betes (id, hitza, posizioa) VALUES (3, 'bagoneta', NULL);

INSERT OR IGNORE INTO esaldia_betes (id, hitza, posizioa) VALUES (4, 'mineralak', NULL);

INSERT OR IGNORE INTO esaldia_betes (id, hitza, posizioa) VALUES (5, 'ateratzen', NULL);

INSERT OR IGNORE INTO esaldia_betes (id, hitza, posizioa) VALUES (6, '1993', NULL);

INSERT OR IGNORE INTO esaldia_betes (id, hitza, posizioa) VALUES (7, 'Ostion', NULL);

CREATE TABLE IF NOT EXISTS funikularras(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL,
    objetua TEXT NOT NULL,
    zuzena BOOLEAN NOT NULL 
);
INSERT OR IGNORE INTO funikularras (id, url, objetua, zuzena) VALUES (1, 'assets/img/funikular.jpg', 'funikularra', 1);

INSERT OR IGNORE INTO funikularras (id, url, objetua, zuzena) VALUES (2, 'assets/img/autoa.png', 'autoa', 1);

INSERT OR IGNORE INTO funikularras (id, url, objetua, zuzena) VALUES (3, 'assets/img/balea.jpg', 'balea', 0);

INSERT OR IGNORE INTO funikularras (id, url, objetua, zuzena) VALUES (4, 'assets/img/hegazkina.jpg', 'hegazkina', 0);

INSERT OR IGNORE INTO funikularras (id, url, objetua, zuzena) VALUES (5, 'assets/img/itsasontzia.png', 'itsasontzia', 0);

INSERT OR IGNORE INTO funikularras (id, url, objetua, zuzena) VALUES (6, 'assets/img/janaria.jpg', 'janaria', 1);

INSERT OR IGNORE INTO funikularras (id, url, objetua, zuzena) VALUES (7, 'assets/img/meatzaria.jpg', 'langileak', 1);

INSERT OR IGNORE INTO funikularras (id, url, objetua, zuzena) VALUES (8, 'assets/img/mineralak.jpg', 'mineralak', 1);

CREATE TABLE IF NOT EXISTS hizkiak_betes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text_hutsunea TEXT NOT NULL,
    text_osoa TEXT NOT NULL
);
INSERT OR IGNORE INTO hizkiak_betes (id, text_hutsunea, text_osoa) VALUES (1, 'Tx_kit_tik Tr_p_ga_anek_ m_ateg_etat_k mu_itu i_an na_z. Ni_e ha_rtzaro_ren zati_ik han_ien_ ing_ru hauet_n eman dut, f_mi_ia eta sen_rrare_in ego_eko. Horre_aiti_, her_i eta ingu_uko se_retu gehi_nak dakizkit. Ib_lbid_an zehar desku_ritzek_ pre_t zaud_te?', 'Txikitatik Trapagaraneko meategietatik mugitu izan naiz. Nire haurtzaroaren zatirik handiena inguru hauetan eman dut, familia eta senarrarekin egoteko. Horregaitik, herri eta inguruko sekretu gehienak dakizkit. Ibilbidean zehar deskubritzeko prest zaudete?');

CREATE TABLE IF NOT EXISTS lokalizazioas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lat DECIMAL(10,8) NOT NULL,
    long DECIMAL(11,8) NOT NULL,
    tokia_izena TEXT NOT NULL,
    id_erronka INTEGER NOT NULL,
    FOREIGN KEY (id_erronka) REFERENCES erronkas(id) ON DELETE CASCADE
);
INSERT OR IGNORE INTO lokalizazioas (id, lat, long, tokia_izena, id_erronka) VALUES (1, 43.3027548237599, -3.0336377921477373, 'Dolores Ibarruri Kalea', 1);

INSERT OR IGNORE INTO lokalizazioas (id,  lat, long, tokia_izena, id_erronka) VALUES (2, 43.30566570092055, -3.038216086031653, 'Lauaxeta plazan', 2);

INSERT OR IGNORE INTO lokalizazioas (id, lat, long, tokia_izena, id_erronka) VALUES (3, 43.30257946526296, -3.0379269306284584, 'La Orconera plaza', 3);

INSERT OR IGNORE INTO lokalizazioas (id,  lat, long, tokia_izena, id_erronka) VALUES (4, 43.312750975796455, -3.070344821812212, 'Euskal Herriko meatzaritzaren museoa', 4);

INSERT OR IGNORE INTO lokalizazioas (id,  lat, long, tokia_izena, id_erronka) VALUES (5, 43.2936099918257, -3.0488334363648195, 'La reinetako funikularra', 5);

INSERT OR IGNORE INTO lokalizazioas (id,  lat, long, tokia_izena, id_erronka) VALUES (6, 43.285488115532246, -3.052695817221527, 'Ostion Lakua (Mina Concha II)', 6);

INSERT OR IGNORE INTO lokalizazioas (id,  lat, long, tokia_izena, id_erronka) VALUES (7, 43.28561307568945, -3.0553565684783703, 'Casa Sabina tabernan', 7);


CREATE TABLE IF NOT EXISTS parekatzeko_galderas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    aukera TEXT NOT NULL,
    erlazioa INTEGER NOT NULL
);
INSERT OR IGNORE INTO parekatzeko_galderas (id, aukera, erlazioa) VALUES (1, 'Loma ', 4);

INSERT OR IGNORE INTO parekatzeko_galderas (id, aukera, erlazioa) VALUES (2, 'Maiatzaren ', 5);

INSERT OR IGNORE INTO parekatzeko_galderas (id, aukera, erlazioa) VALUES (3, 'Orconera ', 6);

INSERT OR IGNORE INTO parekatzeko_galderas (id, aukera, erlazioa) VALUES (4, 'Jeneral bat negoziatzera bidali zuten', 1);

INSERT OR IGNORE INTO parekatzeko_galderas (id, aukera, erlazioa) VALUES (5, 'Langileen Nazioarteko Eguna', 2);

INSERT OR IGNORE INTO parekatzeko_galderas (id, aukera, erlazioa) VALUES (6, 'Kaleratutako 5 meatzarien enpresa', 3);

CREATE TABLE IF NOT EXISTS mutikua_jantzis(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL,
    objetua TEXT NOT NULL,
    zuzena BOOLEAN NOT NULL
);
INSERT OR IGNORE INTO mutikua_jantzis (id, url, objetua, zuzena) VALUES (1, 'assets/img/mutikoa.png', 'mutikoa', 1);

INSERT OR IGNORE INTO mutikua_jantzis (id, url, objetua, zuzena) VALUES (2, 'assets/img/takoia.png', 'takoia', 1);

INSERT OR IGNORE INTO mutikua_jantzis (id, url, objetua, zuzena) VALUES (3, 'assets/img/caco.png', 'babes kaskoa', 1);

INSERT OR IGNORE INTO mutikua_jantzis (id, url, objetua, zuzena) VALUES (4, 'assets/img/linterna.png', 'linterna', 1);

INSERT OR IGNORE INTO mutikua_jantzis (id, url, objetua, zuzena) VALUES (5, 'assets/img/sonbrero.png', 'txapela', 1);

INSERT OR IGNORE INTO mutikua_jantzis (id, url, objetua, zuzena) VALUES (6, 'assets/img/lanegitekojantzia.png', 'langile jantzia', 1);

INSERT OR IGNORE INTO mutikua_jantzis (id, url, objetua, zuzena) VALUES (7, 'assets/img/botas.png', 'laneko botak', 1);

INSERT OR IGNORE INTO mutikua_jantzis (id, url, objetua, zuzena) VALUES (8, 'assets/img/soinekoa.png', 'soinekoa', 1);

INSERT OR IGNORE INTO mutikua_jantzis (id, url, objetua, zuzena) VALUES (9, 'assets/img/pico.png', 'pikotxa', 1);

