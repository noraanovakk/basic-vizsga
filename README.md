# Alapozó képzés, gyakorlati záróvizsga

## Indulás
Adott egy Start Wars űrhajókat tartalmazó json file.  
Tanulmányozd a file felépítését.  
Az img mappákban találhatók az űrhajók képei.   
A kiinduló html, és css file a rendelkezésedre áll.

## HTML,CSS,JS
__Az index.html file-ba nem szabad beleírnod manuálisan semmit. Csak javascript segítségével manipulálhatod a DOM-ot.__

__A style.css__ file-t módosíthatod, az alkalmazás kinézetét testre szabhatod, csak azt tartsd szem előtt, hogy esztétikus, és logikus elrendezésű maradjon az oldal.

### Feladatok
1. A kapott adatokat rendezd ár (**cost_in_credits**) szerint növekvő sorrendbe.
2. Töröld az összes olyan adatot, ahol a **consumables** értéke NULL. Fontos, hogy ne csak undefined-ra állítsd a tömbelemet!!!
3. Az összes NULL értéket (minden objektum minden tulajdonságánál) módosítsd unknown-ra
4. A **shapceship-list** class-ű divbe jelenítsd meg az így kapott hajók adatait, beleérve a képét is. Ha valamelyik hajónál nincs kép,
egy általad választott default képet helyezz el.
5. Készítened kell egy statisztikát, mely a **shapceship-list** class-ű div aljára a következő adatokat fogja beleírni:
* Egy fős (**crew = 1**) legénységgel rendelkező hajók darabszáma.
* A legnagyobb **cargo_capacity**-vel rendelkező hajó neve (**model**)
* Az összes hajó utasainak (**passengers**) összesített száma
* A leghosszabb hajó képe

6. A jobb oldalon található keresősáv segítségével legyen lehetőség a hajókra rákeresni **model** szerint. 
* A keresés kattintásra induljon
* A keresés nem case sensitive
* Ha több találatunk is lenne, nem foglalkozunk velük, az első találat eredményét (tehát az első megfelelő névvel rendelkező hajó adatait) adjuk vissza.
* Az adott hajó adatait a **one-spaceship** class-ű div-be kell megjeleníteni rendezett formában, képpel együtt.

## Feltöltés
Az elkészült munkádat zip-elve töltsd fel az oktató által megadott helyre a Coospace-en.
