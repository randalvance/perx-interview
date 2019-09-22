import axios from 'axios';

import { UserInfo } from './types';

export const getUserInfo = async (login: string): Promise<UserInfo> => {
    if (!login) {
        throw new Error('User was not specified!');
    }
    const response = await axios.get(`https://api.github.com/users/${login}`);
    return response.data;
};
