// import moment from 'moment'

const localSession = {
  username: 'albertoblaz',
  avatarUrl: 'https://avatars.slack-edge.com/2016-04-18/35512615170_341dd821da9224afd14f_512.jpg',
  // lastTimeLoggedIn: moment().utc(),
  lastTimeLoggedIn: new Date(),
}

function createSession () {
  return fetch('/session')
    .then(({ body }) => ({ session: localSession }))
    .catch((err) => { throw { err } })
}

export default {
  createSession,
}
