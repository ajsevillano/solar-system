//Hooks & utils file to keep App file cleaner.

async function fetchData({ setPlanetInfo }) {
  const datalang = 'EN';
  const applang = `./data/data_${datalang}.json`;
  const result = await fetch(applang);
  const data = await result.json();
  setPlanetInfo(data);
}

export { fetchData };
