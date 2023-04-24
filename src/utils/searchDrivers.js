export async function getDrivers() {
  const response = await fetch('https://saucy-turkey-production.up.railway.app/drivers');
  const data = await response.json();
  return data;
}

export default getDrivers;

