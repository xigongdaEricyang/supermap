import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.less';


class Modal extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.renderModal();
  }


  renderModal = () => {
    // const { modalId } = this.props;
    var scene_url = 'http://localhost:8090/iserver/services/3D-FengQingJie/rest/realspace';
    var data_url = 'http://localhost:8090/iserver/services/data-FengQingJie/rest/data';
    const viewer = new window.Cesium.Viewer('cesium_div');
    // var infoboxContainer = document.getElementById("bubble");
    viewer.customInfobox = undefined;
    //气泡初始化
    var scene = viewer.scene;
    //按三维场景打开，默认打开三维服务下的所有图层
    var promise = scene.open(scene_url);

    window.Cesium.when(promise, function (layers) {
        var layer = scene.layers.find('date');
        layer.setQueryParameter({
            url: data_url,
            dataSourceName: layer._name,
            isMerge: true
        });
    });

    // var table = document.getElementById("tab");
    viewer.pickEvent.addEventListener( (feature) => {
        // for (i = table.rows.length - 1; i > -1; i--) {
        //     table.deleteRow(i);
        //    }
          this.props.onDetailClick(feature);
        });


  }

  render() {
    return (
      <>
      <div id='cesium_div' className={styles.cesiumDiv}>
      </div>
      </>
    );
  }
}

export default Modal;