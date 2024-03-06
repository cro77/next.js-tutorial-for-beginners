import mungos from 'mongoose';

mungos.pluralize(null);

const korisnikShema = new mungos.Schema({
  korisnickoIme: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20
  },
  ePosta: {
    type: String,
    required: true,
    unique: true,
    max: 50
  },
  zaporka: {
    type: String,
  },
  slika: {
    type: String
  },
  administrator: {
    type: Boolean,
    default: false
  },
},
{
  timestamps: true
});

const objavaShema = new mungos.Schema({
  naslov: {
    type: String,
    required: true
  },
  opis: {
    type: String,
    required: true
  },
  slika: {
    type: String
  },
  idKorisnika: {
    type: String,
    required: true
  },
  niz: {
    type: String,
    required: true,
    unique: true
  }
},
{
  timestamps: true
});

export const Korisnik = mungos.models?.Korisnik || mungos.model("Korisnik", korisnikShema);
export const Objava = mungos.models?.Objava || mungos.model("Objava", objavaShema);