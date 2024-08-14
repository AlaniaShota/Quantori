
export interface UserData {
    username: string;
    email: string;
    image: string;
    firstName: string;
    lastName: string;
}
export interface AuthContextType {
    userData: UserData | null;
    token: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}