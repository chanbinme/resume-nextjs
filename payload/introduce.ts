import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';


const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
        '• Java, Spring Boot를 기반으로 웹 애플리케이션 프로젝트를 기획/개발할 수 있습니다.',
        '• 좋은 코드에 관심이 많아 클린 코드와 객체지향에 대해 공부하며 개발 과정에 도입해 보고 있습니다.',
        '• 새로운 환경에 빠르게 적응하고 오버 커뮤니케이션을 지향하여 디자이너에서 컨텐츠 기획자로 직무 전환 후 첫 프로젝트를 성공적으로 진행한 경험이 있습니다.',
        '• 이러한 역량을 바탕으로 백엔드 개발자로서 팀과 원할하게 소통하고 급변하는 환경에서도 팀이 원하는 가치를 창출할 수 있습니다.',
        '• 비록 처음 보는 환경이나 기술이라도, 주어진 업무는 어떻게든 해내며, ‘전천후 개발자’라는 평가를 받았습니다.',
        '• 개발 중 겪는 기술적 어려움을 개인 시간에 학습하고 학습한 내용을 노션과 블로그에 정리하고 있습니다.',
        '• 현재 알고리즘 스터디, 1일 1커밋, 온라인 모각코에 참여하고 있으며 새로운 팀 프로젝트를 진행 중입니다.',
  ],
  sign: 'Chan Bin Kim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
