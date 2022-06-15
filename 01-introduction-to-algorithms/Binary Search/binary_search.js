const binary_search = (list, item) => {
  let low = 0;
  let high = list.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    let guess = list[mid];

    if (guess === item) return mid; // item found
    else if (guess > item) high = mid - 1; //  too hight
    else low = mid + 1; // too low
  }

  return null;
};

binary_search([1, 2, 3, 4], 2);
