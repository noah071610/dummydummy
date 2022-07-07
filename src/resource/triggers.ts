export const triggerList = [
  {
    value: 'firstName',
    desc: '성을',
  },
  {
    value: 'lastName',
    desc: '이름을',
  },
  {
    value: 'fullName',
    desc: '성과 이름을',
    options: [
      {
        value: 'gender',
        desc: '성과 이름 그리고 이름에 맞는 성별을 반환합니다.',
      },
    ],
  },
  {
    value: 'age',
    desc: '나이를',
  },
  {
    value: 'tall',
    desc: '신장을',
  },
  {
    value: 'date',
    desc: '한글 날짜를',
    options: [
      {
        value: '-',
        desc: 'YYYY-MM-DD 형식의 날짜를 반홥합니다.',
      },
      {
        value: '/',
        desc: 'YYYY/MM/DD 형식의 날짜를 반홥합니다.',
      },
      {
        value: 'yy',
        desc: 'YYMMDD 형식의 날짜를 반환합니다.',
      },
      {
        value: 'yyyy',
        desc: 'YYYYMMDD 형식의 날짜를 반환합니다.',
      },
    ],
  },
  {
    value: 'gender',
    desc: '남성 또는 여성 중 하나를',
  },
  {
    value: 'mbti',
    desc: 'MBTI 타입 중 하나를',
  },
  {
    value: 'link',
    desc: '무작위 링크를',
  },
  {
    value: 'habit',
    desc: '취미를',
  },
  {
    value: 'smoking',
    desc: '비흡연 ~ 세갑 이상 (5개 선택지) 중 하나를',
  },
  {
    value: 'drinking',
    desc: '음주를 하지 않음 ~ 5병 이상 (6개 선택지) 중 하나를',
  },
  {
    value: 'email',
    desc: '무작위 이메일을',
  },
  {
    value: 'mobileCarrier',
    desc: '유명 통신사 중 하나를',
  },
  {
    value: 'call',
    desc: '무작위 핸드폰 전화번호를',
    options: [
      {
        value: 'local',
        desc: '지역번호 형식의 전화번호를 반환합니다.',
      },
      {
        value: 'num',
        desc: '하이픈을 제거한 핸드폰 전화번호를 반환합니다.',
      },
    ],
  },
  {
    value: 'socialMedia',
    desc: '유명 소셜미디어 중 하나를',
  },
  {
    value: 'address',
    desc: '무작위 주소를',
  },
  {
    value: 'city',
    desc: '광역시·도 중 하나를',
  },
  {
    value: 'region',
    desc: '시·군·자치구 ~ 읍·면·동 중 하나를',
  },
  {
    value: 'postalCode',
    desc: '무작위 우편번호(5자리)를',
  },
  {
    value: 'education',
    desc: '중학 중퇴 이하 ~ 박사 (7개 선택지) 중 하나를',
  },
  {
    value: 'university',
    desc: '유명 대학교 중 하나를',
  },
  {
    value: 'company',
    desc: '유명 기업 중 하나를',
  },
  {
    value: 'occupation',
    desc: '직업 중 하나를',
  },
  {
    value: 'price',
    desc: '1000 단위로 끊은 숫자값을',
  },
  {
    value: 'bank',
    desc: '유명 은행 중 하나를',
  },
  {
    value: 'accountNumber',
    desc: '실제 계좌번호 형식을 적용한 무작위 계좌번호를',
  },
  {
    value: 'creditCardCompany',
    desc: '유명 카드사 중 하나를',
  },
  {
    value: 'creditCardNumber',
    desc: '실제 카드번호 형식을 적용한 무작위 카드번호를',
  },
  {
    value: 'ip',
    desc: '무작위 ip주소를',
  },
  {
    value: 'uuid',
    desc: '무작위 uuid를',
  },
  {
    value: 'color',
    desc: '무작위 컬러값을',
    options: [
      {
        value: 'hex',
        desc: 'hex형식의 무작위 컬러값을 반환합니다.',
      },
      {
        value: 'rgba',
        desc: 'rgba형식의 무작위 컬러값을 반환합니다.',
      },
    ],
  },
  {
    value: 'number',
    desc: '0~100000사이의 숫자값을',
    options: [
      {
        value: 'comma',
        desc: '1000단위 마다 콤마를 붙입니다.',
      },
    ],
  },
  {
    value: 'station',
    desc: '지하철역 중 하나를',
  },
  {
    value: 'drama',
    desc: '인기 드라마 중 하나를',
  },
  {
    value: 'movie',
    desc: '인기 영화 중 하나를',
  },
  {
    value: 'music',
    desc: '인기 음악 중 하나를',
  },
  {
    value: 'artist',
    desc: '인기 가수 중 하나를',
  },
  {
    value: 'food',
    desc: '음식 중 하나를',
  },
  {
    value: 'product',
    desc: '무작위 제품군 중 하나를',
  },
];
