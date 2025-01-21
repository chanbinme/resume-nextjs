import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)엑스얼라이언스',
      // subTitle: '유명 패션 브랜드 루이까또즈를 포함한 다양한 분야의 계열사를 운영하는 지주회사',
      positions: [
        {
          title: 'SW개발팀/Web Developer',
          startedAt: '2023-06',
          descriptions: [
            '테스트 케이스 문서화를 통한 QA 시스템 도입',
            '프로젝트 배포 후 발생하는 오류를 사전 방지하여 서비스 안정성 확보',
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
          // ],
    //     },
    //   ],
    // },
    // {
    //   title: '(주)모',
    //   subTitle: '카카오톡 이모티콘 인기 시리즈 오늘의 짤 제작 및 UX 디자인 중심의 웹 에이전시',
    //   positions: [
    //     {
    //       title: '(비개발 경력) 컨텐츠 팀/Contents Director',
    //       startedAt: '2018-01',
    //       endedAt: '2022-08',
    //       descriptions: [
    //         {
    //           content: 'UI/UX 디자이너로 1년간 근무, 컨텐츠 기획자로 3년간 근무',
    //         },
    //         {
    //           content: '컨텐츠 신규 사업팀 신설 후 컨텐츠 기획자로 직무 전환 ',
    //         },
    //         {
    //           content:
    //             '전반적인 프로젝트를 기획하며 크리에이티브 팀의 다른 구성원과의 오버 커뮤니케이션을 지향합니다.',
    //         },
    //         {
    //           content: '인기 이모티콘 시리즈를 기획 및 관리하였습니다.',
    //           descriptions: [
    //             {
    //               content: '오늘의 짤',
    //               href: 'https://e.kakao.com/search?q=%EC%98%A4%EB%8A%98%EC%9D%98%20%EC%A7%A4',
    //             },
    //           ],
    //         },
    //         {
    //           content: 'SNS 컨텐츠를 제안하여 성공적으로 런칭 및 운영하였습니다.',
    //           descriptions: [
    //             {
    //               content: 'Tiktok(팔로워 : 346K, 좋아요 :  3.8M)',
    //               href: 'https://www.tiktok.com/@zzalgun',
    //             },
    //             {
    //               content: 'Youtube(팔로워 : 3.2만 명, 136만 조회수 달성)',
    //               href: 'https://www.youtube.com/@thezvengers1754/videos',
    //             },
    //           ],
            // },
          ],
        },
      ],
    },
  ],
};

export default experience;
