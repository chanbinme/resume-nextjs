import { IEtc } from '../component/etc/IEtc';

const etc: IEtc.Payload = {
  disable: false,

  list: [
    {
      title: '주식회사 모',
      subTitle: '(비개발 경력) 컨텐츠 팀/Contents Director',
      startedAt: '2018-01',
      endedAt: '2022-07',
      descriptions: [
        {
          content: 'UI/UX 디자이너로 1년간 근무, 컨텐츠 기획자로 3년간 근무'
        },
        {
          content: '컨텐츠 신규 사업팀 신설 후 컨텐츠 기획자로 직무 전환 '
        },
        {
          content: '전반적인 프로젝트를 기획하며 크리에이티브 팀의 다른 구성원과의 오버 커뮤니케이션을 지향합니다.'
        },
        {
          content: '인기 이모티콘 시리즈를 기획 및 관리하였습니다.',
          descriptions: [
            {
              content: '오늘의 짤',
              href: 'https://e.kakao.com/search?q=%EC%98%A4%EB%8A%98%EC%9D%98%20%EC%A7%A4'
            },
          ]
        },
        {
          content: 'SNS 컨텐츠를 제안하여 성공적으로 런칭 및 운영하였습니다.',
          descriptions: [
            {
              content: 'Tiktok(팔로워 : 346K, 좋아요 :  3.8M)',
              href: 'https://www.tiktok.com/@zzalgun'
            },
            {
              content: 'Youtube(팔로워 : 3.2만 명, 136만 조회수 달성)',
              href: 'https://www.youtube.com/@thezvengers1754/videos'
            },
          ]
        },
      ],
    },
  ],
};

export default etc;
