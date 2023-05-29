import { useForm, SubmitHandler } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux";
import { selectAuthUser, setAccessToken } from "@/reduxToolkits/slices/userAuth";
import Alert from '@mui/material/Alert';
import {MainDivLogin, TitleLogin, FormDivLogin, FormLogin, LoadingButtonCustom} from "./styled-elements";
import { useLoginMutation } from "@/reduxToolkits/api/Auth";
import { loggedData, loginPassword } from "@/reduxToolkits/api/Auth/index.d";
import { AppDispatch } from "@/reduxToolkits/store";
import { KeyboardEvent, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/reduxToolkits/hooks";


type LoginInputs = {
    email: string,
    password: string
};

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [login, {isLoading} ] = useLoginMutation();
    const {register, handleSubmit, formState: { errors }} = useForm<LoginInputs>();
    const onSubmit: SubmitHandler<LoginInputs> = (data: loginPassword) => {
        const loginUser = async (data:LoginInputs) => {
            try {
                const result: loggedData = await login(data).unwrap();
                localStorage.setItem('access_token', result.access_token);
                localStorage.setItem('refresh_token', result.refresh_token);
                localStorage.setItem('expires_in', String(result.expires_in));
                localStorage.setItem('token_type', result.token_type);
                dispatch(setAccessToken({
                    access_token: result.access_token,
                    refresh_token: result.refresh_token,
                    expires_in: result.expires_in,
                    token_type: result.token_type,
                    isLoggedIn: true
                }))
                router.push("/banks");
            } catch (error) {
                console.log(error)
            }
        };
        loginUser(data);
    };

    return (
        <MainDivLogin>
            <FormDivLogin>
                <TitleLogin>Make Login to save money</TitleLogin>
                <FormLogin onSubmit={handleSubmit(onSubmit)} >
                    <TextField
                        id="email"
                        label="Email"
                        fullWidth
                        margin="normal"
                        variant="filled"
                        {...register("email", {
                            required: "required",
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: "Entered value does not match email format"
                            }
                        })} />
                    {errors.email && <Alert severity="error">{errors.email.message}</Alert>}

                    <TextField
                        id="password"
                        label="Password"
                        fullWidth
                        type="password"
                        margin="normal"
                        variant="filled"
                        {...register("password", {
                            required: "required"
                        })}/>
                    {errors.password && <Alert severity="error">{errors.password.message}</Alert>}

                    <LoadingButtonCustom
                        type="submit"
                        fullWidth
                        variant="contained"
                        loading={isLoading}
                        color="primary">
                        Sign In
                    </LoadingButtonCustom>
                </FormLogin>
            </FormDivLogin>
        </MainDivLogin>
    );

};
export default App;