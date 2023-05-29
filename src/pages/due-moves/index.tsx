import NavigationBar from "@/components/NavigationBar";
import { Column } from '@/components/TableData/interfaces';
import Crud from '@/components/Crud';
import { useGetDueMovesQuery } from "@/reduxToolkits/api/DueMoves";
import { CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import {FieldCustom} from "@/components/FormBuilder/interfaces";
import {CustomTextField as TextField, CustomSelectStaticOptionsField as SelectStaticOptions} from "@/components/FormBuilder/InputTypes";

const columns: Column[] = [{
    text: 'ID',
    id: 'id',
    minWidth: 50
},{
    text: 'Due Move Date',
    id: 'due_move_date',
    minWidth: 50
},{
    text: 'Current Due',
    id: 'current_due',
    minWidth: 50
},{
    text: 'Total Amount',
    id: 'total_amount',
    minWidth: 50
},{
    text: 'Due Amount',
    id: 'due_amount',
    minWidth: 50
},{
    text: 'Card',
    id: 'card_id',
    minWidth: 100
},{
    text: 'Subcategory',
    id: 'subcategory_id',
    minWidth: 100
},]; 

const fields: FieldCustom[] = [
    {
        name: 'due_move_date',
        fieldObject: TextField,
        fieldProps: {
            variant: 'standard',
            label: "Due Move Date",
            id: 'due_move_date'
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
        name: 'current_due',
        fieldObject: TextField,
        fieldProps: {
            variant: 'standard',
            label: "Current Date",
            id: 'current_due'
        },
        gridProps: {
            xs: 6,
            md: 6,
            sm: 12,
        },
        defaultValue: ""
    },
    {
        name: 'total_amount',
        fieldObject: TextField,
        fieldProps: {
            variant: 'standard',
            label: "Total Amount",
            id: 'total_amount'
        },
        gridProps: {
            xs: 6,
            md: 6,
            sm: 12,
        },
        defaultValue: ""
    },
    {
        name: 'due_amount',
        fieldObject: TextField,
        fieldProps: {
            variant: 'standard',
            label: "Due Amount",
            id: 'due_amount'
        },
        gridProps: {
            xs: 6,
            md: 6,
            sm: 12,
        },
        defaultValue: ""
    },
    {
        name: 'card_id',
        fieldObject: SelectStaticOptions,
        fieldProps: {
            variant: 'standard',
            label: "Card",
            id: 'card_id'
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
        name: 'subcategory_id',
        fieldObject: SelectStaticOptions,
        fieldProps: {
            variant: 'standard',
            label: "Sub Category",
            id: 'subcategory_id'
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

interface DueMovesForm {
    name: string;
};

const App: React.FunctionComponent = () => {
    const { data, isLoading } = useGetDueMovesQuery();
    const formBankHook = useForm<DueMovesForm>();

    return (
        <>            
            <NavigationBar/>
            {isLoading && <CircularProgress/>}

            {!isLoading && <Crud
                titlePage='Due Moves'
                singularTitle='Due Move'
                tableColumns={columns}
                fields={fields}
                formComponent={formBankHook}
                data={data}
            />}
        </>
    );
};

export default App;