import { useSelector, useDispatch } from "react-redux";

import { CircularProgress } from "@mui/material";
import LinkRedirect from "../Redirect";
import { useRouter } from "next/router";
import { selectAuthUser, setAccessToken } from "@/reduxToolkits/slices/userAuth";
import { MainDiv } from "./styled-elements";
import { useEffect, useRef, useState } from "react";
import useAuthCheck from "@/hooks/AuthCheck";


type Props = {
    children: string | JSX.Element
};


const AuthProvider: React.FC<Props> = ({children}) => {
    const store = useSelector(selectAuthUser);
    const router = useRouter();
    const [ accessToken, setAccessToken ] = useState<string|undefined>(store.access_token);
    const { isLoading, isLogged } = useAuthCheck(accessToken);
    const [hasAccess, setHasAccess] = useState(false);
    const isLoginPath = router.pathname === "/login";

    useEffect(() => {
        if (accessToken === undefined) {
            const access_token = localStorage.getItem("access_token") || "";
            setAccessToken(access_token);
            if (access_token === "" && !isLoginPath) {
                router.push('/login');
            }
            if (access_token === "" && isLoginPath) {
                setHasAccess(true);
            }
        }
    }, []);

    useEffect(() => {
        if (isLogged && !isLoginPath){
            setHasAccess(true);
        }
        if (isLogged && isLoginPath) {
            router.push('/banks');
        }
    }, [isLogged]);

    if (accessToken === "" && isLoginPath) {
        return (
            <MainDiv>
                {children}
            </MainDiv>
        );
    }

    return (
        <MainDiv>
            {isLoading && <CircularProgress/>}
            {!isLoading && hasAccess && children}
        </MainDiv>
    );
};

export default AuthProvider;