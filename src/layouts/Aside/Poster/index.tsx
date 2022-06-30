import {
  Background,
  Icon,
  PosterWrapper,
  ProfileContainer,
  SocialContainer,
  SocialIcon,
} from './styles';

interface IProps {}

const socials = [
  {
    icon: '',
    link: '',
  },
  {
    icon: '',
    link: '',
  },
  {
    icon: '',
    link: '',
  },
];

function Poster({}: IProps) {
  return (
    <PosterWrapper>
      <Background>
        <ProfileContainer>
          <Icon />
          <SocialContainer>
            {socials.map((v) => (
              <SocialIcon></SocialIcon>
            ))}
          </SocialContainer>
        </ProfileContainer>
      </Background>
    </PosterWrapper>
  );
}

export default Poster;
