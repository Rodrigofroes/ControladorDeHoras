import './App.css'
import { useState } from 'react'
import Input from './components/CustomInput'
import CustomButton from './components/CustomButton'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCustomEffect } from './utils/PostForm'
import { useCustomEffectGet } from './utils/GetForm'
import { formatISODateToCustomFormat } from './utils/DateFormat'
import Tabela from './components/Tabela'

const createHoursFrom = z.object({
  InputHoras: z.string().min(1, 'Campo obrigatório')
})

function App() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(createHoursFrom)
  })
  const [hours, setHours] = useState({ InputHoras: '' }) 
  const [listHours, setListHours] = useState([])

  const createHours = (data: any) => {
    setHours(data)
    reset()
  }

  const SomaHoras = (horas: any) => {
    const horasParaMinutos = (hora: string) => {
      const [hh, mm] = hora.split(':');
      return parseInt(hh, 10) * 60 + parseInt(mm, 10);
    };

    const minutosParaHoras = (minutos: number) => {
      const hh = Math.floor(minutos / 60);
      const mm = minutos % 60;
      return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
    };

    const minutosTotais = horas.reduce((total: number, item: any) => {
      return total + horasParaMinutos(item.Horas);
    }, 0);

    return minutosParaHoras(minutosTotais);
  }

  useCustomEffect(hours)
  useCustomEffectGet(setListHours)

  return (
    <>
      <div className='Container'>
        <form onSubmit={handleSubmit(createHours)} className='ContainerForm'>
          <div className='InputContainer'>
            <Input
              type='time'
              htmlSize={4}
              width='auto'
              register={register}
            />
            {errors.InputHoras && <p className='error'>{"*" + errors.InputHoras.message}</p>}
          </div>
          <CustomButton
            nome='Confirmar'
            tipo='submit'
          />
        </form>
        <div className='ContainerList'>
          <h1>Historico de horas</h1>
          <Tabela
            NomeHora='Hora'
            NomeDia='Dia'
            dados={listHours.map((item: any) => ({
              ValorHora: item.Horas,
              ValorDia: formatISODateToCustomFormat(item.Dia),
              key: item.id,
            }))}
          />
        </div>
        <div>
          <p>{SomaHoras(listHours)}</p>
        </div>
      </div>
    </>
  )
}

export default App
