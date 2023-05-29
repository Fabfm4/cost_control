import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import {FieldCustom, formData} from './interfaces';
import { Controller, UseFormReturn } from "react-hook-form";
import React from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


type PropsFormBuilder = {
    fields: FieldCustom[];
    formComponent: UseFormReturn<any, any>;
};

const FormBuilder: React.FC<PropsFormBuilder> = ({fields, formComponent}) => {
  const {control, handleSubmit} = formComponent;
  const onSubmit = (data:formData) => console.log(data);
  const fieldsBuilder = (fieldCustom:FieldCustom) => {
      return <Grid item {...fieldCustom.gridProps} key={fieldCustom.name}>
          <Controller
            name={fieldCustom.name}
            control={control}
            defaultValue={fieldCustom.defaultValue}
            rules={fieldCustom.rules}
            render={({ field: { onChange, onBlur, value, ref }, fieldState: {invalid, error}}) => (
              <>
                  <fieldCustom.fieldObject
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    refField={ref}
                    fieldProps={fieldCustom.fieldProps}
                    invalid={invalid}
                    error={error}
                    staticOptions={fieldCustom.staticOptions}
                  />
              </>
            )}
          />
      </Grid>;
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Container>
          <FormControl fullWidth>
              <Grid container columnSpacing={5} rowSpacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
                {fields.map(field => fieldsBuilder(field))}
              </Grid>
              <Button onClick={handleSubmit(onSubmit)}>Add</Button>
          </FormControl>
        </Container>
    </Box>
  );
}

export default FormBuilder;
