import _ from 'lodash'
import fetch from 'isomorphic-fetch'

import ProvincesNames from '../constants/ProvincesNames'

const _randomTerrain = () => {
  const n = Math.random()
  return n > 0.75 ? 'plain'
    : n > 0.50 ? 'valley'
    : n > 0.25 ? 'mountain'
    : 'dessert'
}

function _getProvincesLocally () {
  const provinces = {}
  _.range(5).map((i) =>
    _.range(5).map((j) => {
      const id = `${i}${j}`
      provinces[id] = {
        id,
        owner: i < 3 || j < 1 ? 'albertoblaz' : 'adriantom3',
        name: ProvincesNames[id],
        resources: {
          money: Math.random() * 25,
          manpower: Math.random() * 25,
        },
        terrain: _randomTerrain(),
        underSiege: false,
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
