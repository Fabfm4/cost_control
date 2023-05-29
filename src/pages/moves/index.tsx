import NavigationBar from "@/components/NavigationBar";
import { Column } from '@/components/TableData/interfaces';
import Crud from '@/components/Crud';
import { useGetMovesQuery } from "@/reduxToolkits/api/Moves";
import { useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";
import {FieldCustom} from "@/components/FormBuilder/interfaces";
import {CustomTextField as TextField, CustomSelectStaticOptionsField as SelectStaticOptions} from "@/components/FormBuilder/InputTypes";


const columns: Column[] = [{
    text: 'ID',
    id: 'id',
    minWidth: 50
},{
    text: 'Move Date',
    id: 'move_date',
    minWidth: 50
},{
    text: 'Amount',
    id: 'amount',
    minWidth: 50
},{
    text: 'Due',
    id: 'due_id',
    minWidth: 50
},{
    text: 'Card',
    id: 'card_id',
    minWidth: 50
},{
    text: 'Subcategory',
    id: 'subcategory_id',
    minWidth: 100
},]; 

interface MovesForm {
    name: string;
};

const fields: FieldCustom[] = [
    {
        name: 'move_date',
        fieldObject: TextField,
        fieldProps: {
            variant: 'standard',
            label: "Move Date",
            id: 'move_date'
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
        name: 'amount',
        fieldObject: TextField,
        fieldProps: {
            variant: 'standard',
            label: "Amount",
            id: 'amount'
        },
        gridProps: {
            xs: 6,
            md: 6,
            sm: 12,
        },
        defaultValue: ""
    },
    {
        name: 'due_id',
        fieldObject: TextField,
        fieldProps: {
            variant: 'standard',
            label: "Due",
            id: 'due_id'
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
        fieldObject: TextField,
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
        defaultValue: ""
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

const App: React.FunctionComponent = () => {
    const formCardHook = useForm<MovesForm>();
    const { data, isLoading } = useGetMovesQuery()

    return (
        <>            
            <NavigationBar/>
            {isLoading && <CircularProgress/>}
            {!isLoading && <Crud
                titlePage='Moves'
                singularTitle='Move'
                tableColumns={columns}
                fields={fields}
                formComponent={formCardHook}
                data={data}
            />}
        </>
    );
};

export default App;