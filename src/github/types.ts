export interface UserInfo {
    login: string;
    avatar_url: string;
}

export interface UserRepository {
    id: number;
    full_name: string;
    private: boolean;
    url: string;
    description: string;
    stargazers_count: number;
}

export interface UserOrganization {
    id: number;
    login: string;
    url: string;
    description: string;
}
