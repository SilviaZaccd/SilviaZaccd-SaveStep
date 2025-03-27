'use clinet'
import BlockItem from "@/components/blockItem"
import Title from "@/components/title"
import Layout from "./layout"
import Link from "next/link"
import { useEffect, useState } from "react"

function Incidents() {
    // const dataList = [{ day: '9：00 AM, TODAY', title: 'Garment Shop', time: '1234 2nd St, South Avenue', tagIcon: icons[0] },
    // { day: '9：20 AM, TODAY', title: 'City Museum', time: '1234 2nd St, South Avenue', tagIcon: icons[1] },
    // { day: '9：30 AM, TODAY', title: 'Jewellery Shop', time: '1234 2nd St, South Avenue', tagIcon: icons[2] },
    // { day: '9：37 AM, TODAY', title: 'Pasadena zoo', time: '1234 2nd St, South Avenue', tagIcon: icons[3] }
    // ]
    const [dataList, setDataList] = useState([])
    useEffect(() => {
        const getFetch = async () => {
            const res = await fetch('https://eu-west-2.cdn.hygraph.com/content/clzg2v37o04j507w6osvam05x/master', {
                method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ3ZWJhcHAiOnRydWUsInZlcnNpb24iOjQsImlhdCI6MTcyMzU1NTk0NiwiZXhwIjoxNzIzNTk5MTQ2LCJhdWQiOlsiaHR0cHM6Ly9hcGktZXUtd2VzdC0yLmh5Z3JhcGguY29tL3YyL2NsemcydjM3bzA0ajUwN3c2b3N2YW0wNXgvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiNzFhNWNhN2UtMjc4Zi00ZmMxLWJhMGQtMjdmOTdlZTVhNDA4IiwianRpIjoiY2x6Z3N2eTd5NzZ3YzA3bWhhZGNzZmV6bSJ9.TRq6sh0LRkZLkwgQMO95Hy0g0rJuhHUmlCc_iz5AHq0rSX4JyLx3Hvk5xMPyiVTHl1t_NtYMavp7dhVtFJz01ipiH5ydewC_h2nezoLiaxHSV2FYkJ8WBelaAxfFreV4d_kQ-DaRXG5UQFz-8Dvz-0aANFbVRJFGdG2bFcILC09U9sfImW9H0lzC4tlp4-WSb1p8dIs8BUnpgmeFywpMVLa3J38Xtwbpo9tQiZvuOfuu_tNqknwKiCUGM3Fa3m3igwuNdG-nvT_M3PGJvcQJaGF4vFDLABJNJ35V1e31uaAALQRrYUxL5wAhVJy0dCtswssOFISb2et9R3C6UwYDlUlr7-75edpP23FUSrt4UqLW4YMPW06VtBd3Vh--mNPrU6UKMqdabeoa80-o7h61QjHpMZ-qWiHp2ct9EBq4IEa-QHo-YOEmZMxftvEPH8XDpjurn1pXWkIuyfPQQrhvH1POBg846KVo-zCmbcmM9k25KiAXateoErJdU26Ypa0wMhQhwErFgPeTYpLcL4HIQRWFSp9D0RrPZLP3vuU48vzZ3a3k9CCeK2bX3ga-ayxawEyYIgPtFoFpvuhCMhwdCuemFQg3CfZT4vmNrEVo-Yo5z7BhRA5KDHWkco57XS6bZkcEi-GNm69rADic9f4KrwK5X8EtAmDt0976tQc_d34' },
                body: JSON.stringify({
                    query: `query MyQuery {
                            incidents {
                            id,
                            adressName,
                            iconName,
                                title
                            }
                            }   `})
            })
            const { data } = await res.json()
            setDataList(data.incidents)
        }
        getFetch()
    }, [])
    const custom_class = 'text-default text-[36px] font-bold mb-[47px]'
    return <Layout>
        <div className="mx-[51px]">
            <Title text='Incidents' custom_class={custom_class} />
            <div className="flex flex-col ">
                {
                    dataList.length > 0 && dataList.map((item, index) => {
                        return <div key={index}>{
                            index == 0 ? <Link href="/IncidentDetail"><BlockItem {...item} index={index}>
                            </BlockItem></Link> : <BlockItem {...item} index={index}>
                            </BlockItem>
                        } </div>
                    })
                }
            </div>
        </div>
    </Layout>
}
export default Incidents