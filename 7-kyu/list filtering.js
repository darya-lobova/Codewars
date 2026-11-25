function filter_list(l) {
  const arr = l.filter(item => typeof item === 'number' && !isNaN(item));
  
  return arr;
}
