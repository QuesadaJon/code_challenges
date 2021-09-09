function tickets(peopleInLine){
  let twentyFives = 0;
  let fifties = 0;
  let till = 'YES';

  peopleInLine.map(cash => { 
    if(cash === 25){
      twentyFives += 1;
    }
    if(cash === 50) {
      twentyFives -= 1; fifties += 1;
    } 
    if(cash === 100) {
      if(fifties == 0 && twentyFives >= 3){
        twentyFives -= 3;
      } else {
        twentyFives -= 1; fifties -= 1;
      }
    }
    if(twentyFives < 0 || fifties < 0){
      till = 'NO';
    }
  });
  return till;
}

export default tickets;
