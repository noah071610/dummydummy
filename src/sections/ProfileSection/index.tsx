import {
  Description,
  Image,
  ImageWrapper,
  ProfileSectionWrapper,
} from './styles';

function ProfileSection() {
  return (
    <ProfileSectionWrapper>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <Description>
        <h1>프로필 입니다~</h1>
        <p>안녕하세요. 저는 더미더미 개발자입니다.</p>
        <span>(c)올라잇 리절브드</span>
      </Description>
    </ProfileSectionWrapper>
  );
}

export default ProfileSection;
