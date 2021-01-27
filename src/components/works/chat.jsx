import React from 'react';
import Work from './work';

const Chat = () => {
    const images = [
        {
            original: "imgs/works/chat/chat.png"
        }
    ];
    return (
        <Work 
            images={images}
            title="Real Time Chat"
            link='https://beta.gvetsoft.com/'
            tags={['Symfony', 'Twig', 'Doctrine ORM', 'Messenger', 'Bootstrap', 'Mercure', 'React', 'SSE']}
            date="22:25 10/01/2021"
            text="Real time chat with Mercure and React, so any user can create a converation and
            send messages to another user in live."
        />
    );
}

export default Chat;