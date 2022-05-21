const teamMembers = [
  {
    name: 'Soshell Stephen',
    profilePic: 'images/p-1.jpg',
    position: 'Data Engineer',
    rule: 'He has worked for multi-billion dollar corporate organizations in Australia and New Zealand on various marketing roles.',

  }, {
    name: 'Fidele Rukundo',
    profilePic: 'images/p-2.jpg',
    position: 'Senior FBA',
    rule: 'Professor of Marketing in one of the prestigious private universities in Lahore. His formal education at undergraduate, graduate and PhD levels is in the field of marketing',

  }, {
    name: 'Barbara Ackerman',
    profilePic: 'images/p-3.jpg',
    position: 'Backend Developer',
    rule: 'Infomist, his brainchild, was established at the time when not many had foreseen the demand for website developmet',

  }, {
    name: 'Kashif Mustafa',
    profilePic: 'images/p-6.jpg',
    position: 'Database Engineer',
    rule: 'He was awarded two Gold Medals by Federal and Provincial Governments on account of excellent educational performance.',

  }, {
    name: 'Aaisah Bashir',
    profilePic: 'images/p-4.jpg',
    position: 'Artict And Designer',
    rule: 'he hacks growth for businesses with a mix of marketing, communication, and user experience (UX) strategies.',

  }, {
    name: 'Stacia Jones',
    profilePic: 'images/p-5.jpg',
    position: 'AI Scientest',
    rule: 'She has over 22 years of experience in the field of Machine Learning',

  },
];

const menu = document.getElementById('hamburger');
const header = document.getElementById('main-header');
const mainNav = document.getElementById('main-nav');
const teamWrapper = document.getElementById('team-container');
const sticky = header.offsetTop;


function toggleMenu() {
  header.classList.toggle('menu-overlay');
  menu.classList.toggle('open');
  mainNav.classList.toggle('hide-menu');
}

const createTeamMembers = () => {
  let developers = '';
  teamMembers.forEach((dev) => {
    developers += `<div class="team">
  <img src="images/chess.jpg" alt="" class="chess-img">
  <img src="${dev.profilePic}"  alt= "${dev.name} profile" class="profile-img">
  <div class="team-descption">
      <h3 class="team-name"> ${dev.name} </h3>
      <p class="position">${dev.position}</p>
      <p class="rule"> ${dev.rule}</p>
  </div>
  </div>`;
  });
  teamWrapper.innerHTML = developers;
};

menu.addEventListener('click', toggleMenu);

createTeamMembers();