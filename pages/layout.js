import React from 'react';
import styles from './layout.module.css';
import Header from '../components/header';
import TabBar from '../components/tabbar';
import { useRouter } from 'next/router';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MapMaps from '../components/MyMaps'
export default function Layout({ children }) {
    const { asPath } = useRouter()
    const image_bg = 'layout-box relative flex h-dvh bg-no-repeat bg-cover flex-col pt-[84px] '
    const default_bg = `layout-box relative flex h-dvh flex-col ${asPath == '/IncidentDetail' || asPath == '/addressPage' ? '' : ' pt-[84px]'}`
    return (
        <div className={asPath == '/positionPage' ? image_bg : default_bg}>
            {
                !(asPath == '/keyerPage' || asPath == '/Incidents') && <div className='absolute top-0 left-0 w-full h-full'>
                    <MapMaps />
                </div>}
            <div className='fixed top-0 w-full z-50'>
                <Header />
            </div>
            <main className='h-full flex flex-col'>
                {children}
            </main>
            {
                (asPath == '/positionPage' || asPath == '/keyerPage') && <div className='fixed bottom-5 w-full '>
                    <TabBar />
                </div>
            }
        </div>
    );
}
