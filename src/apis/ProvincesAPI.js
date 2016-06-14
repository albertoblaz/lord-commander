import _ from 'lodash'
import fetch from 'isomorphic-fetch'

import ProvincesNames from '../constants/ProvincesNames'

function _getProvincesLocally () {
  const provinces = {}
  _.range(5).map((i) =>
    _.range(5).map((j) => {
      const id = `${i}${j}`
      provinces[id] = {
        id,
        owner: Math.random() > 0.5 ? 'albertoblaz' : 'adriantom3',
        name: ProvincesNames[id],
        resources: {
          money: Math.random() * 25,
          manpower: Math.random() * 25,
        },
      }
      return id
    })
  )
  return { provinces }
}

function getProvinces () {
  return fetch('/provinces')
    // .then(({ body }) => ({ provinces: body }))
    .then(({ body }) => _getProvincesLocally())
    .catch((err) => { throw { err } })
}

export default {
  getProvinces,
}
