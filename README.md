# KidsGameApp / Galdutako Dokumentuaren Bila
EHU-ko ikasleekin batera garatutako aplikazio didaktikoan dataza. Aplikazio honen bitartez LH-ko 3.mailako ikasleek jolasen bitartez Trapagarango herriko historia ikasteko aukera izango dute.

Aplikazioak  8-10 urte bitarteko ikasleek jolasen bitartez inguruko  natura, gizarte eta kultur aldaketak identifikatzea du helburu. 
Historia ikasteaz gain, ikaskuntzaren funtsezko alderdiak modu dibertigarrian estimulatzeko aukera ere ematen die aplikazioak, hala nola irakurketa, arrazoiketa eta memoria.

## Zerbitzari muntaketa
### Sistema Eragilea eta Makinaren ezaugarriak 
Zerbitzaria Ubuntu 24 instalatuta duen makina bat da 4vCPU eta 20 gb memoriakin. Makina honetan hurrengoko erramintak instalatu ditugu: ssh(makina ez duten pertsonek lan egin ahal izateko),Datu baserako: Mariadb zerbitzaria eta bezeroa,Bind9: DNS-a muntatu ahal izateko eta FTP fitxategiak pasatu ahal izateko.

## DNS-a
Lehenengo pausua DNS bat sortzeko, Bind9 instalatzea da, horretarako hurrengo komandoa erabili dugu:

```bash
sudo apt install bind9 bind9-utils
```

Behar genituen erramintak instalatu ostean DNS-a montatu dugu, gure kasuan Makina ren izena “wag” da eta domeinuaren izena “galdutakodokumentua.eus” da.

Lehenengo gure makinaren izena aldatu dugu horretarako komandu hau erabili genuen:

```bash
sudo hostnamectl set-hostname wag
```

Honek dagoen makinaren izena wag izena gatik aldatuko du gure kasuan.

Behin makinaren izena aldatuta gure domeinua sortuko dugu, horretarako hiru fitxategi sortu edo editatu beharko ditugu.

```bash
etc/bind/named.conf.local
etc/bind/db.galdutakodokumentua.eus
etc/bind/db.ip-aren_lehen_hiru_zenbakiak (Gure kasuan 192.168.73)
```

named.conf.local dokumentuan hau jarri dugu:

```bash
zone "galdutakodokumentua.eus" {
    type master;
    file "/etc/bind/db.galdutakodokumentua.eus";
};

zone "73.168.192.in-addr.arpa" {
    type master;
    file "/etc/bind/db.192.168.73";
};
```

Honek gure domeinua nola deituko den definitzen du eta zein fitxategitan gordeko diren bere ezaugarriak.

Hurrengoko bi fitxategia hauek guk sortu beharko ditugu:
```bash
etc/bind/db.galdutakodokumentua.eus etc/bind/db.192.168.73
```

Lehenengo “db.galdutakodokumentua.eus” dokumentuan, hurrengo hauek definitzen ditugu:

- TTL:Dns-aren erregistroen time-to-live(TTL) definitzen du,kasu honetan 604800 segundu, 7 egun.

- Bigarren zatiak domeinuaren autoritatea definitzen du, gure kasuan galdutakodokumentua.eus,

- Honen barruan dauden zenbakiak, Denborak zehazten dute: Refresh time,retry time,Expiry time eta minimum TTL.

- “wag IN A ” hau erregistro bat da, eta gure zerbitzariaren ip helbidea gordetzen du.

- Azkenengoz “www IN CNAME wag” alias bat da beraz zerbitzariari www heltzen zaionean wag zerbitzariaren ip-a itzuliko du.

## File Transfer Protocol (FTP)
Fitxategiak konpartitu ahal izateko, FTP zerbitzu bat muntatu dugu, zerbitzu
honek, zerbitzarian sortutako erabiltzaileekin funtzionatzen du, horrela hurrengo
komandua erabiltzen badugu, edozein ekipotik gure zerbitzarira pasatu ahalko
dugu

Hemen komandua:
```bash
ftp 192.168.73.55 (Erabiltzailea: wag, pasahitza: Admin123)
```

Honetarako vsftpd instalatu dugu, Sudo apt install vsftpd eginez, hau eginda
dugunean gure vsftpd.conf txategian hurrengo aldagaiak ezarri ditugu:

- anonymous_enable=NO (Honek ftp-a bakarrik logeatuta zaudela egin
behar dela ahalbidetzen du)

- local_enable=YES (Erabiltzaile lokalak erabiltzea ahalbidetzen du )

- write_enable=YES (Komandoak bidaltzea ahalbidetzen du)

- chroot_local_user=YES

- user_sub_token=$USER (zein erabiltzaile konektatuta dagoen hartzen du)

- local_root=/home/$USER/ftp (Zein txategitean gordeko den esaten du)

- pasv_min_port=40000 ,pasv_max_port=50000 (Portu pasivo minimo eta
maximoak denitzen ditu)

- userlist_enable=YES ,userlist_le=/etc/vsftpd.userlist (Erabiltzaileen lista
zabaltzen du eta non gordeko den esaten du)

- userlist_deny=NO (Userlisteko erabiltzaileak sartu ahal diren edo ez esaten
du)

Ftp zerbitzua segurua izateko, ssl ziurtagiri bat sartu behar izan dugu,
horretarako komandu hau erabili dugu:
```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ftps.key -out ftps.crt
```
Honek ftps .key eta .crt txategiak sortzen ditu, eta honekin hurrengo komandua
erabiliz, .pem txategia(ziurtagiria) sortuko dugu:
```bash
cat ftps.crt ftps.key > ftps.pem
```
Ssl ziurtagiria sortuta dugunean, vsftpd.conf txategian ssl ziurtagiria erabiliko
dugula eta bere kokalekua adierazi beharko dugu, gure kasuan, konfigurazioa
horrela geratuko zen.
```bash
ssl_enable=YES
```

## Datu Basea
Gure zerbitzarian datu base bat montatu dugu, laraveleko API-tik datuak
eskuratzeko, hauek dira sortu dtugun taulak:

```bash
argazkia_zuzenas
ariketak
audioas
aukera_zuzenas
cache
cache_locks
erantzunaks
erronkas
esaldia_betes
failed_jobs
funikularras
hizkiak_betes
job_batches
jobs
lokalizazioa
lokalizazioas
migrations
mutikua_jantzis
ordenatus
parekatzeko_galderas
password_reset_tokens
sessions
users
```