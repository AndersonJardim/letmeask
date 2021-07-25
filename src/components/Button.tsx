type ButtonProps = {
    text?: Array<string>;  //Array<string>  ou string[]
}

export function Button(props: ButtonProps) {
    return (
        <button>{props.text || 'Default'}</button >
    )
}

//export default Button;

//name export