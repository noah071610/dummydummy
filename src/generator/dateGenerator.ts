import dayjs from 'dayjs';
//@ts-ignore
import dayjsRandom from 'dayjs-random';

dayjs.extend(dayjsRandom);

export const dateGenerator = (format: 'YYYYMMDD', range: number[]) => {
  return (dayjs as any).between('1994-01-01', '2015-12-31').format(format);
};
