function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
        return [];
    }

    let p = 0;
    let n = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            p++;
        } else if (input[i] < 0) {
            n += input[i];
        }
    }

    return [p, n];

}
