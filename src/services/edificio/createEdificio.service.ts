import { AppDataSource } from "../../data-source"
import { Edificio } from "../../entities/edificio.entity"
import { Propriedade } from "../../entities/propriedade.entity";
import { IEdificioCreate } from "../../interfaces/edificio";
import { AppError} from "../../errors/appError";



export const createEdificioService = async(
    {nome, descricao, largura, comprimento, pavimento, subsolo, propriedade_id, 
    }: IEdificioCreate) =>{
    const edificioRepository = AppDataSource.getRepository(Edificio);
    const propriedadeRepository = AppDataSource.getRepository(Propriedade);

    try{
        const propriedade = await propriedadeRepository.findOne({
            where: {id: propriedade_id}
        })
        const edificio = new Edificio()

        edificio.nome = nome,
        edificio.descricao = descricao,
        edificio.propriedade = propriedade!
        edificio.largura = largura
        edificio.pavimento = pavimento 
        edificio.comprimento = comprimento
        edificio.subsolo = subsolo
        
        edificioRepository.create(edificio);
        await edificioRepository.save(edificio);
       
        return edificio;
    }
    catch{
        throw new AppError(401, 'Houve algum erro na criacao do edificio')
    }
}


export const validateEdificio = (edificio: IEdificioCreate) => {
    const requiredFields = [
      "nome",
      "descricao",
      "pavimento",
      "comprimento",
      "largura",
      "subsolo",
      "propriedade_id",
    ];
  
    requiredFields.forEach((field) => {
      if (!(field in edificio) || edificio[field as keyof IEdificioCreate] == null) {
        throw new AppError(409, `Por favor insira o ${field} para fazer a criação do edifício`);
      }
    });
  };
  
