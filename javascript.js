/*
let persona = {
  nome: "Mattia",

  cognome: "Cursi",

  età: "20",

  salutare: function () {
    console.log(
      "ciao sono " + this.nome + " " + this.cognome + " ho " + this.età
    );
  },
};
persona.salutare();

let agenda = {
  contatti: [
    { nome: "Mattia", cognome: "Cursi", numero: "3890541842" },
    { nome: "Claudio", cognome: "Russo", numero: "3497656449" },
    { nome: "Lucia", cognome: "Orlando", numero: "3477947443" },
  ],
  mostraContatti: function(){
    console.log(this.contatti)
  },
  mostraContattoSingolo: function (nome) {
    let contattoFiltro = this.contatti.filter(
      (contatto) => contatto.nome === nome
    );
    console.log(contattoFiltro);
  },
  eliminaContatto: function (nome) {
    for (let i = 0; i < this.contatti.length; i++) {
      if (this.contatti[i].nome === nome) {
        this.contatti.splice(i, 1);
        console.log("Contatto eliminato" + nome);
        return;
      } else {
        console.log("contatto non trovato");
      }
    }
  },
  aggiungiContatto: function (nome, cognome, numero) {
    let nuovoContatto = {
      nome: nome,
      cognome: cognome,
      numero: numero,
    };
    this.contatti.push(nuovoContatto);
    console.log(this.contatti);
  },

  modificaContatti: function (datoDaModificare, tipo, NuovoDato) {
    for (let i = 0; i < this.contatti.length; i++) {
      if (tipo === "nome") {
        if (this.contatti[i].nome === datoDaModificare) {
          this.contatti[i].nome = NuovoDato;
          console.log(this.contatti);
          return;
        } else {
          console.log("nome non trovato");
        }
      } else if ((tipo = "cognome")) {
        if (this.contatti[i].cognome === datoDaModificare) {
          this.contatti[i].nome = NuovoDato;
          console.log(this.contatti);
          return;
        } else {
          console.log("cognome non trovato");
        }
      } else if ((tipo = "numero")) {
        if (this.contatti[i].numero === datoDaModificare) {
          this.contatti[i].numero = NuovoDato;
          console.log(this.contatti);
          return;
        } else {
          console.log("numero non trovato");
        }
      }
    }
  },
};


agenda.mostraContatti();

*/






