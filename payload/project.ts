import { IProject } from '../component/project/IProject';
import image1 from '../asset/66challenge.png';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Travel with me',
      startedAt: '2023-03',
      where: '소셜미디어를 담은 여행 동행 모집 서비스',
      descriptions: [
        {
          content: '백엔드',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '[노션] : ',
              postHref: 'https://url.kr/ofjzbp',
            },
            {
              content: '[Github] : ',
              postHref: 'https://github.com/Travel-WithMe/TravelWithMe-sever/tree/develop',
            },
            {
              content: '[개발 인원] : 총 4명 (백엔드 2명 + 프론트엔드 2명)',
            },
            {
              content: '담당 역할',
              // weight: 'MEDIUM',
              descriptions: [
                {
                  content: 'API 개발(회원, 피드, 인증)',
                },
                {
                  content: 'Spring Security Auth , Email 인증',
                },
                {
                  content: '알림 서비스 구축',
                },
                {
                  content: 'AOP를 통한 Logging 구현',
                },
                {
                  content: 'Rest Docs API 문서 자동화',
                },
              ],
            },
            {
              content: '기여한 내용',
              // weight: 'MEDIUM',
              descriptions: [
                {
                  content: 'Spring Security + JWT를 이용한 로그인, 로그아웃',
                  href: 'https://green-bin.tistory.com/68',
                },
                {
                  content: '추상화를 통한 효율적인 통합 테스트',
                  href: 'https://green-bin.tistory.com/66',
                },
                {
                  content: '제네릭(Generic)을 이용한 코드 리팩토링',
                  href: 'https://green-bin.tistory.com/75',
                },
                {
                  content: '이메일 인증 구현',
                  href: 'https://green-bin.tistory.com/83',
                },
                {
                  content: '순환 참조 문제 해결',
                  href: 'https://green-bin.tistory.com/52',
                },
                {
                  content: '@Value가 환경 변수 값을 가져오지 못하는 문제 해결',
                  href: 'https://green-bin.tistory.com/53',
                },
                {
                  content: 'JPA metamodel must not be empty! 에러 해결',
                  href: 'https://green-bin.tistory.com/57',
                },
                {
                  content: 'Java8 Local Date Time 직렬화/역직렬화 에러 해결',
                  href: 'https://green-bin.tistory.com/63',
                },
                {
                  content: 'Mac M1(ARM)에서 Embedded Redis 실행하지 못하는 문제 해결',
                  href: 'https://green-bin.tistory.com/78',
                },
                {
                  content:
                    'InvalidDefinitionException: cannot deserialize from Object value 에러 해결',
                  href: 'https://green-bin.tistory.com/80',
                },
              ],
            },
            {
              content: '기술 스택',
              // weight: 'MEDIUM',
              descriptions: [
                {
                  content:
                    'Java11, Spring Boot, Spring Security, MySQL, QueryDSL, AWS(EC2, S3, RDS), Github Actions',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: '66 챌린지',
      startedAt: '2023-01',
      endedAt: '2023-02',
      where: '66일동안 올바른 습관을 만들 수 있도록 도와주는 하드코어 목표 달성 서비스',
      descriptions: [
        {
          content: '백엔드',
          postImage: image1,
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '[배포 링크] : ',
              postHref: 'https://66challenge.shop',
              descriptions: [
                {
                  content: 'Guest ID : guest@mail.com',
                },
                {
                  content: 'Guest PW : guest123!',
                },
              ],
            },
            {
              content: '[포트폴리오] : ',
              postHref: 'https://url.kr/nyrdgw',
            },
            {
              content: '[Github] : ',
              postHref: 'https://github.com/codestates-seb/66Challenge',
            },
            {
              content: '개발 인원',
              descriptions: [
                {
                  content: '총 7명 (백엔드 3명 + 프론트엔드 4명)',
                },
              ],
            },
            {
              content: '담당 역할',
              descriptions: [
                {
                  content: 'API 개발(습관, 인증 게시물)',
                },
                {
                  content: 'S3 이미지 서버 구축',
                },
                {
                  content: 'Git Flow, Git Convention 정립',
                },
                {
                  content: '알림 서비스 구축',
                },
                {
                  content: 'CI/CD 구성 및 RDS DB 세팅',
                },
                {
                  content: 'OAuth 로그인(Google, Kakao, Naver)',
                },
              ],
            },
            {
              content: '기여한 내용',
              descriptions: [
                {
                  content:
                    'Offset Pagination을 No Offset Pagination을 전환하여 약 100배의 페이징 성능 개선 : 데이터 15만건 기준 (0.058sec → 0.00032sec)',
                  href: 'https://green-bin.tistory.com/23',
                },
                {
                  content: '웹 성능 개선을 위한 이미지 최적화',
                  href: 'https://green-bin.tistory.com/32',
                },
                {
                  content: '협업 생산성을 높이기 위한 GitFlow, Convention 정립',
                  href: 'https://green-bin.tistory.com/26',
                },
                {
                  content: '스케줄링을 통해 사용자의 당일 인증 여부를 체크하는 시스템 구현',
                  href: 'https://green-bin.tistory.com/25',
                },
                {
                  content: 'OAuth 2.0 로그인 기능 구현(Google, Naver, Kakao)',
                  href: 'https://green-bin.tistory.com/27',
                },
                {
                  content: 'S3를 통해 이미지 업로드/삭제',
                  href: 'https://green-bin.tistory.com/29',
                },
                {
                  content: 'Spring Data JPA Auditing 기능으로 엔티티 생성/수정 시간 기록 자동화',
                  href:
                    'https://confirmed-router-9c3.notion.site/66Challenge-Spring-Data-JPA-Auditing-5f2ca290abea4e6db58385f6f54b4404',
                },
                {
                  content: 'Commit Message Convention 정립 및 Template 작성',
                  href:
                    'https://www.notion.so/66Challenge-Commit-message-convention-d1c4505193bb455fba13cf48a776dcc9',
                },
                // {
                //   content: 'RDS Connection timed out 연결 오류 해결',
                //   href: 'https://green-bin.tistory.com/34',
                // },
                // {
                //   content:
                //     'AmazonS3ResourceStorage : Unable to execute HTTP request: Timeout waiting for connection from pool 해결',
                //   href: 'https://green-bin.tistory.com/42',
                // },
                // {
                //   content: 'EC2 배포 시 Scheduled가 지정된 시간에 실행되지 않는 문제 해결',
                //   href: 'https://green-bin.tistory.com/20',
                // },
                // {
                //   content: 'NoSuchBeanDefinitionException 에러 해결',
                //   href: 'https://green-bin.tistory.com/19',
                // },
              ],
            },
            {
              content: '기술 스택',
              descriptions: [
                {
                  content:
                    'Java11, Spring Boot, Spring Security, MySQL, QueryDSL, AWS(EC2, S3, RDS), Github Actions',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: '스택오버플로우 클론 프로젝트',
      startedAt: '2023-01',
      endedAt: '2023-01',
      where: '',
      descriptions: [
        {
          content: '팀장, 백엔드',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '[Github] : ',
              postHref: 'https://github.com/codestates-seb/seb41_pre_014/tree/dev',
            },
            {
              content: '[개발 인원] : 총 5명 (백엔드 2명 + 프론트엔드 3명)',
            },
            {
              content: '맡은 역할',
              // weight: 'MEDIUM',
              descriptions: [
                { content: '팀장, 백엔드 총괄' },
                { content: '팀장으로 팀원 이탈로 인한 팀 위기 해결' },
                { content: 'API 개발(회원, 게시판, 북마크, 댓글)' },
                { content: '데이터베이스 테이블 기획 및 ERD 설계' },
                { content: 'Spring Security를 통한 로그인 로그아웃 구현' },
                { content: 'Rest Docs API 문서 자동화' },
                { content: 'JWT 토큰 기반 인증 구현' },
                { content: 'EC2 수동 배포' },
              ],
            },
            {
              content: '기술 스택',
              descriptions: [
                {
                  content: 'Java11, Spring Boot, Spring Security, MySQL, AWS(EC2, S3, RDS)',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default project;
