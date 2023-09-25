import { AppDataSource } from "../../data-source";
import { AnexoDocumento } from "../../entities/anexoDocumento.entity";
import { Propriedade } from "../../entities/propriedade.entity";

export const listPropriedadeService = async () => {
  const propriedadeRepositpory = AppDataSource.getRepository(Propriedade);

  const propriedades = await propriedadeRepositpory
    .createQueryBuilder('propriedade')
    .leftJoin('propriedade.proprietario', 'proprietario')
    .select([
      'propriedade.id',
      'propriedade.nome',
      'propriedade.numero',
      'propriedade.logradouro',
      'propriedade.bairro',
      'propriedade.cidade',
      'propriedade.estado',
      'propriedade.complemento',
      'propriedade.cep',
      'proprietario.id',
      'proprietario.nome',
    ])
    .getMany();

   const anexoRepository = AppDataSource.getRepository(AnexoDocumento);


  const propsWithThumbnail = await Promise.all(
      propriedades.map(async (propriedade:any) => {
        const anexos = await anexoRepository.find({
          where: {
            id_ref: propriedade.id
          }
        });
    
        // Vincula apenas o primeiro anexo correspondente como miniatura
        if (anexos.length > 0) {
          propriedade.thumbnail = anexos[0];
        }
    
        return propriedade;
      })
    );
    
    return propsWithThumbnail;
  
  };
    

  



