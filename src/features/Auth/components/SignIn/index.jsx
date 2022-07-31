import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
function SignIn() {
  const SignInSchema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email.")
      .email("Please enter an valid email address."),
    password: yup
      .string()
      .required("Please enter your password.")
      .min(6, "Please enter at least six characters."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });
  const onSubmit = (data) => {
    console.log("Information:", data);
  };
  return (
    <Box
      sx={{
        width: 400,
        minHeight: 300,
        backgroundColor: "white",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div style={{ fontSize: "30px", marginBottom: "30px" }}>Sign In</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          mt: "30px",
        }}
      >
        <TextField
          sx={{
            width: "100%",
          }}
          id='outlined-basic'
          label='Email'
          variant='outlined'
          {...register("email")}
        />
        {errors.email && (
          <Typography sx={{ color: "red", textAlign: "left" }}>
            {errors.email.message}
          </Typography>
        )}
        <TextField
          sx={{
            width: "100%",
          }}
          id='outlined-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
          {...register("password")}
        />
        {errors.password && (
          <Typography sx={{ color: "red", textAlign: "left" }}>
            {errors.password.message}
          </Typography>
        )}

        <Button
          variant='contained'
          type='submit'
          sx={{
            mt: "30px",
            mb: "30px",
            height: "50px",
            backgroundColor: "blue!important",
          }}
        >
          Sign In
        </Button>
      </form>
    </Box>
  );
}

export default SignIn;
