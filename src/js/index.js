const mobileMenu = document.querySelector('.mobile-menu i');
const menu = document.querySelectorAll('.menu-mobile,.mobile-menu i');

const toogleMenu = () => {
  menu[1].classList.toggle('hideMenu');
};

menu.forEach((list) => {
  list.addEventListener('click', () => toogleMenu());
});

const setBg = (sy) => {
  if (sy > 60) {
    mobileMenu.style.background = '#fff';
    mobileMenu.style.padding = '0.5rem';
    mobileMenu.style.borderRadius = '50%';
  } else {
    mobileMenu.style.background = 'none';
  }
};

window.addEventListener('scroll', () => setBg(window.scrollY));

const guests = [
  {
    name: 'Joel Houston',
    title: 'Worship Leader, Guitarist, Keyboard, Composer',
    description:
      'Joel is the oldest child of the Hillsong Church founding pastors Brian and Bobbie Houston and grandson of pastor Frank Houston',
    image: 'assets/images/jo.jpg',
  },
  {
    name: 'Jad Gillies',
    title:
      "Worship Leader's",
    description:
      " Jad has been an integral part of the Hillsong UNITED team for over a decade. He's a songwriter and one of the most senior worship leaders on team.",
    image: 'assets/images/jad.jpeg',
  },
  {
    name: 'Brooke Fraser Ligertwood',
    title: 'Worship Leader, Worship Team Leader',
    description:
      'Fraser became a member of the Australian Christian music group Hillsong Worship from 2005 to 2010; she rejoined the group in 2016 since she was the songwriter and lead vocalist.',
    image: 'assets/images/brook.jpeg',
  },
  {
    name: 'Taya Smith-Gaukrodger',
    title: 'Worship Leader, Composer"',
    description:
      'Taya is most passionate about worship that points people to Jesus and her hope is to lead people to worship more authentically and passionately as they discover more about Him.',
    image: 'assets/images/taya.jpeg',
  },
  {
    name: 'Aodhán King',
    title: 'Worship Leader, Composer',
    description:
      'Aodhan began teaching himself how to play guitar. He describes his writing as an extension of his worship to Jesus and his desire is that the songs he writes would speak to people who are yet to discover Him as Lord and Saviour.',
    image: 'assets/images/Aodhán.jpeg',
  },
  {
    name: 'Matt Crocker',
    title: 'Worship Leader, Guitarist, Keyboard, Composer',
    description:
      'Matt Crocker devotion to and investment into the worship team, songwriting and leading worship has resulted in songs that are sung all over the world, touching hearts and transforming lives.',
    image: 'assets/images/Matt.jpeg',
  },
  {
    name: 'Reuben Morgan',
    title: 'Worship Leader, Guitarist',
    description:
      'Reuben Morgan was a worship pastor at Hillsong Church in Sydney, Australia. He has written songs such as "Eagles Wings", "Hear Our Praises", "I Give You My Heart", "My Redeemer Lives" and "Mighty to Save"',
    image: 'assets/images/Reuben.png',
  },
  {
    name: 'Jonathon Douglass',
    title: ' Worship Leader, Composer',
    description:
      'Jonathon Douglass or ‘JD’ (as he is known by his childhood nickname) is one of Hillsong Church’s foremost worship leaders and Creative Pastors, and has been a part of the UNITED team since its beginning.',
    image: 'assets/images/Jonathon.png',
  },
];

const guestsList = document.querySelector('.guests-list');

guests.forEach((guest, i) => {
  const guestDiv = document.createElement('div');
  guestDiv.classList.add('guest-div');
  if (i > 1) {
    guestDiv.classList.add('hide');
  }
  const img = document.createElement('img');
  img.classList.add('guest-img');
  img.src = guest.image;
  img.alt = `${guest.name}'s picture`;

  const imgCover = document.createElement('img');
  imgCover.classList.add('img-cover');
  imgCover.src = 'assets/images/bg-art.png';
  imgCover.alt = 'background tile';

  const guestDescription = document.createElement('div');
  guestDescription.classList.add('guest-description');

  const guestName = document.createElement('h3');
  guestName.classList.add('guest-name');
  guestName.innerHTML = guest.name;

  const guestTitle = document.createElement('h3');
  guestTitle.classList.add('guest-title');
  guestTitle.innerHTML = guest.title;

  const guestDesc = document.createElement('h3');
  guestDesc.classList.add('guest-desc');
  guestDesc.innerHTML = guest.description;

  guestDescription.appendChild(guestName);
  guestDescription.appendChild(guestTitle);
  guestDescription.appendChild(guestDesc);

  guestDiv.appendChild(imgCover);
  guestDiv.appendChild(img);
  guestDiv.appendChild(guestDescription);

  guestsList.appendChild(guestDiv);
});

const moreGuests = document.createElement('button');
moreGuests.classList.add('more');
moreGuests.innerHTML = `
More <span><i class="fa-solid fa-chevron-down"></i><span>
`;

const showMore = () => {
  const hidden = document.querySelectorAll('.hide');
  hidden.forEach((guest) => {
    guest.classList.toggle('hide');
  });
  moreGuests.classList.add('hide');
};

moreGuests.addEventListener('click', () => showMore());

guestsList.appendChild(moreGuests);
