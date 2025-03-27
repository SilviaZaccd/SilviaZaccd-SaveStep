import { useState } from "react"
import Icon from "./Icon"

function BlockItem({ children, adressName, iconName, title, index }) {
    const [curIndex, setCurIndex] = useState(0)
    const date = new Date()
    const wrapItem_class = "w-full  mb-[36px] p-[18px] rounded-[20px]"
    return <div className={wrapItem_class + `${curIndex == index ? ' bg-bright-read' : ' bg-dark-gray'}`} >
        <div className="flex justify-between items-center">
            <span className="text-white text-[12px] font-bold">{`${date.getHours()}: ${date.getMinutes()}` + (date.getHours() > 12 ? ' PM' : 'AM ') + ', TODAY'}</span>
            <span className="mr-2">
                <Icon name="omitIcon">

                </Icon>
            </span>
        </div>
        <div className="flex justify-between items-center">
            <div className="">
                <h2 className="text-[24px] font-bold text-white">{title}</h2>
                <div className="text-white text-[12px] font-bold">{adressName}</div>
            </div>
            <div>
                <Icon name={iconName}>
                </Icon>
            </div>
        </div>
    </div>
}
export default BlockItem