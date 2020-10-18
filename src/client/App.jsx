import React from 'react'
import {GlobalStyle, Theme, defaultThemesSet} from 'Styles'
import {BrowserRouter} from 'react-router-dom'
import {Header, Footer} from './PageWrappers'
import MediaQueryProvider from 'plugins/MediaQuery'
import PageWrap from './Components/PageWrap'
import MainPanel from './Sections/MainPanel'

const App = () => {
	return (
		<Theme theme={defaultThemesSet}>
			<MediaQueryProvider>
				<BrowserRouter>
					<GlobalStyle />
					<PageWrap header={<Header />} footer={<Footer />}>
						<MainPanel />
					</PageWrap>
				</BrowserRouter>
			</MediaQueryProvider>
		</Theme>
	)
}

export default App
