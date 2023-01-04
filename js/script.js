/* Crea un array composto da 10 automobili.
 Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e
 alimentazione (benzina, diesel, gpl, elettrico, metano).
 Dividi le automobili in 3 array separati: nel primo array solo le auto a
 benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 Infine stampa separatamente i 3 array. */

 

 const cars = [
    {
      marca: 'Alfa Romeo',
      modello: 'Giulietta',
      alimentazione: 'benzina',
    },
    {
      marca: 'FIAT',
      modello: 'Doblò',
      alimentazione: 'diesel',
    },
    {
      marca: 'FIAT',
      modello: 'Panda',
      alimentazione: 'benzina',
    },
    {
      marca: 'FIAT',
      modello: 'Fiorino',
      alimentazione: 'metano',
    },
    {
      marca: 'Ford',
      modello: 'Fiesta',
      alimentazione: 'diesel',
    },
    {
      marca: 'Ford',
      modello: 'Ka',
      alimentazione: 'gpl',
    },
    {
      marca: 'Smart',
      modello: 'Smart',
      alimentazione: 'elettrico',
    },
    {
      marca: 'Ford',
      modello: 'Focus',
      alimentazione: 'diesel',
    },
    {
      marca: 'Opel',
      modello: 'Corsa',
      alimentazione: 'gpl',
    },
    {
      marca: 'Peugeot',
      modello: '208',
      alimentazione: 'benzina',
    },
  ];


//   Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina
// const carsBenzina = cars.filter((car, index, array) => {
//     if (car.alimentazione === 'benzina') return true;
//     else return false;
//   });

const carsBenzina = cars.filter(car => car.alimentazione === 'benzina');

console.log("ALIMENTAZIONE BENZINA" , carsBenzina);



// nel secondo solo le auto a diesel
// const carsDiesel = cars.filter((car, index, array) => {
//     if (car.alimentazione === 'diesel') return true;
//     else return false;
//   });

const carsDiesel = cars.filter(car => car.alimentazione === 'diesel');

console.log("ALIMENTAZIONE DIESEL" , carsDiesel);



// nel terzo il resto delle auto
// const carsDiverso = cars.filter((car, index, array) => {
//     if (car.alimentazione !== 'diesel' && car.alimentazione !== 'benzina') return true;
//     else return false;
//   });

const carsDiverso = cars.filter(car => car.alimentazione !== 'diesel' && car.alimentazione !== 'benzina');

console.log("ALIMENTAZIONE NO BENZ/DIESEL" , carsDiverso);
