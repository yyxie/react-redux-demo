/* eslint-disable no-return-assign,no-template-curly-in-string */
import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'antd';

// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

export default class Demo extends React.Component {
  componentDidMount() {
  }

  insertContent = () => {
    this.editorInstance.insertText('${fffff}');
    this.editorInstance.requestFocus()
  }
  saveClick = () => {
    debugger;
    console.log(this.editorInstance.getContent('html'));
    console.log(this.editorInstance.getContent('raw'));
  }
  replaceContent = () => {
    this.editorInstance.setContent('<p>${fffff}${fffff}${fffff}${fffff}${fffff}${fffff}${fffff}${fffff}${fffff}${fffff}${fffff}Hello World!&lt;div&gt;ffffffffffff&lt;/div&gt;</p>', 'html')
  }

  render() {
    const editorProps = {
      height: 500,
      contentFormat: 'html',
      initialContent: '<p>Hello World!</p>',
      onChange: this.handleChange,
      onRawChange: this.handleRawChange,
     /* pasteMode: 'text',*/
      media: {
        allowPasteImage: true, // 是否允许直接粘贴剪贴板图片（例如QQ截图等）到编辑器
        image: true, // 开启图片插入功能
        video: true, // 开启视频插入功能
        audio: true, // 开启音频插入功能
        validateFn: null, // 指定本地校验函数，说明见下文
        uploadFn: null, // 指定上传函数，说明见下文
        removeConfirmFn: null, // 指定删除前的确认函数，说明见下文
        onRemove: null, // 指定媒体库文件被删除时的回调，参数为被删除的媒体文件列表(数组)
        onChange: null, // 指定媒体库文件列表发生变化时的回调，参数为媒体库文件列表(数组)
        onInsert: null, // 指定从媒体库插入文件到编辑器时的回调，参数为被插入的媒体文件列表(数组)
    /*    uploadFn: (param) => {
          const successFn = () => {
            debugger;
            // 假设服务端直接返回文件上传后的地址
            // 上传成功后调用param.success并传入上传后的文件地址
            param.success({
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              meta: {
                id: '3456777',
                title: 'img',
                alt: 'ffffff',
                /!* loop: true, // 指定音视频是否循环播放
                 autoPlay: true, // 指定音视频是否自动播放
                 controls: true, // 指定音视频是否显示控制栏
                 poster: 'http://xxx/xx.png', // 指定视频播放器的封面*!/
              }
            })
          }

          const progressFn = (event) => {
            // 上传进度发生变化时调用param.progress
            //param.progress(event.loaded/event.total * 100)
          }

          const errorFn = (response) => {
            // 上传发生错误时调用param.error
            param.error({
              msg: 'unable to upload.'
            })
          }
          successFn();
        }*/
      }
    }

    return (
      <div className="demo">
        <div style={{
          width: '150px',
          float: 'left'
        }}>
          <Button onClick={this.insertContent} data-step="2" data-intro="添加内容!">添加内容</Button>
          <Button onClick={this.saveClick}>保存</Button>
          <Button onClick={this.replaceContent}>替换内容</Button>
        </div>
        <div style={{
          marginLeft: '150px',
          WebkitBoxShadow: 'inset 0 -0.5px 0 0 rgba(0, 0, 0, 0.2)',
          boxShadow: 'inset 0 -0.5px 0 0 rgba(0, 0, 0, 0.2)'
        }}>
          <BraftEditor {...editorProps} ref={(instance) => this.editorInstance = instance} />
        </div>
      </div>
    )
  }

  handleChange = (content) => {
    console.log(content)
  }

  handleRawChange = (rawContent) => {
    console.log(rawContent)
  }
}
