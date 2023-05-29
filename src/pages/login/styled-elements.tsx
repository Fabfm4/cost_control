import styled from "@emotion/styled";
import LoadingButton from '@mui/lab/LoadingButton';


const MainDivLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: 1px solid black;
`;

const FormDivLogin = styled.div`
    border-radius: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 50px;
    
    @media (max-width: 400px) {
        width: 350px;
        height: 400px;
    }
`;

const TitleLogin = styled.h2`
    text-align: center;
`;

const FormLogin = styled.form``;

const LoadingButtonCustom = styled(LoadingButton)`
    margin-top: 20px;
`;

export { MainDivLogin, TitleLogin, FormDivLogin, FormLogin, LoadingButtonCustom }