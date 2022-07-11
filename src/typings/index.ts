import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface NavSubMenu {
  label?: string;
  value: string;
  icon?: IconDefinition;
  materialIcon?: EmotionJSX.Element;
}

export type NavMenuValue = 'dash' | 'trigger' | 'template';
export interface NavMenu {
  label: string;
  value: NavMenuValue;
  icon: IconDefinition;
  subMenu?: NavSubMenu[];
}

export type ResultModalMenuValue = 'copy' | 'shuffle' | 'close';
export interface ResultModalMenu {
  label: string;
  value: ResultModalMenuValue;
  icon: IconDefinition;
}

export type CodeBlockType = 'json' | 'javascript';

export interface TriggerOptionList {
  value: string;
  desc: string;
}
export interface TriggerList {
  value: string;
  desc: string;
  options?: TriggerOptionList[];
}
