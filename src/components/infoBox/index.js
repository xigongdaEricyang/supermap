import React, { Component } from 'react'
import {Input} from 'antd'
import styles from './index.less';

class InfoBox extends Component {
  static defaultProps = {
    features: []
  }
  constructor(props) {
    super(props);
  }

  render() {
    const { features } = this.props;
    return (
      <div>
        {
          Object.keys(features).map(k => (
            <div className={styles.feature} key={k}>
              <div className={styles.key}>{k}:</div> <Input value={features[k]} className={styles.input} />
            </div>
          ))
        }
      </div>
    );
  }
}

export default InfoBox;