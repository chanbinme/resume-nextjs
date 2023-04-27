import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김찬빈',
    small: '백엔드 개발자',
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
      icon: faBlogger,
    },
  ],
  notice: {
    title: '한 가지를 대하는 태도를 보면, 만 가지를 대하는 태도를 알 수 있다.',
    icon: faBell,
  },
};

export default profile;
