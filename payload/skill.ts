import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'Gradle',
    },
    {
      title: 'Spring Boot',
    },
    {
      title: 'Spring Data JPA',
    },
    {
      title: 'Spring MVC',
    },
 
    {
      title: 'Spring Security',
    },

    {
      title: 'AWS EC2, S3, RDS',
    },
    {
      title: 'QueryDSL',
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
    },
    {
      title: 'Redis',
    },
    {
      title: 'H2',
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Git',
    },
    {
      title: 'IntelliJ',
    },
    {
      title: 'Vim',
    },
    {
      title: 'Slack',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, etc],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
