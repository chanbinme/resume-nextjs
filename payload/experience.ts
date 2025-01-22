import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)엑스얼라이언스',
      subTitle: '패션 브랜드 루이까또즈를 포함한 다양한 분야의 계열사를 운영하는 지주회사',
      positions: [
        {
          title: 'SW개발팀 | 백엔드 개발자 | 정규직',
          startedAt: '2023-06',
          descriptions: [
            'Test case를 통한 QA 테스트 도입, 프로젝트 배포 후 발생하는 버그 80% 최소화',
            '서버 재기동 없이 JSP 파일 배포만으로 프로모션 페이지 생성되도록 프로세스 개선, 서비스 중단 시간 90% 감소 및 마케팅 대응 속도 개선',
            '복잡한 로직 및 시스템 설정 문서화하여 반복적인 문의에 대한 신속한 대응 체계 구축',
            '직영몰 선물하기 서비스 API 설계 및 화면 개발',
            '직영몰 배송비 부과 API 설계 및 화면 개발',
            '사내 인사평가 시스템 API 설계 및 화면 개발',
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
