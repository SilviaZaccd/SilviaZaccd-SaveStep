import Link from "next/link"
import Button from "./Button"
import IconSvg from "./Icon"
import { useState } from "react"
import { useRouter } from "next/router"
export default function TabBar() {
    const default_Btn_Class = 'w-[64px] h-[64px] relative top-3'
    const active_Btn_Class = 'w-[64px] h-[64px] rounded-full bg-bright-read relative -top-0'
    const { asPath } = useRouter()
    return <div className="flex justify-center">
        <div className="w-full flex justify-around items-center bg-white rounded-[20px] pt-[4px] pb-[7px] mx-[25px] px-[30px]" style={{ boxShadow: '5px 5px 4px rgba(0, 0, 0, 0.25)' }}>
            <Button classConfig={asPath == '/homePage' ? active_Btn_Class : default_Btn_Class}>
                <IconSvg name="homeIcon" Icon="true" style={{ alignItems: 'flex-end' }}></IconSvg>
            </Button>
            <Button classConfig={asPath == '/keyerPage' ? active_Btn_Class : default_Btn_Class}>
                <Link href={{ pathname: '/keyerPage' }}>
                    {
                        asPath == '/keyerPage' ? <IconSvg name="active_keyerIcon" /> : <IconSvg name="default_keyerIcon" />
                    }
                </Link>
            </Button>
            <Button classConfig={asPath == '/positionPage' ? active_Btn_Class : default_Btn_Class}>
                <Link href={{ pathname: '/positionPage' }}>
                    {
                        asPath == '/positionPage' ?
                            <IconSvg name="active_positionIcon" />
                            : <IconSvg name="default_positionIcon" />
                    }
                </Link>
            </Button>
        </div>
    </div>
}