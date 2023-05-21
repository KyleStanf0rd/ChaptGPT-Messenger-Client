import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
import CustomHeader from '@/components/customHeader'
import StandardMessageForm from '@/components/customMessageForms/StandardMessageForm'
import AI from '@/components/customMessageForms/AI'
import AICode from '@/components/customMessageForms/AiCode'

const Chat = () => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "test-user",
        "1234"
    )
  return (
    <div style={{flexBasis: "100%"}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow
            {...chatProps}
            style={{height: "100vh"}}
            renderChatHeader={(chat)=> <CustomHeader chat={chat} />}
            renderMessageForm={(props)=> {
                if(chatProps.chat?.title.startsWith("AiChat_")){
                    return <AI props={props} activeChat={chatProps.chat} />
                }
                if(chatProps.chat?.title.startsWith("AiCode_")){
                    return <AICode props={props} activeChat={chatProps.chat} />
                }
                return (
                    <StandardMessageForm props={props} activeChat={chatProps.chat}/>
                )
            }}
        />
    </div>
  )
}

export default Chat