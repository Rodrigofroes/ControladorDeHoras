import { useEffect } from 'react';

export const  useCustomEffectGet = (setHours:any) => {
    useEffect(() => {
      const getHoursFromDatabase = async () => {
        try {
          const response = await fetch('http://localhost:8000/horas', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (response.ok) {
            const data = await response.json();
            setHours(data);
            console.log('Dados de horas recebidos do banco com sucesso.');
            console.log(data);
          } else {
            console.error('Erro ao receber dados de horas do banco.');
          }
        } catch (error) {
          console.error('Erro ao enviar solicitação para receber dados de horas:', error);
        }
      };
  
      getHoursFromDatabase();
    }, []);
  };
  