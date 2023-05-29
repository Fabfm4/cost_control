type GridProps = {
    xs: number;
    sm: number;
    md: number;
};

export interface staticOption {
    id: string;
    value: string | number;
    label: string;
}

export interface FieldCustom {
    name: string;
    fieldObject: any;
    fieldProps: any;
    gridProps: GridProps;
    rules?: {
        [key: string]: any
    };
    defaultValue: any;
    staticOptions?: staticOption[];
};

export interface formData {
    [key: string]: any;
};
