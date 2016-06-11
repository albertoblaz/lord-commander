import React, { PropTypes, Component } from 'react'
import _ from 'lodash'
import L from 'leaflet'

class MapCanvas extends Component {
  componentDidMount () {
    // function changeMapInfo (info) {
    //   $('#map__panel-image').removeClass().addClass(info.class)
    //   $('.location-title').text(info.title)
    //   $('.location-description').text(info.description)
    //   $('.location-founded').text(info.founded)
    //   $('.location-literacy').text(info.literacy)
    //   $('.location-beast-population').text(info.beastPopulation)
    //   $('.location-beast-expectancy').text(info.beastLifeExpectancy)
    //   $('.location-human-population').text(info.humanPopulation)
    //   $('.location-human-expectancy').text(info.humanLifeExpectancy)
    //   $('.location-ruler').text(info.ruler)
    //   $('.map__panel').addClass('show')
    // }

    // function showMapInfo() {
    //   $('.map__panel').removeClass('show')
    //   setTimeout(function() { changeMapInfo(mapInfo.bastardTier) }, 500);
    // }

    let map = L.map('map', {
      crs: L.CRS.Simple,
      center: [0, 0],
      zoom: 2,
      minZoom: 0,
      maxZoom: 2,
      attributionControl: false,
      scrollWheelZoom: false,
      touchZoom: false,
    })

    const w = 5000
    const h = 3389
    // const url = '/public/map/map-compressed.png'
    const url = 'http://www.tyrannygame.com/assets/images/sections/map/map-compressed-1413e00a.png'

    // calculate the edges of the image, in coordinate space
    const southWest = map.unproject([0, h], map.getMaxZoom() - 1)
    const northEast = map.unproject([w, 0], map.getMaxZoom() - 1)

    const bounds = new L.LatLngBounds(southWest, northEast)

    map.setMaxBounds(bounds)
    map.fitBounds(bounds)

    // add the image overlay so that it covers the entire map
    L.imageOverlay(url, bounds).addTo(map)

    // Bastard Tier
    const regionBastardTier = new L.LatLngBounds(
      map.unproject([2011, 1228], map.getMaxZoom() - 1), // Down-Right
      map.unproject([1223, 867], map.getMaxZoom() - 1) // Up-Left
    )

    L.rectangle(regionBastardTier, {
      color: 'transparent',
      weight: 1,
      className: 'bastardTier',
      customProperty: 'bastardTier',
    }).on('click', () => {
      // showMapInfo(this.options.customProperty)
      console.log('Clicked Bastard Tier')
    }).addTo(map)

    // The Contested Lands
    const regionTheContestedLands = [
      map.unproject([2165, 1573], map.getMaxZoom() - 1),
      map.unproject([2980, 1613], map.getMaxZoom() - 1),
      map.unproject([2980, 1858], map.getMaxZoom() - 1),
      map.unproject([2485, 1905], map.getMaxZoom() - 1),
      map.unproject([2052, 1812], map.getMaxZoom() - 1),
    ]

    L.polygon(regionTheContestedLands, {
      color: 'transparent',
      weight: 1,
      className: 'theContestedLands',
      customProperty: 'theContestedLands',
    }).on('click', () => {
      // showMapInfo(this.options.customProperty);
      console.log('Clicked The Contested Lands')
    }).addTo(map)

    // Haven
    const regionHaven = [
      map.unproject([1257, 1330], map.getMaxZoom() - 1),
      map.unproject([1565, 1330], map.getMaxZoom() - 1),
      map.unproject([1565, 1905], map.getMaxZoom() - 1),
      map.unproject([1200, 2208], map.getMaxZoom() - 1),
      map.unproject([1200, 2445], map.getMaxZoom() - 1),
      map.unproject([600, 2250], map.getMaxZoom() - 1),
    ]

    L.polygon(regionHaven, {
      color: 'transparent',
      weight: 1,
      className: 'haven',
      customProperty: 'haven',
    }).on('click', () => {
      // showMapInfo(this.options.customProperty);
      console.log('Clicked Haven')
    }).addTo(map)

    // Region Apex
    const regionApex = new L.LatLngBounds(
      map.unproject([2096, 1710], map.getMaxZoom() - 1), // Down-Right
      map.unproject([1600, 1240], map.getMaxZoom() - 1) // Up-Left
    )

    L.rectangle(regionApex, {
      color: 'transparent',
      weight: 1,
      className: 'apex',
      customProperty: 'apex',
    }).on('click', () => {
      // showMapInfo(this.options.customProperty);
      console.log('Clicked Apex')
    }).addTo(map)

    // Azure
    const regionAzure = [
      map.unproject([2325, 940], map.getMaxZoom() - 1),
      map.unproject([3234, 975], map.getMaxZoom() - 1),
      map.unproject([3234, 1365], map.getMaxZoom() - 1),
      map.unproject([2798, 1555], map.getMaxZoom() - 1),
      map.unproject([2118, 1525], map.getMaxZoom() - 1),
      map.unproject([2105, 1128], map.getMaxZoom() - 1),
    ]

    L.polygon(regionAzure, {
      color: 'transparent',
      weight: 1,
      className: 'azure',
      customProperty: 'azure',
    }).on('click', () => {
      // showMapInfo(this.options.customProperty);
      console.log('Clicked Azure')
    }).addTo(map)

    // Region Stalwart
    const regionStalwart = [
      map.unproject([2658, 1903], map.getMaxZoom() - 1),
      map.unproject([4156, 2714], map.getMaxZoom() - 1),
      map.unproject([2244, 2805], map.getMaxZoom() - 1),
      map.unproject([1767, 2615], map.getMaxZoom() - 1),
    ]

    L.polygon(regionStalwart, {
      color: 'transparent',
      weight: 1,
      className: 'stalwart',
      customProperty: 'stalwart',
    }).on('click', () => {
      // showMapInfo(this.options.customProperty);
      console.log('Clicked Stalwart')
    }).addTo(map)

    // $('.map__zoom-in').on('click', function() { map.zoomIn(0.5) });
    // $('.map__zoom-out').on('click', function() { map.zoomOut(0.5) });

    const regionMarkers = [
      {
        class: 'bastardTier',
        markerName: 'Bastard Tier',
        x: 1649,
        y: 889,
      },
      {
        class: 'theContestedLands',
        markerName: 'The Contested Lands',
        x: 2380,
        y: 1721,
      },
      {
        class: 'haven',
        markerName: 'Haven',
        x: 1327,
        y: 1721,
      },
      {
        class: 'apex',
        markerName: 'Apex',
        x: 1820,
        y: 1519,
      },
      {
        class: 'azure',
        markerName: 'Azure',
        x: 2784,
        y: 1352,
      },
    ]

    // $('.map__panel-close').on('click', () => { $('.map__panel').removeClass('show') })

    // function addMarkers () {
    //   regionMarkers.forEach((marker) => {
    //     const pos = map.unproject([marker.x * 2, marker.y * 2], map.getMaxZoom())
    //     const mark = L.marker(pos, {
    //       // icon: selectMapMarker(marker.class),
    //       customProperty: marker.class,
    //     })
    //     mark.on('click', () => {
    //       // showMapInfo(this.options.customProperty);
    //       console.log(this.options.customProperty)
    //     })
    //     mark.addTo(map)
    //   })
    // }

    // addMarkers()
  }

  render () {
    return (
      <div id="map-ui">
        <div id="map"></div>
      </div>
    )
  }
}

MapCanvas.propTypes = {
  provinces: PropTypes.object.isRequired,
}

export default MapCanvas
