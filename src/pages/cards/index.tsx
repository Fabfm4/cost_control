import Container from '@mui/material/Container';
import NavigationBar from "@/components/NavigationBar";
import { Column } from '@/components/TableData/interfaces';
import Crud from '@/components/Crud';
import {FieldCustom} from "@/components/FormBuilder/interfaces";
import {CustomTextField as TextField, CustomSelectStaticOptionsField as SelectStaticOptions} from "@/components/FormBuilder/InputTypes";
import React from "react";
import {useForm} from "react-hook-form";
import { useGetCardsQuery } from '@/reduxToolkits/api/Card';
import { CircularProgress } from '@mui/material';

const columns: Column[] = [{
    text: 'ID',
    id: 'id',
    minWidth: 50
},{
    text: 'Name',
    id: 'name',
    minWidth: 150
},{
    text: 'Type',
    id: 'card_type',
    minWidth: 50
},{
    text: 'Bank',
    id: 'bank_id',
    minWidth: 100
},{
    text: 'Payment Deadline',
    id: 'payment_deadline',
    minWidth: 100
},{
    text: 'Last Four',
    id: 'last_four',
    minWidth: 100
},{
    text: 'Cut of date',
    id: 'cut_off_date',
    minWidth: 100
},];

const fields: FieldCustom[] = [
    {
        name: 'name',
        fieldObject: TextField,
        fieldProps: {
            variant: 'standard',
            label: "Card Name",
            id: 'name'
        },
        rules: {
            maxLength: 2
        },
        gridProps: {
            xs: 6,
            md: 6,
            sm: 12,
        },
        defaultValue: ""
    },
    {
        name: 'cut_off_date',
        fieldObject: TextField,
        fieldProps: {
            variant: 'standard',
            label: "Cut Off Date",
            id: 'cut_off_date'
        },
        gridProps: {
            xs: 6,
            md: 6,
            sm: 12,
        },
        defaultValue: ""
    },
    {
        name: 'payment_deadline',
        fieldObject: TextField,
        fieldProps: {
            variant: 'standard',
            label: "Payment DateLine",
            id: 'payment_deadline'
        },
        gridProps: {
            xs: 6,
            md: 6,
            sm: 12,
        },
        defaultValue: ""
    },
    {
        name: 'last_four',
        fieldObject: TextField,
        fieldProps: {
            variant: 'standard',
            label: "Last Four Numbers",
            id: 'last_four'
        },
        gridProps: {
            xs: 6,
            md: 6,
            sm: 12,
        },
        defaultValue: ""
    },
    {
        name: 'card_type',
        fieldObject: SelectStaticOptions,
        fieldProps: {
            variant: 'standard',
            label: "Card Type",
            id: 'card_type'
        },
        gridProps: {
            xs: 6,
            md: 6,
            sm: 12,
        },
        defaultValue: "",
        staticOptions: [
            {id: 'card_type_debit', value: "DEBIT", label: "Debit"},
            {id: 'card_type_credit', value: "CREDIT", label: "Credit"}
        ]
    },
    {
        name: 'bank_id',
        fieldObject: SelectStaticOptions,
        fieldProps: {
            variant: 'standard',
            label: "Bank",
            id: 'bank_id'
        },
        gridProps: {
            xs: 6,
            md: 6,
            sm: 12,
        },
        defaultValue: "",
        staticOptions: [
            {id: 'card_type_debit', value: "DEBIT", label: "Debit"},
            {id: 'card_type_credit', value: "CREDIT", label: "Credit"}
        ]
    }
];

interface CardForm {
    name: string;
};

const App: React.FC = () => {
    const formCardHook = useForm<CardForm>();
    const { data, isLoading } = useGetCardsQuery()
    return (
        <>            
            <NavigationBar/>
            {isLoading && <CircularProgress/>}
            {!isLoading && <Crud
                titlePage='Cards'
                singularTitle='Card'
                tableColumns={columns}
                fields={fields}
                formComponent={formCardHook}
                data={data}
            />}
        </>
    );
};

export default App;