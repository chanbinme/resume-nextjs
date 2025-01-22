import { IExperience } from '../component/experience/IExperience';


const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)엑스얼라이언스',
      subTitle: '유명 패션 브랜드 루이까또즈를 운영하는 지주회사',
      positions: [
        {
          title: 'SW개발팀 / Web Developer',
          startedAt: '2023-06',
          descriptions: [
            '테스트 케이스 문서화를 통한 QA 시스템 도입. 프로젝트 배포 후 발생하는 오류를 사전 방지하여 서비스 안정성 확보',
            '프로모션 페이지 개발 시 불필요한 재기동 문제를 해결하여 서비스 중단 시간 최소화 및 운영 효율성 증대',
            '복잡한 로직 및 시스템 설정 문서화하여 반복적인 문의에 대한 신속한 대응 체계 구축',
            '직영몰 선물하기 서비스 API 설계 및 화면 개발',
            '직영몰 배송비 부과 API 설계 및 화면 개발',
            '사내 인사평가 시스템 API 설계 및 화면 개발'
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'Mybatis',
            'JPA/Hibernate',
            'Querydsl',
            'Oracle',
            'JUnit',
            'JEUS',
            'WebToB',
            'Slack',
          ],
        },
      ],
    },
  ],
};

export default experience;
