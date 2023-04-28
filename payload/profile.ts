import { faBlog, faEnvelope, faPen, faPhone, faTag } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김찬빈',
    small: '',
  },
  contact: [
    {
      title: 'chanbin.backend@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: '010-2929-7527',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/chanbinme',
      link: 'https://github.com/chanbinme',
      icon: faGithub,
    },
    {
      title: 'https://green-bin.tistory.com',
      link: 'https://green-bin.tistory.com',
      icon: faBlog,
    },
    {
      title: 'https://url.kr/qcl98k',
      link: 'https://url.kr/qcl98k',
      icon: faPen,
    },
  ],
  notice: {
    title: '한 가지를 대하는 태도를 보면, 만 가지를 대하는 태도를 알 수 있다.',
    icon: faTag,
  },
};

export default profile;
