function Button({ classConfig, children }) {
    return (
        <button className={classConfig + ' flex justify-center items-center'}>{children}</button>
    )
}

export default Button