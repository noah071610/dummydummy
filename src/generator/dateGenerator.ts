import dayjs from 'dayjs';
//@ts-ignore
import dayjsRandom from 'dayjs-random';

dayjs.extend(dayjsRandom);

export const dateGenerator = (format?: 'hyphen' | 'slash' | 'yy' | 'ko') => {
  if (!format) {
    return (
      (dayjs as any)
        .between('1994-01-01', '2015-12-31')
        .format('YYYY/M/D')
        .replace('/', '년')
        .replace('/', '월') + '일'
    );
  }
  return (dayjs as any)
    .between('1994-01-01', '2015-12-31')
    .format(
      format === 'hyphen'
        ? 'YYYY-MM-DD'
        : format === 'slash'
        ? 'YYYY/MM/DD'
        : format === 'yy'
        ? 'YYMMDD'
        : 'YYYYMMDD'
    );
};
