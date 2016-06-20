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

const _owner = (i, j) => {
  if (0 <= i && i <= 2 && j === 0) return null
  if (2 <= j && j <= 4 && i === 9) return null

  if (
    2 < i && i < 6 &&
    0 < j && j < 4
  ) return 'NPC'

  if (i < 3) {
    return j < 2 ? 'albertoblaz'
      : j < 3 ? 'messi'
      : 'cristiano'
  } else if (i < 6 && j === 0) {
    return 'zidane'
  } else if (i < 6 && j === 4) {
    return 'iniesta'
  } else {
    return 'ibrahimovic'
  }
}

function _getProvincesLocally () {
  const provinces = {}
  _.range(10).map((i) =>
    _.range(5).map((j) => {
      const id = `${i}${j}`
      provinces[id] = {
        id,
        owner: _owner(i, j),
        name: ProvincesNames[id],
        resources: {
          money: parseInt(Math.random() * 25),
          manpower: parseInt(Math.random() * 25),
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
