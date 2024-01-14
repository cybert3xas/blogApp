import React from 'react';

const BlogContext = React.createContext();

//the provider of records to children screens
export const BlogProvider = ({ children }) => {
    return <BlogContext.Provider>{children}</BlogContext.Provider>
};