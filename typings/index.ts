export type EUserNav = 'made' | 'played';
export type ELocale = 'ko' | 'ja' | 'en';
// USER

export interface IUser {
  id: number;
  name: string;
  nickName: string;
  avatar: string;
  notifications: string[] | null;
  quizzes: IQuiz[];
  playedQuizzes: IQuiz[];
}

// QUIZ

export interface IQuiz {
  quizId: string;
  title: string;
  subTitle: string;
  placeHolder: string;
  renewal: ERenewal;
  tags: string;
  userId?: number;
  lang: ELocale;
}

export interface JSONQuizData {
  result: string;
  options: IOption[];
}

export interface IQuizData {
  quizId?: string;
  renewal: ERenewal;
  title: string;
  subTitle: string;
  placeHolder: string;
  tags: string;
  quizData: JSONQuizData;
  lang: ELocale;
  userId?: number;
}

export interface IQuizForRenewal {
  quizId: string;
  expire: number;
}

export interface IFullQuiz extends IQuiz {
  result: string;
  options: IOption[];
}

export interface ISaveData {
  menu: EMenu;
  renewal: ERenewal;
  title: string;
  subTitle: string;
  placeHolder: string;
  result: string;
  selectedTags: string[];
  options: IOption[];
  lang: ELocale | null;
}

// QUIZ MAKE

export type EMenu = 'cover' | 'result' | 'share';

export type ESelector =
  | 'color_list'
  | 'calendar_list'
  | 'percentage_list'
  | 'number_list';

export interface ISelector {
  label: string;
  value: ESelector;
  icon?: any;
}

export type ERenewal =
  | 'fix'
  | 'play'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'year';

export interface IOption {
  optionId: number;
  selector: null | ISelector;
  answers: string[];
}

export interface IOnTooltip {
  cover: boolean;
  result: boolean;
}
export interface ITooltipMessage {
  cover: string | null;
  result: string | null;
}

export interface MakeState extends ISaveData {
  isChanged: boolean;
  coverErrorMsg: string | null;
  resultErrorMsg: string | null;
  navHeadShake: boolean;
}

// Twitter

export interface ITweets {
  id: string;
  text: string;
  name: string;
  username: string;
  url: string;
  createdAt: string;
  tags: string[];
  avatar: string;
}
