import axios from 'axios';

import { UserInfo, UserOrganization, UserRepository } from './types';

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
});

export const getUserInfo = async (login: string): Promise<UserInfo> => {
    if (!login) {
        throw new Error('User was not specified!');
    }
    const response = await axiosInstance.get(`/users/${login}`);
    return response.data;
};

export const getUserRepositories = async (
    login: string
): Promise<UserRepository[]> => {
    if (!login) {
        throw new Error('User was not specified!');
    }

    // Create artificial delay to demo loading state
    await new Promise(resolve => setTimeout(() => resolve(), 2000));

    const response = await axiosInstance.get(
        `https://api.github.com/users/${login}/repos`
    );
    return response.data;
};

export const getUserOrganizations = async (
    login: string
): Promise<UserOrganization[]> => {
    if (!login) {
        throw new Error('User was not specified!');
    }

    // Create artificial delay to demo loading state
    await new Promise(resolve => setTimeout(() => resolve(), 3000));

    const response = await axiosInstance.get(
        `https://api.github.com/users/${login}/orgs`
    );
    return response.data;
};
