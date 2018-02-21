/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */


let f = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;

  for (let i = 0; i < preferences.length; i++) {
    let lovePair1 = {
      lover : i+1,
      beloved : preferences[i]
    }

    let lovePair2 = {
      lover : preferences[i],
      beloved : preferences[preferences[i]-1]
    } 

    let lovePair3 = {
      lover : preferences[preferences[i]-1],
      beloved : preferences[preferences[preferences[i]-1]-1]
    } 

    if (lovePair3.beloved === lovePair1.lover && lovePair1.beloved === lovePair2.lover && lovePair2.beloved === lovePair3.lover &&
      lovePair1.lover !== lovePair2.lover && lovePair2.lover !== lovePair3.lover && lovePair1.lover !== lovePair3.lover ) {
      count++;
      preferences[i] = undefined;
      preferences[preferences[i]-1] = undefined;
      preferences[preferences[preferences[i]-1]-1] = undefined;
    }
  }
  
  return count;
};

module.exports = f;

const count = f([2, 3, 1]);