export const login = async (username: string, password: string) => {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password,
            expiresInMins: 30,
        })
    });

    if (!response.ok) {
        throw new Error('Failed to login');
    }

    const data = await response.json(); 
    console.log('Login response:', data); 
    return data;
};


export const getUser = async (token: string) => {
    const response = await fetch('https://dummyjson.com/auth/me', {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }

    return response.json();
};
