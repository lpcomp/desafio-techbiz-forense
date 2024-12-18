import { UserCPFInformation, UserForCPF } from "../models/user";

const userCPFInformation = (data: UserForCPF):UserCPFInformation => {
    const firstUser = 0;
    const informations = data.SNAP[firstUser];
    const userInformation = informations.pessoa?.find(user => user.bookmark === "true");

    const allInformations = {
        email: informations.email,
        address: informations.endereco,
        phone: informations.telefone,
        user: userInformation
    }

    return allInformations;
}

export default userCPFInformation;