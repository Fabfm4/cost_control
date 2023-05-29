import { Column } from "../TableData/interfaces";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TableData from '@/components/TableData';
import FormBuilder from '@/components/FormBuilder';
import { FieldCustom } from '@/components/FormBuilder/interfaces';
import { UseFormReturn } from "react-hook-form";
import CircularProgress from '@mui/material/CircularProgress';

import Head from 'next/head';
import React from "react";


interface Props {
    titlePage: string;
    singularTitle: string;
    tableColumns: Array<Column>;
    fields: FieldCustom[];
    formComponent: UseFormReturn<any, any>;
    data?: {
        [key:string]: any
    }[];
};

const Crud: React.FC<Props> = ({titlePage, tableColumns, singularTitle, fields, formComponent, data}) => {
    return (
        <>
            <Head>
                <title>{titlePage}</title>
            </Head>
            <Container>
                <Grid xs={12} sm={6} item={true}>
                    <h1>{titlePage}</h1>
                </Grid>
                <Grid xs={12} sm={6} item={true}>
                    <Button variant="outlined" endIcon={<AddIcon />}>
                        Add {singularTitle}
                    </Button>
                </Grid>
                <Grid xs={12} sm={6} item={true}>
                    <FormBuilder fields={fields} formComponent={formComponent}/>
                </Grid>
                <Grid xs={12} sm={6} item={true}>
                    <TableData columns={tableColumns} modelData={data}/>
                </Grid>
            </Container>
        </>
    );
};

export default Crud;