"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Box,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Link } from "@mui/material";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        setErrorMessage(res?.error);
        setShowError(true);
        setIsLoading(false);
      } else {
        router.push("/pages/dashboard");
        router.refresh();
        console.log("respuesta", res);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  });

  return (
    <Container maxWidth="xs" sx={{ paddingTop: 4 }}>
      <Box marginBottom={5}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          sx={{ color: "#212529" }}
        >
          Inicio de Sesión
        </Typography>
      </Box>
      {showError && (
        <Box marginBottom={5}>
          <Typography
            color="red"
            variant="h6"
            component="h4"
            gutterBottom
            align="center"
          >
            {errorMessage}
          </Typography>
        </Box>
      )}
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100px"
        >
          <CircularProgress size={60} />{" "}
        </Box>
      ) : (
        <>
          <form onSubmit={onSubmit}>
            <Grid container spacing={2}>
              {/* Campo de Correo */}
              <Grid item xs={12}>
                <TextField
                  label="Correo"
                  variant="outlined"
                  fullWidth
                  required
                  {...register("email", {
                    required: "Este campo es obligatorio",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Correo electrónico no válido",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>

              {/* Campo de Contraseña */}
              <Grid item xs={12}>
                <TextField
                  label="Contraseña"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                  {...register("password", {
                    required: "Este campo es obligatorio",
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </Grid>

              <Grid item xs={12} marginTop={3}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Iniciar Sesión
                </Button>
              </Grid>
            </Grid>
          </form>
          <Box display={"flex"} justifyContent={"center"} marginTop={3}>
            <Link href={"/auth/register"}>No tienes cuenta?</Link>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Login;
