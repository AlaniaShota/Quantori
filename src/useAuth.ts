import { useContext } from 'react';
import { AuthContextType } from './types/types';
import { AuthContext } from './AuthContext';

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
