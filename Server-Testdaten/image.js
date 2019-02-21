const getObjectID = require('../../helper.js')

const images = [
  {
    user: getObjectID('user1'),
    question: getObjectID('question4'),
    _id: getObjectID('image1'),
    creationDate: new Date(),
    name: 'likeIcon',
    type: 'image/png',
    hash: '0258e9db051e7f2129ae5f6ba3cf3388c2fb39f5',
    tags: [],
    url: 'static/images/default/likeIcon.png',
  },
  {
    user: getObjectID('user1'),
    question: getObjectID('question5'),
    _id: getObjectID('image1.1'),
    creationDate: new Date(),
    name: 'likeIcon',
    type: 'image/png',
    hash: '0258e9db051e7f2129ae5f6ba3cf3388c2fb39f5',
    tags: [],
    url: 'static/images/default/likeIcon.png',
  },
  {
    user: getObjectID('user2'),
    question: getObjectID('question3'),
    _id: getObjectID('image1.2'),
    creationDate: new Date(),
    name: 'likeIcon',
    type: 'image/png',
    hash: '0258e9db051e7f2129ae5f6ba3cf3388c2fb39f5',
    tags: [],
    url: 'static/images/default/likeIcon.png',
  },
  {
    user: getObjectID('user2'),
    question: getObjectID('question6'),
    _id: getObjectID('image1.3'),
    creationDate: new Date(),
    name: 'likeIcon',
    type: 'image/png',
    hash: '0258e9db051e7f2129ae5f6ba3cf3388c2fb39f5',
    tags: [],
    url: 'static/images/default/likeIcon.png',
  },
  {
    user: getObjectID('user2'),
    question: getObjectID('question7'),
    _id: getObjectID('image1.4'),
    creationDate: new Date(),
    name: 'likeIcon',
    type: 'image/png',
    hash: '0258e9db051e7f2129ae5f6ba3cf3388c2fb39f5',
    tags: [],
    url: 'static/images/default/likeIcon.png',
  },

  {
    user: getObjectID('user2'),
    question: getObjectID('question7'),
    _id: getObjectID('image12'),
    creationDate: new Date(),
    name: 'likeIcon',
    type: 'image/png',
    hash: '0258e9db051e7f2129ae5f6ba3cf3388c2fb39f5',
    tags: [],
    url: 'static/images/default/mobile.jpg',
  },
  {
    user: getObjectID('user2'),
    question: getObjectID('question8'),
    _id: getObjectID('image1.5'),
    creationDate: new Date(),
    name: 'likeIcon',
    type: 'image/png',
    hash: '0258e9db051e7f2129ae5f6ba3cf3388c2fb39f5',
    tags: [],
    url: 'static/images/default/likeIcon.png',
  },
  {
    user: getObjectID('user2'),
    survey: getObjectID('survey2'),
    _id: getObjectID('image1.6'),
    creationDate: new Date(),
    name: 'likeIcon',
    type: 'image/png',
    hash: '0258e9db051e7f2129ae5f6ba3cf3388c2fb39f5',
    tags: [],
    url: 'static/images/default/likeIcon.png',
  },
  {
    user: getObjectID('user2'),
    question: getObjectID('question6'),
    _id: getObjectID('image2'),
    creationDate: new Date(),
    name: 'dislikeicon',
    type: 'image/png',
    hash: 'c8ce0922b686d0bcd5eff0f41ff12cd5dffbd779',
    tags: [],
    url: 'static/images/default/dislikeIcon.png',
  },
  {
    user: getObjectID('user2'),
    question: getObjectID('question7'),
    _id: getObjectID('image2.1'),
    creationDate: new Date(),
    name: 'dislikeicon',
    type: 'image/png',
    hash: 'c8ce0922b686d0bcd5eff0f41ff12cd5dffbd779',
    tags: [],
    url: 'static/images/default/dislikeIcon.png',
  },
  {
    user: getObjectID('user2'),
    question: getObjectID('question8'),
    _id: getObjectID('image2.2'),
    creationDate: new Date(),
    name: 'dislikeicon',
    type: 'image/png',
    hash: 'c8ce0922b686d0bcd5eff0f41ff12cd5dffbd779',
    tags: [],
    url: 'static/images/default/dislikeIcon.png',
  },
  {
    user: getObjectID('user2'),
    survey: getObjectID('survey2'),
    _id: getObjectID('image2.3'),
    creationDate: new Date(),
    name: 'dislikeicon',
    type: 'image/png',
    hash: 'c8ce0922b686d0bcd5eff0f41ff12cd5dffbd779',
    tags: [],
    url: 'static/images/default/dislikeIcon.png',
  },
  {
    user: getObjectID('user1'),
    question: getObjectID('question1'),
    choice: getObjectID('choice1A'),
    _id: getObjectID('image3'),
    creationDate: new Date(),
    name: 'Auswahl A',
    type: 'image/png',
    hash: '4f43e19775fcb11264f47be83ab16a45c542dc84',
    tags: [],
    url: 'static/images/default/happy.png',
  },
  {
    user: getObjectID('user1'),
    question: getObjectID('question1'),
    choice: getObjectID('choice1B'),
    _id: getObjectID('image4'),
    creationDate: new Date(),
    name: 'Auswahl B',
    type: 'image/png',
    hash: 'c30d42f225df1be08eddc3bc178b940f9f08305f',
    tags: [],
    url: 'static/images/default/angry.png',
  },
  {
    user: getObjectID('user1'),
    question: getObjectID('question11'),
    item: getObjectID('item11B'),
    _id: getObjectID('image5'),
    creationDate: new Date(),
    name: 'Zusatz 1',
    type: 'image/png',
    hash: '8277394c7b5ff16d3f3cae6f0c0d3b4b2e7e6936',
    tags: [],
    url: 'static/images/default/tisch.jpg',
  },
  {
    user: getObjectID('user1'),
    question: getObjectID('question11'),
    item: getObjectID('item11C'),
    _id: getObjectID('image50'),
    creationDate: new Date(),
    name: 'Zusatz 1',
    type: 'image/png',
    hash: '8277394c7b5ff16d3f3cae6f0c0d3b4b2e7e6936',
    tags: [],
    url: 'static/images/default/friends.jpg',
  },
  {
    user: getObjectID('user1'),
    question: getObjectID('question12'),
    item: getObjectID('item12C'),
    _id: getObjectID('image12.1'),
    creationDate: new Date(),
    name: 'Zusatz 1',
    type: 'image/png',
    hash: '8277394c7b5ff16d3f3cae6f0c0d3b4b2e7e6936',
    tags: [],
    url: 'static/images/default/smartphone.jpg',
  },

  {
    user: getObjectID('user1'),
    question: getObjectID('question12'),
    item: getObjectID('item12A'),
    _id: getObjectID('image5.1'),
    creationDate: new Date(),
    name: 'Zusatz 1',
    type: 'image/png',
    hash: '8277394c7b5ff16d3f3cae6f0c0d3b4b2e7e6936',
    tags: [],
    url: 'static/images/default/saft1.jpg',
  },
  {
    user: getObjectID('user2'),
    question: getObjectID('question2'),
    item: getObjectID('item2B'),
    _id: getObjectID('image5.2'),
    creationDate: new Date(),
    name: 'Zusatz 1',
    type: 'image/png',
    hash: '8277394c7b5ff16d3f3cae6f0c0d3b4b2e7e6936',
    tags: [],
    url: 'static/images/default/saft1.jpg',
  },
  {
    user: getObjectID('user2'),
    question: getObjectID('question9'),
    item: getObjectID('item9A'),
    _id: getObjectID('image5.3'),
    creationDate: new Date(),
    name: 'Zusatz 1',
    type: 'image/png',
    hash: '8277394c7b5ff16d3f3cae6f0c0d3b4b2e7e6936',
    tags: [],
    url: 'static/images/default/saft1.jpeg',
  },

  {
    user: getObjectID('user2'),
    question: getObjectID('question9'),
    item: getObjectID('item9C'),
    _id: getObjectID('image10'),
    creationDate: new Date(),
    name: 'Zusatz 1',
    type: 'image/png',
    hash: '8277394c7b5ff16d3f3cae6f0c0d3b4b2e7e6936',
    tags: [],
    url: 'static/images/default/smartphone.jpg',
  },
  {
    user: getObjectID('user2'),
    question: getObjectID('question9'),
    item: getObjectID('item9D'),
    _id: getObjectID('image11'),
    creationDate: new Date(),
    name: 'Zusatz 1',
    type: 'image/png',
    hash: '8277394c7b5ff16d3f3cae6f0c0d3b4b2e7e6936',
    tags: [],
    url: 'static/images/default/mobile.jpg',
  },
  {
    user: getObjectID('user1'),
    survey: getObjectID('survey1'),
    _id: getObjectID('image5.4'),
    creationDate: new Date(),
    name: 'Zusatz 1',
    type: 'image/png',
    hash: '8277394c7b5ff16d3f3cae6f0c0d3b4b2e7e6936',
    tags: [],
    url: 'static/images/default/saft1.jpeg',
  },
  {
    user: getObjectID('user2'),
    survey: getObjectID('survey2'),
    _id: getObjectID('image5.5'),
    creationDate: new Date(),
    name: 'Zusatz 1',
    type: 'image/png',
    hash: '8277394c7b5ff16d3f3cae6f0c0d3b4b2e7e6936',
    tags: [],
    url: 'static/images/default/saft1.jpeg',
  },
  {
    user: getObjectID('user1'),
    question: getObjectID('question1'),
    item: getObjectID('item11A'),
    _id: getObjectID('image6'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/christmas.jpg',
  },
  {
    user: getObjectID('user1'),
    question: getObjectID('question12'),
    item: getObjectID('item12B'),
    _id: getObjectID('image6.1'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/eval2.jpeg',
  },

  {
    user: getObjectID('user1'),
    question: getObjectID('question4'),
    item: getObjectID('item44A'),
    _id: getObjectID('image44A'),
    creationDate: new Date(),
    name: 'Zusatz 1',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/group.jpg',
  },
  {
    user: getObjectID('user1'),
    question: getObjectID('question4'),
    item: getObjectID('item44B'),
    _id: getObjectID('image44B'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/orga.jpg',
  },

  {
    user: getObjectID('user1'),
    question: getObjectID('question5'),
    item: getObjectID('item55A'),
    _id: getObjectID('image55A'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/board-unten.jpg',
  },
  {
    user: getObjectID('user1'),
    question: getObjectID('question5'),
    item: getObjectID('item55B'),
    _id: getObjectID('image55B'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/board-middle.jpg',
  },
  {
    user: getObjectID('user1'),
    question: getObjectID('question5'),
    item: getObjectID('item55C'),
    _id: getObjectID('image55C'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/board-presentation.jpg',
  },

  {
    user: getObjectID('user1'),
    question: getObjectID('question10'),
    item: getObjectID('item100A'),
    _id: getObjectID('image100A'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/risk.jpg',
  },

  {
    user: getObjectID('user1'),
    question: getObjectID('question10'),
    item: getObjectID('item100B'),
    _id: getObjectID('image100B'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/superman.jpg',
  },

  {
    user: getObjectID('user1'),
    question: getObjectID('question11'),
    item: getObjectID('item111A'),
    _id: getObjectID('image111A'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/tisch.jpg',
  },
  {
    user: getObjectID('user1'),
    question: getObjectID('question11'),
    item: getObjectID('item111B'),
    _id: getObjectID('image111B'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/zwei.jpg',
  },
  {
    user: getObjectID('user1'),
    question: getObjectID('question12'),
    item: getObjectID('item122A'),
    _id: getObjectID('image122A'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/rocket.jpg',
  },
  {
    user: getObjectID('user1'),
    question: getObjectID('question12'),
    item: getObjectID('item122B'),
    _id: getObjectID('image122B'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/maker.jpg',
  },
  {
    user: getObjectID('user1'),
    question: getObjectID('question12'),
    item: getObjectID('item122C'),
    _id: getObjectID('image122C'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/males.jpg',
  },
  {
    user: getObjectID('user1'),
    question: getObjectID('question12'),
    item: getObjectID('item122D'),
    _id: getObjectID('image122D'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/team.jpg',
  },
  {
    user: getObjectID('user2'),
    question: getObjectID('question2'),
    item: getObjectID('item2A'),
    _id: getObjectID('image6.2'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/eval2.jpeg',
  },
  {
    user: getObjectID('user2'),
    question: getObjectID('question9'),
    item: getObjectID('item9B'),
    _id: getObjectID('image6.3'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/eval2.jpeg',
  },
  {
    user: getObjectID('user1'),
    survey: getObjectID('survey1'),
    _id: getObjectID('image6.4'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/eval2.jpeg',
  },
  {
    user: getObjectID('user2'),
    survey: getObjectID('survey2'),
    _id: getObjectID('image6.5'),
    creationDate: new Date(),
    name: 'Zusatz 2',
    type: 'image/png',
    hash: '4b720822aa2c369714b652f7868a1a04b13543b5',
    tags: [],
    url: 'static/images/default/eval2.jpeg',
  },
]

module.exports = images
