const images = {
  'albertoblaz': 'https://avatars.slack-edge.com/2016-04-18/35512615170_341dd821da9224afd14f_512.jpg',
  'adriantom3': 'https://secure.gravatar.com/avatar/4215252d9f8a462f962cd57eee3e7d53.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0017-512.png',
}

const lookupImage = (username) => images[username]

const localMessages = [
  {
    id: 1293813102301319329121,
    username: 'albertoblaz',
    text: 'Hello World',
    img: lookupImage('albertoblaz'),
    timestamp: new Date(),
  },
  {
    id: 1309090590190912091090,
    username: 'adriantom3',
    text: 'Hello World 3',
    img: lookupImage('adriantom3'),
    timestamp: new Date(),
  },
]

function getAllMessages () {
  return fetch('/session')
    .then(({ body }) => ({ messages: localMessages }))
    .catch((err) => { throw { err } })
}

function sendText () {
  //
}

function receiveText () {
  //
}

export default {
  getAllMessages,
  sendText,
  receiveText,
}
