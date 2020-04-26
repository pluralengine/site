/* eslint-disable no-console */

import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

import CityPin from './CityPin'
import styles from './Map.module.scss'
import { allMarkers } from './markers'

/**
* @author zilahir
* @function Map
* */

const Maps = () => {
	function renderCityMarker(restaurant, index) {
		return (
			<Marker key={`marker-${index}`} longitude={restaurant.longitude} latitude={restaurant.latitude}>
				<CityPin size={20} onClick={() => console.debug('city city')} />
			</Marker>
		)
	}
	console.debug('mapToken', process.env)
	return (
		<div className={styles.mapWrapper}>
			<ReactMapGL
				width="100%"
				height={600}
				latitude={61.49911}
				longitude={23.78712}
				zoom={12}
				MapboxAccessToken={process.env.GATSBY_MAPBOX_ACCESS_TOKEN}
			>
				{
					allMarkers.partners.map(((rest, i) => (
						renderCityMarker(rest, i)
					)))
				}

			</ReactMapGL>
		</div>
	)
}

export default Maps
