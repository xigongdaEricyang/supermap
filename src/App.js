import React from 'react';
import { hot } from 'react-hot-loader';
import SidebarNav from '@components/sidebar';
import MainContent from '@components/maincontent';
import { Layout, Menu } from 'antd';

const { Content, Sider, Footer } = Layout;

import styles from './App.less';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentMenu: {
				key: 'fq-overview',
				keyPath: ['fq-overview', 'fq']
			}
		}
	} 

	onMenuClick = ({ key, keyPath }) => {
		console.log('11', key, keyPath);
		this.setState({
			currentMenu: { key, keyPath }
		});
	}

	render() {
		const { currentMenu } = this.state;
		return (
			<Layout
				style={{
					height: document.body.offsetHeight,
					overflow: 'scroll',
					minHeight: 800
				}}
			>
				<Layout>
					<Sider
						breakpoint='lg'
						collapsedWidth='0'
						collapsible
						onBreakpoint={broken => {
							console.log(broken);
						}}
						onCollapse={(collapsed, type) => {
							console.log(collapsed, type);
						}}
						width={200}
					>
						<SidebarNav onMenuClick={this.onMenuClick}/>
					</Sider>
					<Layout style={{ padding: '0 24px 24px' }}>
						<Content
							style={{
								background: '#fff',
								padding: 24,
								margin: 0,
								minHeight: 280
							}}
						>
							<MainContent currentMenu={currentMenu} />
						</Content>
					</Layout>
					<Sider width={250} />
				</Layout>
			</Layout>
		);
	}
}

export default hot(module)(App);
