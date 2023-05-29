
import NavigationBar from "@/components/NavigationBar";
import { Column } from '@/components/TableData/interfaces';
import { FieldCustom } from '@/components/FormBuilder/interfaces';
import { useForm } from "react-hook-form";
import {CustomTextField as TextField} from "@/components/FormBuilder/InputTypes";

import store from "@/redux/storage";
import { Provider } from 'react-redux'


import Crud from '@/components/Crud';
import React from "react";
import { useGetBanksQuery } from "@/reduxToolkits/api/Bank";
import { Circle } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

const columns: Column[] = [{
    text: 'ID',
    id: 'id',
    minWidth: 100,
},{
    text: 'Name',
    id: 'name',
    minWidth: 500,
},];

const fields: FieldCustom[] = [
    {
        name: 'name',
        fieldObject: TextField,
        fieldProps: {
            variant: 'standard',
            label: "Bank Name"
        },
        rules:{
            required: true
        },
        gridProps: {
            xs: 6,
            md: 6,
            sm: 12,
        },
        defaultValue: ""
    }
];
interface BankForm {
    name: string;
};

const App: React.FC = () => {
    const { data, isLoading } = useGetBanksQuery()
    const formBankHook = useForm<BankForm>();
    return (
        <div>            
            <NavigationBar/>
            {isLoading && <CircularProgress/>}
            {!isLoading && <Crud
                titlePage='Banks'
                singularTitle='Bank'
                tableColumns={columns}
                fields={fields}
                formComponent={formBankHook}
                data={data}
            />}
        </div>
    );
};

export default App;