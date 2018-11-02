import React from 'react'
import IntroJs from 'intro.js'
import {Card, Tooltip, Button} from 'antd';

class IntroPage extends React.Component {
  // render
  // 关键是data-step 和 data-intro
  render() {
    return (
      <div id="root">
        <Card bordered style={{width: '100%'}} data-step="2" data-intro="第二步!">
          <Button >第二步</Button>
        </Card>
        <Card bordered style={{width: '100%'}} data-step="3" data-intro="第三步!">
          <Button >第二步</Button>
        </Card>
      </div>
    );
  }
}

export default IntroPage
