import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '코드스테이츠 (Codestates)',
      subTitle: 'Software Engineering Bootcamp, Backend 41기',
      startedAt: '2022-08',
      endedAt: '2023-02',
      descriptions: [
        {
          content: 'Java와 Spring Boot을 메인으로 서버를 개발할 수 있도록 학습했습니다.',
        },
        {
          content: '데이터베이스 설계와 관리, JPA를 활용한 CRUD API 개발을 할 수 있습니다.',
        },
        {
          content: 'RESTful API 디자인과 테스트 방법을 학습했습니다.',
        },
        {
          content: 'TDD 방법론과 JUnit, Mockito 등을 활용하여 테스트 코드를 작성할 수 있습니다.',
        },
        {
          content: 'AWS EC2, RDS, S3 등을 이용하여 애플리케이션을 배포하고 관리할 수 있습니다.',
        },
      ],
    },
    {
      title: '인덕대학교',
      subTitle: '시각디자인',
      startedAt: '2012-03',
      endedAt: '2018-02',
      descriptions: [],
    },
    {
      title: '신일고등학교',
      subTitle: '인문계 졸업',
      startedAt: '2009-03',
      endedAt: '2012-02',
      descriptions: [],
    },
  ],
};

export default education;
