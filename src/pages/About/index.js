import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import TopHeader from '../../components/TopHeader'
import Footer from '../../components/Footer'
import Section from '../../components/common/Section'
import HeaderH1 from '../../components/common/HeaderH1'
import HeaderH2 from '../../components/common/HeaderH2'
import Paragraph from '../../components/common/Paragraph'
import Image from '../../components/common/Image'
import Maps from '../../components/Map'
import Team from '../../components/Team'
import GirlsEatingOut from '../../assets/img/girls_eating.png'
import DownArrow from '../../components/common/Svg/index'
import styles from './About.module.scss'

/**
* @author zilahir
* @function About
* */

const AboutPage = ({ data }) => (
	<Grid
		fluid
		className={styles.fluid}
	>
		<TopHeader />
		<Row>
			<Col lg={12} xs={12}>
				<div className={styles.aboutusContainer}>
					<Section
						imagePos="left"
						hero
						lgOffsetLeft={0}
						textContainer={styles.textContainer}
						alignSelfRight="center"
					>
						<HeaderH2 className={styles.subHeader} key="sub-header-top" text="lorem" />
						<HeaderH1 key="header" text="Get to know us" />
						<Paragraph text="Veniam tempor exercitation consectetur deserunt esse excepteur elit adipisicing. Officia laboris id tempor aliquip ullamco ullamco amet ex occaecat est eiusmod. Magna nisi veniam eiusmod nostrud aliqua aliqua reprehenderit anim. Excepteur est cillum sunt deserunt nostrud laborum in dolor nostrud ut Lorem nisi. Ut deserunt officia laborum proident ad qui consectetur dolore incididunt. Cupidatat nulla ea id irure labore consequat laboris cupidatat reprehenderit qui pariatur laboris magna." />
						<Image className={styles.image} maxWidth={550} key="image" alt="eating out" src={GirlsEatingOut} />
						<div className={styles.arrowContainer}>
							<DownArrow />
						</div>
					</Section>
				</div>
			</Col>
		</Row>
		<Row>
			<Col lg={12} xs={12}>
				<div className={styles.aboutusContainer}>
					<Section
						imagePos="right"
						leftLg={3}
						rightLg={5}
						textContainer={styles.textContainer}
						xsOffset={0}
					>
						<HeaderH2 className={styles.subHeader} key="sub-header-bottom" text="This is who we are" />
						<HeaderH1 text="Our story" />
						<Paragraph className={styles.paragraph} key="image" text="Veniam tempor exercitation consectetur deserunt esse excepteur elit adipisicing. Officia laboris id tempor aliquip ullamco ullamco amet ex occaecat est eiusmod. Magna nisi veniam eiusmod nostrud aliqua aliqua reprehenderit anim. Excepteur est cillum sunt deserunt nostrud laborum in dolor nostrud ut Lorem nisi. Ut deserunt officia laborum proident ad qui consectetur dolore incididunt. Cupidatat nulla ea id irure labore consequat laboris cupidatat reprehenderit qui pariatur laboris magna." />
					</Section>
				</div>
			</Col>
		</Row>
		<Row>
			<Col lg={12} xs={12}>
				<div className={`${styles.aboutusContainer}`}>
					<Team teamMembers={data.team.teams} />
				</div>
			</Col>
		</Row>
		<Row>
			<Col lg={12} xs={12}>
				<div className={styles.mapContainer}>
					<Maps />
				</div>
			</Col>
		</Row>
		<Footer />
	</Grid>
)

export default AboutPage

AboutPage.defaultProps = {
	data: {},
}

AboutPage.propTypes = {
	data: PropTypes.objectOf([
		PropTypes.number,
		PropTypes.string,
	]),
}

export const getAllTeamMembers = graphql`
  query {
	team {
		teams {
		id
		name
		}
	}
}
`
