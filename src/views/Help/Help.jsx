import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

class Help extends React.Component {
  render() {
    return (
        <div className="content">
            <Row>
                <Col xs={12}>
                    <Card>
                        <CardHeader>
                            <h2>Útmutató a program használatához. Gy.I.K.</h2>
                        </CardHeader>
                        <CardBody>
                            <h3>
                                Kinek jött létre?
                            </h3>
                            <p>Azoknak az Avatómestereknek, akiknek nincs hozzáférése a pranasys rendszerhez. Bárki használhatja, természetesen teljesen ingyenes -
                                ez az oldal egy segítség szeretne lenni, hogy ne kézzel kelljen nehézkesen kiválogatni a meghívókat</p>
                            <h3>Mit tud a rendszer?</h3>
                            <p>A pranasys által generált/exportált excel fájlból kigyűjti az adatokat, és a tanfolyamokhoz kigyűjti a tanítványokat
                            és azok email címét, majd az a vágólapra lehet másolni egy gombbal. </p>
                            <p>Az email küldés részét sajnos nem fedi le, mert az már nagyon megbonyolította volna az egész programot.</p>
                            <h3>Hiányzik egy tanfolyam a listából, hozzá tudod adni? Elakadtam, tudsz segíteni?</h3>
                            <p>Persze, nagyon szívesen, csak írj az aron.harsfalvi@gmail.com-ra és hozzáadom/segítek, amint tudom.</p>
                            <h3>Akkor te tárolod az adatokat, vagy hozzáférsz bármi módon?</h3>
                            <p>Határozottan nem, semmilyen adatot nem tárolok, mivel semmilyen adatbázis nincs mögötte, vagy akár szerver oldali varázslat.
                            Technikailag minden a böngésződből fut. A google sheet-et (google drive-ra feltöltött excel fájl) fogja használni kizárólag. Olyan módon,
                            hogy az elején letölti (ezért olyan lassú az eleje) és utána bezáráskor 'elfelejti' az adatokat. </p>
                            <h3>Nagyon lassú az eleje, illetve be se töltődik</h3>
                            <p>Az elején a drive-on lévő fájlból veszi ki az adatok. Ez a sebesség sajnos csakis a google-ön múlik és több száz soros excel fájl esetén ez elég lassú tud lenni.</p>
                            <p>Ha azt látod, hogy egy perc alatt se töltődik be, akkor kérlek csináld végig a 'A rendszer használatának előfeltételei' pontban leírt instrukciókat.</p>
                            <h3>Ha módosítok a google drive-on lévő fájlomon, akkor itt is frissülnek az adatok?</h3>
                            <p>Igen, mindig a legfrissebb verziót tölti le a program, de ahhoz természetesen frissíteni kell az oldalt, hogy újratöltse.</p>
                            <h3>
                                A rendszer használatának előfeltételei
                            </h3>
                            <h4>Böngésző</h4>
                            <p>Elvileg bármilyen böngészőben működik, de a legjobb a Chrome hozzá, mert abban lett tesztelve.</p>
                            <h3>A pranasys-ből kiexportált fájl kezelése</h3>
                            <p>Ez a része lehet kicsit nehezebb lesz, ezért részletesebben írom le. Tudom, hogy bonyolult, de ez a része sajnos nem rajtam múlik, de szívesen segítek, ha elakadtál</p>
                            <ol>
                                <li>Először is bizonyosodj meg róla, hogy a pranasys-ből kimentett fájl [fájl neve].xlsx végződésű, vagyis a legújabb excel fájl formátumban van.
                                Ha nem, akkor semmi gond, csak nyisd meg a fájlt, amiben szoktad, és mentsd el úgy, hogy Fájl - mentés másként, majd válaszd ki az xlsx formátumot (általában az első szokott lenni a listán)
                                </li>
                                <li>Látogasd meg a google sheet weboldalát: https://docs.google.com/spreadsheets/u/0/</li>
                                <li>Hozz létre egy üres dokumentumot a nagy + gombbal</li>
                                <li>Az oldalon belül (nem a böngészőjé, hanem az oldalé, amit megnyitott) lesz egy olyan menüpont, hogy Fájl és azon belül Importálás</li>
                                <li>Feldob egy kis ablakot, és a legutolsó menüpontjában klikk a Feltöltés fülre</li>
                                <li>Ott válaszd ki a fájlt a számítógépedről</li>
                                <li>Meg fogja kérdezni, hogy újat hozzén létre, stb, ott érdemes a 3. menüpontot választani, hogy kicserélje</li>
                                <li>Ezután publikálni kell a webre, hogy hozzá tudjon férni a program: File -> Publish to the web.. menüponttal</li>
                                <li>Ezután még meg kell osztani. Rá kell kattintani a jobb felső zöld Share (Megosztás) gombra</li>
                                <li>Kéri, hogy nevezd el a dokumentumot. Ott bármilyen nevet lehet neki adni, azt nem használom fel.</li>
                                <li>A következő oldalon ki kell választani, hogy csak olvasási módban legyen, hogy más ne módosíthassa (Can view)</li>
                                <li>Itt ki kell másolni azt a linket, amit kiad, mert csak ezt a linket lehet használni a programban</li>
                                <li>Rá kell kattintani, hogy kész (Done)</li>
                                <li>Ezután már csak annyit kell csinálni, hogy a Tanítványok programon belül a Beállítások menüpontba be kell másolni ezt a linket
                                és csak rányomni a Link Elmentése gombra. </li>
                                <li>Ezzel készen is vagyunk, lehet használni a Tanítványok programot</li>
                                <li>Fontos, hogy ezt a linket megjegyzi a program, de ezt is a böngészőben, vagyis ha újraindítod a böngészőt, becsukod az oldalt, akkor megjegyzi
                                viszont, ha másik böngészőbe mész, akkor ott megint el kell menni a Beállítások oldalra és elmenteni a linket (a többi lépést már nem kell megcsinálni,
                                ezért kell elmenteni a linket) </li>
                                <li>Ha elveszik a link, akkor bármikor vissza lehet menni a zöld Share gombra és ott kiadja a google sheet-en belül. </li>
                            </ol>

                            <h3>A fájl formátuma</h3>
                            <p>A pranasys-ből kiexportált fájlt változtatás nélkül lehet használni. A lényeg, hogy az oszlop nevek legyenek ugyanazok.
                            Ha esetleg már megváltoztattad, akkor itt a minta hozzá, ami alapján vissza tudod változtatni:
                                <a href="https://docs.google.com/spreadsheets/d/1KQUKEowO07zY0Ay5wwE6uNYwZRLdPHsqa1KrqUkvHl4/edit?usp=sharing" target="blank">https://docs.google.com/spreadsheets/d/1KQUKEowO07zY0Ay5wwE6uNYwZRLdPHsqa1KrqUkvHl4/edit?usp=sharing</a></p>

                        </CardBody>

                    </Card>
                </Col>
            </Row>
        </div>
    );
  }
}

export default Help;
