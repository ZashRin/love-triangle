/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  let first, second, third;
  preferences.unshift(NaN);

  for(first = 0; first < preferences.length; first++)
  {
    if(preferences[first] === NaN) continue;
    second = preferences[first];
    if(preferences[second] === NaN) continue;
    third = preferences[second];
    if(preferences[third] === NaN) continue;
    if(first == second || second == third) continue;
    
    if(preferences[third] == first) {
      count++;
      preferences[first] = NaN;
      preferences[second] = NaN;
      preferences[third] = NaN;
    }
  }

  return count;
};
