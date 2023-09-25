import { AppDataSource } from "../../data-source"
import { AnexoDocumento } from "../../entities/anexoDocumento.entity";
import { Quadro } from "../../entities/quadro.entity";

export const listQuadroByIdService = async(id:string) => {
    const quadroRepository = AppDataSource.getRepository(Quadro);
    const anexoRepository = AppDataSource.getRepository(AnexoDocumento);

    const quadro = await quadroRepository.findOne({
        where: {
          id: id
        }
      });

    const anexos = await anexoRepository.find({
      where:{
        ref: 'Quadro',
        id_ref: id
      }
    })

    

    return {quadro,'imagens':anexos}
}