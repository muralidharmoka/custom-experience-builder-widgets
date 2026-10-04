import { React, type AllWidgetProps, Message } from 'jimu-core'

const { useState } = React

export default function WidgetB(props: AllWidgetProps<any>) {

  const [receivedText, setReceivedText] = useState('')

  const onReceiveMessage = (message: Message) => {

    console.log('Widget B received:', message)

    if (message.type === 'STRING_SELECTION_CHANGE') {

      const text = (message as any).str

      setReceivedText(text)
    }
  }

  return (
    <div className="p-3">

      <h4>Widget B</h4>

      <p>
        Received: {receivedText}
      </p>

    </div>
  )
}