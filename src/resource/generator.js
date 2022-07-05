const test = `.aero
항공사
.arpa
인터넷 도메인 시스템의 기술적 하부 구조
.asia
아시아 지역에 존재하는 기업, 단체, 개인 전용.
아시아
.biz
비즈니스 업계 전용.
.cat
카탈루냐어 문화권 전용. 고양이랑은 상관없다.[6]
.com
commercial 즉 회사용으로 만든 도메인이다. 다만, 개인 자격으로도 발급이 가능하며, 세계적으로 가장 유명한 도메인이다.
.coop
협동 단체, 협동조합 전용.
.edu
교육 목적 전용. 미국 소재의 고등 교육 기관만 새로 발급 받을 수 있으나, 규정이 완화되었던 과거에 생성된 도메인을 유지하는 것은 허용된다.[7]
.gov
미국 정부 기관 전용. 따라서 .go.us나 .gov.us는 없다.[8]
미국
.info
정보를 제공해주는 사이트.
.int
국제법 절차에 따라 결성된 국제기관.[9]
.jobs
채용 정보 업계 전용.
.mil
미군 전용.[10] 따라서 mi.us나 mil.us는 없다.
미국
.mobi
모바일 기기에 최적화된 사이트.[11]
.museum
박물관, 미술관
.name[12]
개인 목적.
.net
원래는 네트워크 관련 사이트용이었으나, 제한이 해제되었다.
.org
단체, 조직을 위한 도메인. 원래는 gTLD 분류에 없는 기타 분류였으나, net같이 다목적이 되었다.
.post
우편 관련 기관 전용.
.pro
전문적인 직종 전용. 예를 들어 변호사.
.tel
전화 번호 정보 제공사이트 전용.[13]
.travel
여행사 전용.`
  .split(/\n/g)
  .filter((v) => v.match(/\.[a-zA-Z]+/g))
  .map((v) => v.trim());

var fs = require('fs');
fs.writeFile('./test.js', JSON.stringify([...new Set(test)]), () => {});
