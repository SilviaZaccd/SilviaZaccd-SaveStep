function RoundBox({ text, fn }) {
    return (
        <div className=" w-[230px] h-[230px] bg-pink rounded-full flex justify-center items-center" onClick={() => { fn() }}>
            <div className="w-[210px] h-[210px]  rounded-full bg-[#e15c7c] flex justify-center items-center">
                <div className="w-[190px] h-[190px] bg-[#c2334f] rounded-full flex justify-center items-center">
                    <div className="w-[170px] h-[170px] rounded-full flex justify-center items-center bg-bright-read font-bold text-white text-[40px]">{text}</div>
                </div>
            </div>
        </div >
    )
}
export default RoundBox