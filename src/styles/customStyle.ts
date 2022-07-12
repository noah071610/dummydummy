export const colors = {
  b: {
    0.3: 'rgba(0,0,0,0.3)',
  },
  blue: '#001AFF',
  bg: '#FFFCFC',
  gray: {
    default: '#E5E5E5',
    deep: '#696969',
  },
  overlay: '#332226',
  title: '#332226',
  brown: '#71535A',
  input: '#F4EFF0',
  border: '#F4EFF0',
  focus: '#F1EEEE',
  error: '#DD2A5B',
  bg_input: '#F4EFF0',
  pink: {
    default: '#FF5576',
    soft: '#FFEDF0',
    hover: '#F25170',
  },
};

export const iconStyle = (size: string) => ({
  width: size,
  height: size,
  fontSize: size,
});

export function FLEX(
  justify?: 'left' | 'center' | 'right' | 'between' | 'even' | 'col',
  align?: 'top' | 'center' | 'bottom' | 'between' | 'even',
  flexStyle?: 'col' | 'row' | 'col-r'
) {
  let flex = 'display:flex;';
  if (!justify) {
    return flex + `justify-content:center;align-items:center;`;
  }
  if (justify === 'col') {
    return (
      flex + `justify-content:center;align-items:center;flex-direction:column;`
    );
  }
  for (let i = 0; i < 2; i++) {
    let temp: any = i === 0 ? justify : align;
    switch (temp) {
      case 'center':
        temp = 'center;';
        break;
      case 'left':
      case 'top':
        temp = 'flex-start;';
        break;
      case 'between':
        temp = 'space-between;';
        break;
      case 'right':
      case 'bottom':
        temp = 'flex-end;';
        break;
      case 'even':
        temp = 'space-evenly;';
        break;
      default:
        temp = 'center;';
        break;
    }
    flex += i === 0 ? `justify-content:${temp}` : `align-items:${temp}`;
  }
  if (flexStyle) {
    flex +=
      flexStyle === 'col'
        ? 'flex-direction:column;'
        : flexStyle === 'row'
        ? 'flex-direction:row;'
        : flexStyle === 'col-r'
        ? 'flex-direction:column-reverse;'
        : '';
  }
  return flex;
}

export const ELLIPSIS = (lineHeight: number, clamp: number, height: string) =>
  `
  line-height: ${lineHeight};
  -webkit-line-clamp: ${clamp};
  height: ${height};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
  ` as const;

export const GRID = (columns: string, gap?: string, row?: string) =>
  `
    display:grid;
    ${columns ? `grid-template-columns:${columns};` : ''}
    ${row ? `grid-template-rows:${row};` : ''}
    ${gap ? `gap:${gap};` : ''}
  ` as const;

export const MQ = (size: '960px' | '700px' | '450px') => `
@media (max-width: ${size})
`;
