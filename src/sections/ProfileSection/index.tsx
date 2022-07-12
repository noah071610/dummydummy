import {
  Description,
  Image,
  ImageWrapper,
  InfoContainer,
  ProfileSectionWrapper,
  TitleWrapper,
} from './styles';

function ProfileSection() {
  return (
    <ProfileSectionWrapper>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <Description>
        <TitleWrapper>
          <span className="subTitle">
            한국인을 위한 개발자 친화 더미데이터 툴
          </span>
          <h1>더미더미 (Dummy Dummy)</h1>
        </TitleWrapper>
        <p>
          더미더미는 <b>계좌번호, 한국주소</b> 등 다른 툴에서는 좀 처럼 찾기
          힘든
          <br />
          <b>한국어 친화적인 더미데이터툴</b>을 만들고자 제작했습니다.
        </p>
        <InfoContainer>
          <span>© 2022 DODAMIND CORP ALL RIGHTS RESERVED</span>
          <a target="_blank" rel="noreferer" href="https://home.doda.app">
            툴 제작사
          </a>{' '}
          |{' '}
          <a
            target="_blank"
            rel="noreferer"
            href="https://blog.doda.app/career"
          >
            인재채용
          </a>{' '}
          |{' '}
          <a target="_blank" rel="noreferer" href="mailto:noah071610@gmail.com">
            피드백 문의
          </a>
        </InfoContainer>
      </Description>
    </ProfileSectionWrapper>
  );
}

export default ProfileSection;
