type InputProps = {
    label:string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({label, ...rest}: InputProps) => {

    return (
        <div>
            <label htmlFor={rest.id} className='input-label'>{label}</label>
            <input {...rest}/>
        </div>
    )
}