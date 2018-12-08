import React, { Component } from 'react';

import styles from './index.less';
import modalConfig from '../../modal.config';

class MainContent extends Component {
	static defaultProps = {
		currentMenu: {},
		modalTitle: '',
		menuTitle: '',
		modalId: '',
		menuId: ''
	};

	constructor(props) {
		super(props);
	}

	UNSAFE_componentWillMount() {
		this.getContentContext(this.props);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if(this.props.currentMenu != nextProps.currentMenu) {
			this.getContentContext(nextProps);
		}
	}

	getContentContext = props => {
		const { currentMenu } = props;
		const modalId = currentMenu.keyPath.slice(-1)[0];
		const menuId = currentMenu.key;
		let modalTitle = '';
		let menuTitle = '';
		modalConfig.forEach(c => {
			if (c.id == modalId) {
				modalTitle = c.title;
				c.items.forEach(item => {
					if (item.id == menuId) {
						menuTitle = item.name;
					}
				});
			}
		});
		this.setState({
			modalTitle,
			menuTitle,
			modalId,
			menuId
		});
	};

	render() {
		const { modalTitle, menuTitle, modalId, menuId } = this.state;
		return (
			<div className={styles.mainContent}>
				<div className={styles.title}>
					<h2>{modalTitle}--{menuTitle}</h2>
				</div>
				<div className={styles.content}>
					{menuTitle}--{modalId}--{menuId}
				</div>
			</div>
		);
	}
}

export default MainContent;
