import { useEffect, useState } from "react";
import { useLazyGetUserQuery } from '@/reduxToolkits/api/Auth';
import { useAppDispatch } from "@/reduxToolkits/hooks";
import { setAccessToken } from "@/reduxToolkits/slices/userAuth";

const  useAuthCheck = (accessToken?:string) => {
    const dispatch = useAppDispatch();
    const [ getUser ] = useLazyGetUserQuery();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isLogged, setIsLogged] = useState<boolean>(false);
    
    useEffect(()=> {
        const checkUserAuthStatus = async (accessToken:string) => {
            try {
                const result = await getUser(accessToken).unwrap();
                console.log(result);
                dispatch(setAccessToken({
                    access_token: accessToken,
                    token_type: 'bearer',
                    isLoggedIn: true
                }));
                setIsLogged(true);
            } catch (error) {
                console
                localStorage.clear();
                setIsLogged(false);
            } finally {
                setIsLoading(false);
            }
        }

        if (accessToken) {
            checkUserAuthStatus(accessToken);
        } else {
            setIsLogged(false);
            setIsLoading(false);
        }
    }, [accessToken, getUser]);
    
    return { isLoading, isLogged }
};

export default useAuthCheck;