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
  Logo,
  LogoWrapper,
  PosterWrapper,
  ProfileContainer,
  SocialContainer,
  SocialIcon,
} from './styles';

const socials = [
  {
    icon: faGithub,
    link: 'https://github.com/noah071610',
  },
  {
    icon: faInstagram,
    link: 'https://www.instagram.com/noahh_jang/',
  },
  {
    icon: faHome,
    link: 'https://home.doda.app/',
  },
];

function Poster() {
  const [curPage, setCurPageState] = useRecoilState(curPageState);
  const onClickPoster = useCallback(() => {
    setCurPageState('#profile');
    window.location.hash = `profile`;
  }, []);
  const onClickLogo = useCallback(() => {
    if (curPage.includes('#dash-')) {
      setCurPageState('#profile');
      window.location.hash = `profile`;
    } else {
      setCurPageState('#dash-json');
      window.location.hash = `dash-json`;
    }
  }, [curPage]);

  return (
    <PosterWrapper>
      <BackgroundWrapper onClick={onClickPoster}>
        <Background />
      </BackgroundWrapper>
      <ProfileContainer>
        <LogoWrapper onClick={onClickLogo}>
          <Logo />
        </LogoWrapper>
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
