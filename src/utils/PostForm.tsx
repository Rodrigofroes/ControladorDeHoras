import { useEffect } from "react";

export const useCustomEffect = (hours: any) => {
  useEffect(() => {
    const saveHoursToDatabase = async () => {
      try {
        const response = await fetch("http://localhost:8000/horas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Horas: hours.InputHoras, Dia: new Date() }),
        });

        if (response.ok) {
          console.log("Dados de horas salvos no banco com sucesso.");
        } else {
          console.error("Erro ao salvar dados de horas no banco.");
        }
      } catch (error) {
        console.error(
          "Erro ao enviar solicitação para salvar dados de horas:",
          error
        );
      }
    };

    if (hours.InputHoras) {
      saveHoursToDatabase();
    }
  }, [hours]);
};

