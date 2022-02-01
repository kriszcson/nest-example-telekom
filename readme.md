# Telekom példaprojekt

## Feladat

### Végpontok
GET test?filter=&rows=&page=
GET test/{key}
GET test/reader
POST test
PUT test/{key}
 

### Paraméterek
key: tetszőleges egyedi kulcs

filter: szöveg

rows: numerikus

page: numerikus


### Leírás

Minden endpoint json-t adjon vissza a readert kivéve, amelyben legyenek benne a kapott input paraméterek és az alkalmazás neve, amit környezeti változóból olvas fel a program.

Ha a rows, page valahol nem numerikus, hibát adjon vissza.

A test/reader endpoint egy file-ból olvas fel egy sort és azt adja vissza text/plain formában.

POST és PUT szolgáltatásoknál a body-t küldje vissza a válaszban a kulcs értékével kiegészítve, ahol nincs kulcs, ott generálja.


## Alkalmazás indítása

### Local
A projekt gyökérkönyvtárán belül a /backend mappában az alábbi két paranccsal:
    -**npm install**
    -**nest start** 
A programot futtató gépen szükséges, hogy telepítve legyenek: **node, npm, @nestjs/cli** 
Tesztelve a következő verziószámokkal: 
    -NestJS: v8.2.0
    -Node: v16.13.2
    -Npm: v8.1.2

### Docker (POCO)
A projekt gyökérkönyvtárában a **poco up** paranccsal.
A programot futtató gépen szükséges, hogy telepítve legyenek: **docker, phyton, poco**
Doc: https://github.com/shiwaforce/poco

####
Ezt követően az alkalmazás elérhető itt: **http://localhost:3000**