function FloatBlock({ children, text }) {
    return (
        <div className="bg-bright-read flex w-[109px] py-[17px]  flex-col rounded-[10px]">
            <div className="my-5">
                {children}
            </div>
            <div className="text-white text-[14px] font-bold text-center">
                <span className="">{text}</span>
            </div>
        </div>
    )
}

export default FloatBlock