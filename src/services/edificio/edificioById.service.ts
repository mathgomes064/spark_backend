import { AppDataSource } from "../../data-source"
import { Edificio } from "../../entities/edificio.entity"


export const edificioByIdService = async(id:string) => {
    const edificioRepository = AppDataSource.getRepository(Edificio);
    const edificio = await edificioRepository.findOne({
        where: {
          id: id
        }
      });

    return edificio
}