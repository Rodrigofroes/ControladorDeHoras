import { Input } from '@chakra-ui/react'


interface propsInput{
    type: string,
    htmlSize: number,
    width: string,
    register: any
}


const CustomInput = ({ type, width, htmlSize, register  }: propsInput) => {
    return (
        <div>
            <Input 
                type={type}
                htmlSize={htmlSize} 
                width={width}
                {...register('InputHoras')}
                
            />
        </div>
    )
}

export default CustomInput