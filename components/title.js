function Title({ custom_class, text, size }) {
    return <div className={custom_class + ` text-[${size}]`}>{text}</div>
}

export default Title