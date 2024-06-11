import React, { createContext, useState, useContext } from 'react';

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
    const [message, setMessage] = useState({});
    const [notifications, setNotifications] = useState(false);

    return (
        <MessageContext.Provider value={{ message, setMessage, notifications, setNotifications }}>
            {children}
        </MessageContext.Provider>
    );
};

export const useMessage = () => useContext(MessageContext);
