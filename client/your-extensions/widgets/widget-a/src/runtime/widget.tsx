import { React, type AllWidgetProps, MessageManager,  StringSelectionChangeMessage } from 'jimu-core'

const { useState } = React

export default function WidgetA(props: AllWidgetProps<any>) {

  const [text, setText] = useState('Hello Widget B')

  const sendMessage = () => {

    MessageManager.getInstance().publishMessage(
      new StringSelectionChangeMessage(
        props.id,
        text
      )
    )

    console.log('Message sent:', text)
  }

  return (
    <div className="p-3">

      <h4>Widget A</h4>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={sendMessage}
        className="btn btn-primary"
      >
        Send
      </button>

    </div>
  )
}