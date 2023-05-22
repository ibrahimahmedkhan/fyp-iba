import { TextField } from '@mui/material';

export function MyTextField({
  formik, name, label, placeholder,
}: { formik: any, name: string, label: string, placeholder: string }) {
  return (

    <TextField
      label={label}
      variant="standard"
      margin="normal"
      value={formik.values[name]}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      name={name}
      fullWidth
      placeholder={placeholder}
    />
  );
}
