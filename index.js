function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return  42 - blockNumber; 
  }
}
function distanceFromHqInFeet (blockNumber){
  return distanceFromHqInBlocks(blockNumber)* 264 ;
  // 264 is the distance in feet - standard use for this problem
}
function distanceTravelledInFeet(start, destination){
  if (start < destination){
    return ( destination - start)* 264;
  } else {
    return (start- destination)* 264;
  }
}// in order to calculate the feet travelled subtract then multiply by the base feet measurement 
function calculatesFarePrice(start, destination){
  // in order to calculate the proce we need to declare a const pulling the previous distance travelled in feet variable---- the return will be the value listed in test file
  const distance = distanceTravelledInFeet(start,destination)

  if (distance <=400){
    return 0;
  } else if (distance > 400 && distance <= 2000){
    return .02 * (distance- 400);
  } else if (distance > 2000 && distance < 2500){
    return 25;
  } else { //(distance => 2500)  this part of the statement is not needed because this is the last else statement
    return 'cannot travel that far';
  }
}