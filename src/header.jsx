import React from 'react'
import { Flex, Box } from 'reflexbox'
import { Container, Media, Banner, Heading, Text, Button } from 'rebass'

const Header = () => (
	<Container style={{marginTop: 20}}>
		<div style={{display:'inline-block'}}>
		<img src="https://raw.githubusercontent.com/lukasmartinelli/mapolo/master/mapolo.png?token=ABOok7KCisCqYWjBtPVQ6ohPbFD8-T7eks5X3s4hwA%3D%3D" style={{maxWidth: 170}}/>
		</div>
		<div style={{marginTop: 10, marginLeft: 20, display:'inline-block', verticalAlign:'top'}}>
			<Heading size={1} big children='Mapolo' />
			<Text children='A visual Map designer for Mapbox GL' />
			<Box py={2}>
				<Button big children='Fund the project' />
				<Button style={{marginLeft: 10}} big children='Try the Demo' />
			</Box>
			<Box>
<iframe style={{border: 'none'}}src="https://ghbtns.com/github-btn.html?user=lukasmartinelli&repo=mapolo&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
			</Box>
		</div>
	</Container>
/*
  <Banner
    style={{
      minHeight: '75vh',
      paddingTop: 48,
      backgroundAttachment: 'fixed'
    }}
    backgroundImage='https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg'
    >
  </Banner>
*/
)

export default Header
