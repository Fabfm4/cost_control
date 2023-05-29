import React from "react";
import {FieldCustom, staticOption} from "@/components/FormBuilder/interfaces";
import {Noop, RefCallBack} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {element} from "prop-types";

enum TypeField {
    Text = "TEXT",
    Select = "SELECT",
    Radio = "RADIO"
}
type Props = {
    onChange?: any;
    onBlur?: Noop;
    value?: any
    invalid?: any
    error?: any
    refField?: RefCallBack;
    fieldProps: {
        [key:string]: any;
    };
    staticOptions?: staticOption[];
}

const CustomTextField: React.FC<Props> = ({fieldProps, refField, value, onBlur, onChange, error, invalid}) => {
    return <>
        <TextField
            error={invalid}
            fullWidth
            onChange={onChange} // send value to hook form
            onBlur={onBlur} // notify when input is touched
            value={value} // return updated value
            ref={refField} // set ref for focus management
            {...fieldProps}
        />
    </>;
};

const CustomSelectStaticOptionsField: React.FC<Props> = ({fieldProps, refField, value, onBlur, onChange, error, invalid, staticOptions}) => {
    const buildStaticOptions: React.FC<{element: staticOption}> = ({element}) => {
        return <MenuItem key={element.id} value={element.value}>{element.label}</MenuItem>
    }

    return <FormControl variant="standard" fullWidth>
        <InputLabel id="select-standard-label">{fieldProps.label}</InputLabel>
        <Select
            labelId="select-standard-label"
            value={value}
            onChange={onChange}
            {...fieldProps}
        >
            {staticOptions && staticOptions.map((element) => buildStaticOptions({element}))}
        </Select>
    </FormControl>;
}

export {CustomTextField, CustomSelectStaticOptionsField};
