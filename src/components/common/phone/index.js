import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Waypoint } from 'react-waypoint'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax'
import { useMediaQuery } from 'react-responsive'

import redStars from '../../../assets/img/misc/red_starts.svg'
import '@zilahir/html5-device-mockups/dist/device-mockups.css'
import styles from './Phone.module.scss'

/**
* @author zilahri,martincserep
* @function Phone
* */

const PurleWrapper = styled.div`
	&:before {
		content: '';
		background-image: url(${props => props.purpleImages});
		position: absolute;
		width: 300px;
		height: 200px;
		top: 0;
		left: 50px;
		background-repeat: no-repeat;
	}
	.device-wrapper {
		padding-top: 50px;
	}
`

const Phone = props => {
	const {
		children,
		className,
		animationEnd,
		secondaryImage,
		secondaryImageZoom,
	} = props
	const [toggle, setToggle] = useState({
		height: '200px',
		overflow: 'hidden',
	})
	const [style, setStyles] = useState({})
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
	const isTabletOrMobileDevice = useMediaQuery({
		query: '(max-device-width: 1224px)',
	})
	const [animationEndClass, setAnimationEnd] = useState()
	function togglePhone() {
		setToggle({
			height: '100%',
		})
		setAnimationEnd(animationEnd)
	}

	useEffect(() => {
		if (!isTabletOrMobile && !isTabletOrMobileDevice) {
			setStyles({
				height: '400px',
				width: '600px',
				position: 'absolute',
				top: '50px',
			})
		} else {
			setStyles({
				height: '400px',
				width: '600px',
				position: 'absolute',
				top: '0px',
				left: '-10px',
			})
		}
	}, [isTabletOrMobile, isTabletOrMobileDevice])

	return (
		<Waypoint
			onEnter={() => togglePhone()}
			bottomOffset={600}
		>
			<PurleWrapper
				className={styles.phone}
				style={
					toggle
				}
			>
				<Parallax
					bgImage={
						secondaryImage
					}
					strength={300}
					style={style}
					bgImageStyle={{
						position: 'absolute',
						width: '600px',
						height: '400px',
						zoom: secondaryImageZoom,
					}}
				/>
				<motion.div
					initial={{ x: 0 }}
					animate={{ x: 100 }}
				/>
				<div className="device-wrapper">
					<div className={`device ${className} ${animationEndClass}`} data-device="iPhoneX" data-orientation="portrait" data-color="dark">
						<div className="screen">
							{children}
						</div>
					</div>
				</div>
			</PurleWrapper>
		</Waypoint>
	)
}

Phone.defaultProps = {
	animationEnd: '',
	className: '',
	secondaryImage: redStars,
	secondaryImageZoom: 1,
}

Phone.propTypes = {
	animationEnd: PropTypes.string,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	secondaryImage: PropTypes.string,
	secondaryImageZoom: PropTypes.number,
}

export default Phone
