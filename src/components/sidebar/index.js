import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import styles from './index.less';
import modalConfig from '../../modal.config';

const { SubMenu } = Menu;

class SidebarNav extends Component {
	constructor(props) {
		super(props);
	}

	onClick = ({ item, key, keyPath }) => {
		this.props.onMenuClick({ key, keyPath });
	};

	render() {
		return (
			<div className={styles.sidebarNav}>
				<div className={styles.logo} />
				<div className={styles.menus}>
					<Menu
						theme='dark'
						defaultSelectedKeys={['1']}
						mode='inline'
						onClick={this.onClick}
					>
						{modalConfig.map(c => (
							<SubMenu
								key={c.id}
								title={
									<span>
										<Icon type={c.icon} />
										<span>{c.title}</span>
									</span>
								}
							>	
								{
									c.items.map(item => (
										<Menu.Item key={item.id}>{item.name}</Menu.Item>
									))
								}
							</SubMenu>
						))}
					</Menu>
				</div>
			</div>
		);
	}
}

export default SidebarNav;
