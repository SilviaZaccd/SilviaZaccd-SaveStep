import Icons from '@/utils/icons'
export default function IconSvg({ children, name, bgColor, rounded, style }) {
    const default_class = `flex justify-center items-center bg-[${bgColor || ''}] ${rounded ? 'rounded-full' : ''} `
    return (
        <div className={default_class} style={style}>
            {Icons[name]}
        </div>
    )
}