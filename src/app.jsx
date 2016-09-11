import React from 'react'
import { Drawer, Container, Block, Fixed } from 'rebass'
import Header from './header'
import Intro from './intro'
import GitHubLink from './github'
import theme from './theme.js'

export default class App extends React.Component {
	static childContextTypes = {
		rebass: React.PropTypes.object,
		reactIconBase: React.PropTypes.object
	}

	constructor(props) {
		super(props)
	}

	getChildContext() {
		return {
			rebass: theme,
			reactIconBase: { size: 20 }
		}
	}
	render() {
		return <div style={{ fontFamily: theme.fontFamily, color: theme.color, fontWeight: 300 }}>
			<GitHubLink />
			<Header />
			<Container>
				<Intro />
			</Container>
		</div>
	}
}
