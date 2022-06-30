const obj = {};
const obj2 = {};

for (let i = 1; i <= 100; i++) {
  obj[`${i}px`] = `${i}px`;
  obj2[`${i}`] = i;
}

module.exports = {
  darkMode: 'class',
  theme: {
    fontSize: {
      ...obj,
    },
    borderRadius: {
      ...obj,
      full: '9999px',
    },
    boxShadow: {
      card: '0px 0px 2px rgba(0, 0, 0, 0.02), 0px 32px 64px rgba(0, 0, 0, 0.02), 0px 10px 14px rgba(0, 0, 0, 0.06);',
      phone:
        '20px 10px 30px rgba(0, 0, 0, 0.05), 40px 40px 40px rgba(0, 0, 0, 0.1);',
      main: '0 10px 30px rgba(0, 0, 0, 0.09)',
    },
    lineHeight: {
      ...obj,
    },
    colors: {
      title: {
        DEFAULT: '#2E3238',
        hover: '#1c1f23',
      },
      subTitle: {
        DEFAULT: '#B8C6DA',
        hover: '#a9b7ca',
      },
      desc: '#6C7889',
      white: 'white',
      black: 'black',
      primary: {
        DEFAULT: '#419EFB',
        hover: '#3c90e5',
      },
      gray: '#FAFAFB',
      border: '#E5E8EB',
      bg: '#F9FAFB',
    },
    zIndex: {
      ...obj2,
      header: 100,
      headerMenu: 90,
      overlay: 950,
      modal: 1000,
    },
    extend: {
      spacing: {
        ...obj,
      },
      borderWidth: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
      },
    },
  },
};
