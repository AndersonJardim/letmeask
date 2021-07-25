type ButtonProps = {
    children?: string;  //Array<string>  ou string[]
}

export function Button(props: ButtonProps) {
    return (
        <button>{props.children || 'Default'}</button >
    )
}

//export default Button;

//name export