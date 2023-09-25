import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";


export const userDeleteService = async(id: string) =>{
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.findOneBy({ id });

    if (!users) {
        throw new Error("user not found");
    }

    await userRepository.delete({id});
    
}