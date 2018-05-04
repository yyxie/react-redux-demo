import React from 'react';
import './build.less';

class Build extends React.Component {
  constructor(props) {
    super(props);
  }

  renderBuild = (buildData) => {
    buildData.map(() => {
      return <div>fff</div>
    })
  }

  render() {
    const {buildData} = this.props;
    return (
      <div>
        <div className="build-item">
          <img alt="" src="/img/submit_btn.png" />
          <div>
            hhhh
          </div>
        </div>

        {/* {this.renderBuild(buildData)}*/}
      </div>
    )
  }
}

export default Build;
