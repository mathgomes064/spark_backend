import { AppDataSource } from "../../data-source";
import { AnexoDocumento } from "../../entities/anexoDocumento.entity";
import { Edificio } from "../../entities/edificio.entity";


export const listEdificioService = async (property_id: string) => {
  const edificioRepository = AppDataSource.getRepository(Edificio);
  const edificios = await edificioRepository.find({
    where: {
      propriedade: { id: property_id }
    },
    order: {
      created: 'DESC' // Ordena os edifícios pelo campo de data de criação em ordem descendente
    }
  });
  

  const anexoRepository = AppDataSource.getRepository(AnexoDocumento);

  // Use Promise.all e map para aguardar todas as promessas
  const edificiosWithThumbnail = await Promise.all(
    edificios.map(async (edificio:any) => {
      const anexos = await anexoRepository.find({
        where: {
          id_ref: edificio.id
        }
      });

      // Vincula apenas o primeiro anexo correspondente como miniatura
      if (anexos.length > 0) {
        edificio.thumbnail = anexos[0];
      }

      return edificio;
    })
  );

  return edificiosWithThumbnail;
};
