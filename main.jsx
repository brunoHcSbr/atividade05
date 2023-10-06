import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    RouterProvider,
    createBrowserRouter, 
    BrowserRouter,
} from 'react-dom-route'
import router from './routes'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot (
    document.getElementById('root') as  HTMLElement).render(
    
        <React.StrictMode>
            <ChakraProvider>
                <RouterProvider router={router} />
            </ChakraProvider>
        </React.StrictMode>,

    )