import { useRouter } from "next/router"
import IconSvg from "./Icon"
import Link from "next/link"
export default function Header() {
    const { asPath } = useRouter()
    return <div className="w-full  flex justify-between px-[42px] pt-[40px] pb-[20px]">
        {
            asPath == '/keyerPage' && <IconSvg name="setingIcon1" />
        }
        {
            (asPath == '/positionPage') && <IconSvg name="setingIcon2" />
        }
        {
            asPath == '/keyerPage' && <IconSvg name="userIcon" />
        }
        {
            asPath == '/positionPage' && <Link href="/Incidents"><IconSvg name="tipIcon" />
            </Link>
        }
        {
            (asPath == '/addressPage' || asPath == '/Incidents' || asPath == '/IncidentDetail') &&
            <div onClick={() => history.back()}>
                <IconSvg name="backIcon" />
            </div>
        }
    </div>
}