import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chloekkk | Developer', // e.g: 'Name | Developer'
  lang: 'ko', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Chloe-Kim',
  subtitle: "I'm the Cadet of 42seoul & Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'wink_profile.png',
  paragraphOne: '💻 CONVERGENCE SOFTWARE',
  paragraphTwo: '🦁 LIKELION 8TH EXECUTIVES',
  paragraphThree: '🐨 COALA UNIV 2TH MEMBER',
  paragraphFour: '🇰🇷 42SEOUL CADET',
  paragraphFive: 'REACT / Node / Typescript / Django',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'hm_login.png',
    title: 'HM손해보험',
    info: 'HM손해보험 비즈니스 모델을 구축하여 실제 보험 기업 내에서 쓰는 시스템을 구현. 주요 기능으로 상품개발, 영업관리, 인수심사, 보상처리 등이 있음.',
    info2: '개발스택으로 프론트는 React.js 를 통하여 구현하였고 백엔드는 Spring 을 통하여 구현하였다. DB는 Maria DB 를 사용하였다.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'every.png',
    title: '모두의 집사',
    info: '길거리 고양이들에 대한 데이터를 저장하고 길거리 집사들이 데이터를 축적 및 관리 할 수 있는 페이지를 만들었음. Kakao map API 를 이용하였고, 각 지역의 고양이를 지도에 등록할 수 있는 기능을 넣었음.',
    info2: '개발스택으로 프론트는 React.js 를 통하여 구현 / 백엔드는 Django 를 통하여 구현하였음. DB는 기본 sqlite3 를 사용하였다.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'study_live.png',
    title: 'Study Live (예정)',
    info: '언택트 시대에 공부하는 학생들에게 열정을 불어넣을 수 있는 페이지를 만들기로 기획. 목표시간을 설정하고 공부할 수 있고 그룹을 만들어서 목표를 공유할 수 있다.',
    info2: '현재 프론트는 React 백엔드는 Django 로 개발 중이다.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'likelion.png',
    title: '멋쟁이사자처럼(명지대) 지원 페이지',
    info: '멋쟁이 사자처럼 지원 페이지 개발',
    info2: 'Django 와 기본 Template 을 사용하여 개발하였다.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'skdusdl8804@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Chloekkk',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
