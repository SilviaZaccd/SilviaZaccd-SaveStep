import Layout from "./layout"
import { useRouter } from "next/router"
import FloatBlock from '@/components/floatBlock';
import IconSvg from '@/components/Icon';
import Link from "next/link";

function PositionPage() {
    const { asPath } = useRouter()

    return <Layout index="position">
        {
            asPath == '/positionPage' ? <div className='flex absolute bottom-[120px] z-[999] justify-between w-full px-2'>
                <FloatBlock text="Fake Call">
                    <IconSvg name="fakeCallIcon" />
                </FloatBlock>
                <FloatBlock text="Circles">
                    <IconSvg name="circlesSvg" />
                </FloatBlock>
                <FloatBlock text="Safe Zone">
                    <Link href="/addressPage">
                        <IconSvg name="SafeIcon" />
                    </Link>
                </FloatBlock>
            </div> : null
        }
    </Layout>
}


export default PositionPage