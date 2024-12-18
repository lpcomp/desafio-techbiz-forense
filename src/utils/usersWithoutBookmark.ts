import { UserForCPF, User } from "../models/user";

const usersWithoutBookmark = (data: UserForCPF):User[] => {

    const firstUser = 0;    
    const informations = data.SNAP[firstUser].pessoa || [];
    const usersWithoutBookmark = informations.filter(
        (user) => !Object.prototype.hasOwnProperty.call(user, 'bookmark')
    );

    return usersWithoutBookmark;
}

export default usersWithoutBookmark;