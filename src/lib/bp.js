import mungos from 'mongoose';

const konekcija = {};

export const konekcijaBP = async () => {
  try {
    if (konekcija.isConnected) {
      console.log("Upotreba postojeće konekcije.");
      return;
    }

    const bp = await mungos.connect(process.env.MONGODB_URI);
    konekcija.isConnected = bp.connections[0].readyState;
  } catch(greska) {
    console.log(greska);
    throw new Error("Greška prilikom povezivanja s bazom podataka!");
  }
}
