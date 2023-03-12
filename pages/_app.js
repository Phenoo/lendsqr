import '@/styles/globals.css'
import '@/styles/styles.scss'
import '@/styles/sidebar.scss'
import { ProSidebarProvider } from 'react-pro-sidebar';

export default function App({ Component, pageProps }) {
  return <ProSidebarProvider>
    <Component {...pageProps} />
  </ProSidebarProvider> 
}
