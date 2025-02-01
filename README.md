
# Cocktail-app

## Tiedot
Cocktail sivusto jossa frontend on toteutettu reactilla ja backendiin on tehty node.js serveri josta haetaan cocktail tiedot. Sivun frontend koostuu 4 pää toiminnallisuudesta -> Main page, Cocktails page, Cocktails search ja cocktail modal.

Main page (pääsivu):
Hakee get kutsulla serveriltä 8 satunnaista cocktailia ja näyttää niiden kuvan ja nimen sivulla. Ensimmäisellä get kutsulla serveri hakee listan kaikista cocktaileista cocktaildb API:sta ja tallentaa ne muuttujaan josta otetaan sitten 8 satunnaista cocktailia näytettäväksi etusivulle.

Cocktails sivu:
Cocktails sivulla listataan normaali tilanteessa kaikki serverille tallennetut cocktailit aakkos järjestyksessä. Cocktail lista haetaana get kutsulla. Sivu näyttää aluksi vain 10 ensimmäistä cocktailia ja muut saa esille kymmennen erissä painamalla load more painiketta.

Cocktails search (hakutoiminto)
Cocktails sivulla on myös hakupalkki johon voi kirjoittaa eri cocktailien nimiä. Sivu näyttää vain cocktaileja joiden nimessä on haku kentään laitettu nimi jossain kohtaa niiden nimeä. Sivu tekee tällä hetkellä aina uuden get pyynnän serverille kun hakukentää muutetaan joten haku tulos näytetään heti. Hakukenttään laittu teksti puhdistetaan ja validoidaan serverin puolella.

Cocktail modal:
Mitä tahansa cocktail korttia painamalla käyttäjä voi avata modal ikkunan jossa näytetään sen cocktailiin tarkemmat tiedot. Tämä tieto haetaan get kutsulla serveriltä joka hakee sen aina cocktaildb API:sta. Toisin kuin alku cocktail lista näitä tietoja ei tallenneta serverille.

## Käynnistys ohjeet

1. Varmista että terminaali /cocktail-app hakemistossa

2. Asenna käytetyt kirjastot seuraavalla komennolla:
    ### npm install

3. Käynnista sovellus seuraavalla komennolla
    ### npm start

4. Verkkosivulle pääsee http://localhost:3000 osoitteella verkkoselaimessa

npm start komento käynnistää samalla sekä react apin ja serverin. Sovelluksen ja serverin saa suljettua painamalla ctrl+c siinä terminaalissa jossa sovellus käynnistettiin ja vahvistamalla laittamalla y terminaaliin

## Käytetyt portit

React käyttää sen oletus lokaali porttia ja node serverin portti on määritelty .env tiedostossa

React app -> port 3000

Node.js server -> port 5000

## Muuta

Sovellus ei tarvitse API avaimia sillä kaikki käytetyt tiedot cocktaildb API:sta on saatavilla julkisella API avaimella 1
