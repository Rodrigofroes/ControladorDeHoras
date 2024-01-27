import { Button, WrapItem } from '@chakra-ui/react'

interface propsButton{
    nome: string,
    tipo: string
}


const CustomButton = ({ nome, tipo }:propsButton) => {
  return (
    <div>
        <WrapItem>
            <Button 
                colorScheme='whatsapp'
                type={tipo as "button" | "submit" | "reset" | undefined}
            >
                {nome}
            </Button>
        </WrapItem>
    </div>
  )
}

export default CustomButton