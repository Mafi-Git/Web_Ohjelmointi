class Henkilo{
    //constructor
    constructor(first, last, callname, birthyear){
        this.first = first;
        this.last = last;
        this.callname = callname;
        this.birthyear = birthyear;
    }

    //getters and setters
    set first(value){
        this.etunimi = value;
    }
    get first(){
        return this.etunimi;
    }
    set last(value){
        this.sukunimi = value;
    }
    get last(){
        return this.sukunimi;
    }
    set callname(value){
        this.kutsumanimi = value;
    }
    get callname(){
        return this.kutsumanimi;
    }
    set birthyear(value){
        this.syntymavuosi = value;
    }
    get birthyear(){
        return this.syntymavuosi;
    }

};


class Urheilija extends Henkilo{
    //constructor
    constructor(link_to_pic, weight, sport, accomplishments){
        super();
        this.link_to_pic = link_to_pic;
        this.weight = weight;
        this.sport = sport;
        this.accomplishments = accomplishments;
    }

    //getters and setters
    set link_to_pic(value){
        this.linkki_kuvaan = value;
    }
    get link_to_pic(){
        return this.linkki_kuvaan;
    }
    set weight(value){
        this.omapaino = value;
    }
    get weight(){
        return this.omapaino;
    }
    set sport(value){
        this.laji = value;
    }
    get sport(){
        return this.laji;
    }
    set accomplishments(value){
        this.saavutukset = value;
    }
    get accomplishments(){
        return this.saavutukset;
    }
}

//Creating a new urheilija type object
let urheilija = new Urheilija();
urheilija.etunimi = "pekka";
urheilija.sukunimi = "poutama";
urheilija.kutsumanimi = "pouta";
urheilija.syntymavuosi = 2001;

urheilija.linkki_kuvaan = "linkki";
urheilija.omapaino = 89;
urheilija.laji = "keihäänheitto";
urheilija.saavutukset = "kultamitalli";

console.log(urheilija);