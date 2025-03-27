import Title from "@/components/title"
import Layout from "./layout"
import MapMaps from '@/components/MyMaps'
import { useRouter } from "next/router"
import { useEffect } from "react"

function IncidentDetail() {
    const router = useRouter()
    useEffect(() => {
        console.log(router.query, 'pink')
    }, [])
    const custom_class = 'text-default text-[36px] font-bold mb-[9px]'
    const item_top_class = 'text-default font-bold text-[12px] pb-[8px]'
    const item_bottom_class = 'text-default  font-bold text-[12px]  break-all'
    return <Layout>
        <div className="map-wrap w-full h-[486px]  bg-no-repeat bg-cover bg-white">
        </div>
        <div className="px-[37px] py-[30px] absolute bottom-0 bg-white">
            <Title text='Fire In Godown' custom_class={custom_class} />
            <div className="flex flex-col">
                <div className="flex flex-col mb-[25px]">
                    <div className={item_top_class}>
                        9：00 AM, TODAY
                    </div>
                    <div className={item_bottom_class}>
                        1234 2nd St, South Avenue,Greatwood,LA
                    </div>
                </div>
                <div className="flex flex-col mb-[25px]">
                    <div className={item_top_class}>
                        Incidents Type
                    </div>
                    <div className={item_bottom_class}>
                        Shoes godown on fire
                    </div>
                </div>
                <div className="flex flex-col ">
                    <div className={item_top_class}>
                        Incidents Type
                    </div>
                    <div className={item_bottom_class}>
                        297T
                    </div>
                </div>
                <div className="flex flex-col mb-[25px]">
                    <div className={item_top_class}>
                        DESCRIPTION
                    </div>
                    <div className={item_bottom_class}>
                        1111111HFJSKDXNKWOLDMDCKSLOSMDNDMCXMDMCMDM CM CKMSKLP; MSMAWLKQLO . MWM,SD
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}
export default IncidentDetail