export default function TabButton ({children, isSelected, ...props}) {

    return <li>
        <button className={isSelected ? "active" : undefined} {...props}>{children}</button>
    </li>; {/* Esse props.children (built-in) recebe o que está entre os html's da função em jsx */}
}

{/* export default function TabButton ({children}) {
    return <li><button>{children}</button></li>; Assim tb é possível
} */}