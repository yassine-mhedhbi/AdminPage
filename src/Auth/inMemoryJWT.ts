const inMemoryJWTManager = () => {
    let inMemoryJWT : any | null = null;

    const getToken = () => inMemoryJWT;

    const setToken = (token: string) => {
        inMemoryJWT = token;
        return true;
    };

    const ereaseToken = () => {
        inMemoryJWT = null;
        return true;
    }

    return {
        ereaseToken,
        getToken,
        setToken,
    }
};

export default inMemoryJWTManager();