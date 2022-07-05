import { apartments, cities, regions } from '@resource/address';

export const addressGenerator = () => {
  const city = cities[Math.floor(Math.random() * cities.length)];
  const region =
    regions[city][Math.floor(Math.random() * regions[city].length)];
  const detail = apartments[Math.floor(Math.random() * apartments.length)];
  return `${city} ${region} ${detail}`;
};
