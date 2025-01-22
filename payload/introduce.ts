import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    {
      content:
        'Spring Boot, MySQL, Redis, AWS, Git 등을 사용하여 웹 서비스 설계, 백엔드 개발한 경험이 있습니다. 클린 코드와 객체 지향 설계를 고려하여 유지 보수성이 높은 코드를 작성하는 것을 중요하게 생각합니다.',
    },
    {
      content: '',
    },
    {
      content:
        '컨텐츠 기획자로 일하며 유저와의 상호작용을 통해 제품을 개선시키는 일을 즐기곤 했습니다. 하지만 제품을 더욱 개선하기 위해서는 기술적인 이해와 능력이 필요하다고 생각하게 되었습니다.' +
        ' 학습하는 과정에서 개발에 대한 이해와 관심을 갖게 되었고, 개발 경험을 통해 자신만의 서비스를 만들어 보고 싶은 욕구가 생겨 직무 전환을 결심하게 되었습니다.',
    },
    {
      content: '',
    },
    {
      content:
        '개발자란 처음 접하는 환경이나 기술에 대해서도 주어진 문제를 성공적으로 해결할 수 있어야한다고 생각하고 있습니다. 문제 해결에서 중요한 점은 사용자를 이해하고 요구사항을 분석하는 것입니다.' +
        ' 컨텐츠 기획자로 일하면서 다양한 관점에서 문제를 바라볼 수 있는 사고력과 협업 능력에 강점을 가지게 되었습니다.' +
        ' 이러한 강점을 바탕으로 더 나은 문제 해결과 비즈니스 발전을 위해 능동적이고 적극적으로 참여하고 있습니다.',
    },
    {
      content: '',
    },
    {
      content: '• 개발 중 겪는 기술적 어려움을 개인 시간에 학습하고, 블로그에 정리합니다.',
    },
    {
      content:
        '• 사이드 프로젝트나 알고리즘 스터디, 온라인 모각코 활동 등을 통해 다양한 개발 경험을 즐기고 있습니다.',
    },
    {
      content: '• 작은 성과도 꾸준한 커밋을 통해 지속적인 성장을 추구하고 있습니다.',
      postHref:
        'https://user-images.githubusercontent.com/108569685/234633538-c0955be0-c30b-46f1-b08e-0de7780b9499.png',
      postImage:
        'https://user-images.githubusercontent.com/108569685/234633538-c0955be0-c30b-46f1-b08e-0de7780b9499.png',
    },
  ],
  sign: 'ChanBin Kim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
