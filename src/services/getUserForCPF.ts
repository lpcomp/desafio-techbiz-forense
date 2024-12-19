import { UserForCPF } from "../models/user";
const getUserForCPF = async (): Promise<UserForCPF> => {
    try {
        // const response = await fetch('src/services/mocks/api-result.json');//Para usar dentro da pasta mocks, só em modo dev
        const response = await fetch('../../api-result.json');
        if (!response.ok) {
            throw new Error('Failed to load the JSON file');
        }

        const data: UserForCPF = await response.json();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error message:', error.message);
        } else {
            console.error('Unknown error:', error);
        }

        throw error;
    }
};

export default getUserForCPF;
  