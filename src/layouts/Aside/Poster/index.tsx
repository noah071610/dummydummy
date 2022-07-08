import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { curPageState } from '@states';
import { iconStyle } from '@styles/customStyle';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import {
  Background,
  BackgroundWrapper,
  Icon,
  PosterWrapper,
  ProfileContainer,
  SocialContainer,
  SocialIcon,
} from './styles';

interface IProps {}

const socials = [
  {
    icon: faGithub,
    link: '',
  },
  {
    icon: faInstagram,
    link: '',
  },
  {
    icon: faHome,
    link: '',
  },
];

function Poster({}: IProps) {
  const [curPage, setCurPageState] = useRecoilState(curPageState);
  const onClickPoster = useCallback(() => {
    setCurPageState('#profile');
    window.location.hash = `profile`;
  }, []);

  return (
    <PosterWrapper>
      <BackgroundWrapper onClick={onClickPoster}>
        <Background />
      </BackgroundWrapper>
      <ProfileContainer>
        <Icon />
        <SocialContainer>
          {socials.map((v, i) => (
            <SocialIcon key={`social-${i}`}>
              <FontAwesomeIcon style={iconStyle('20px')} icon={v.icon} />
            </SocialIcon>
          ))}
        </SocialContainer>
      </ProfileContainer>
    </PosterWrapper>
  );
}

export default Poster;
