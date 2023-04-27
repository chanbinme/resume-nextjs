import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    {
      content:
        'Java와 Spring Boot를 기반으로 웹 애플리케이션을 기획하고 개발할 수 있습니다. 클린 코드와 객체지향 개발 방법론에 대한 공부를 통해 개발 과정에서 좋은 코드를 작성하고자 노력하고 있습니다.',
    },
    {
      content: '',
    },
    {
      content:
        '이전에 디자이너나 컨텐츠 기획자로 일하며, 오버 커뮤니케이션을 지향하며 새로운 환경에 빠르게 적응하여 성공적인 프로젝트를 수행한 경험이 있습니다. 이러한 역량을 바탕으로, 백엔드 개발자로서 팀과 원할하게 소통하며 급변하는 환경에서도 팀이 원하는 가치를 창출할 수 있습니다.',
    },
    {
      content: '',
    },
    {
      content:
        '또한, "전천후 개발자"라는 평가를 받을 만큼, 처음 접하는 환경이나 기술에 대해서도 주어진 업무를 성공적으로 수행할 수 있습니다. 개발 중 겪는 기술적 어려움은 개인 시간에 학습하고, 노션과 블로그에 정리하여 지속적으로 성장하고 있습니다.',
    },
    {
      content: '',
    },
    {
      content:
        '• 알고리즘 스터디와 1일 1커밋, 온라인 모각코에 참여하며, 현재는 새로운 팀 프로젝트를 진행하고 있습니다.',
    },
    {
      content: '• 작은 성과라도 꾸준한 커밋을 통해 지속적인 성장을 추구하고 있습니다.',
      postHref:
        'https://user-images.githubusercontent.com/108569685/234633538-c0955be0-c30b-46f1-b08e-0de7780b9499.png',
      postImage:
        'https://user-images.githubusercontent.com/108569685/234633538-c0955be0-c30b-46f1-b08e-0de7780b9499.png',
    },
  ],
  sign: 'Chan Bin Kim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
