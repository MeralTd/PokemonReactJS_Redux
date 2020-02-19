// Search cards by name
export function filterName(arr = [], keyword = '') {
	if(keyword !== '') {
		return arr.filter(item => item.name.toLowerCase().includes( keyword.toLowerCase() ));
	}
	return arr;
}

// Get and filter sets by series
export function availableSeries(arr = []) {
	let allSeries = [];
  arr.forEach(item => allSeries.push(item.series));
  
  let uniqueSeries = [...new Set(allSeries)];
  uniqueSeries.sort((a,b) => {
  	if(a < b) return -1;
  	if(a > b) return 1;
  	return 0;
  });
  return uniqueSeries;
}

export function filterSeries(arr = [], value = '') {
	if(value !== '') {
		return arr.filter(item => item.series === value );
	}
	return arr;
}