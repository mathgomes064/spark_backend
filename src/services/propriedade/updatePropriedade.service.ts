import { AppDataSource } from "../../data-source";
import { Propriedade } from "../../entities/propriedade.entity";
import { Proprietario } from "../../entities/proprietario.entity";
import { AppError } from "../../errors/appError";
import { IPropriedadeUpdate } from "../../interfaces/propriedade";

export const updatePropriedadeService = async(data: IPropriedadeUpdate, id: string) =>{
    const propriedadeRepository = AppDataSource.getRepository(Propriedade);
    const proprietarioRepository = AppDataSource.getRepository(Proprietario);
  
    const propriedadeToUpdate = await propriedadeRepository.findOneBy({ id });
  
    if (!propriedadeToUpdate) {
      throw new AppError(409, "Propriedade não Encontrado");
    }
  
    if (data.proprietario_id) {
      const novoProprietario = await proprietarioRepository.findOneBy({ id: data.proprietario_id });
  
      if (!novoProprietario) {
        throw new AppError(409, "Proprietário não Encontrado");
      }
  
      propriedadeToUpdate.proprietario = novoProprietario;
    }
  
    Object.assign(propriedadeToUpdate, data);
  
    await propriedadeRepository.save(propriedadeToUpdate);
  
    const propriedade = await propriedadeRepository.findOneBy({ id });
  
    return propriedade!;
}