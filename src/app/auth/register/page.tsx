"use client";

import React from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Box,
  Link,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface FormValues {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const dateOfBirthIso = new Date(data.dateOfBirth);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        names: data.firstName.trim(),
        lastNames: data.lastName.trim(),
        dateOfBirth: dateOfBirthIso,
        phone: data.phone,
        email: data.email,
        username: data.email.split("@")[0],
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/auth/login");
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
          Registrarse
        </Typography>
      </Box>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          {/* Campo de Nombres */}
          <Grid item xs={12}>
            <TextField
              label="Nombres"
              variant="outlined"
              fullWidth
              required
              {...register("firstName", {
                required: "Este campo es obligatorio",
              })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </Grid>

          {/* Campo de Apellidos */}
          <Grid item xs={12}>
            <TextField
              label="Apellidos"
              variant="outlined"
              fullWidth
              required
              {...register("lastName", {
                required: "Este campo es obligatorio",
              })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </Grid>

          {/* Campo de Fecha de Nacimiento */}
          <Grid item xs={12}>
            <TextField
              label="Fecha de Nacimiento"
              type="date"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
              {...register("dateOfBirth", {
                required: "Este campo es obligatorio",
                validate: (value) => {
                  const selectedDate = new Date(value);
                  const today = new Date();
                  if (selectedDate >= today) {
                    return "La fecha de nacimiento debe ser anterior a hoy";
                  }
                  return true;
                },
              })}
              error={!!errors.dateOfBirth}
              helperText={errors.dateOfBirth?.message}
            />
          </Grid>

          {/* Campo de Teléfono */}
          <Grid item xs={12}>
            <TextField
              label="Teléfono"
              variant="outlined"
              type="text"
              inputMode="numeric"
              fullWidth
              required
              {...register("phone", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[0-9]{8}$/, // Patrón para números de teléfono de 8 dígitos
                  message: "Número de teléfono no válido (8 dígitos)",
                },
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          </Grid>

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

          {/* Campo de Confirmar Contraseña */}
          <Grid item xs={12}>
            <TextField
              label="Confirmar Contraseña"
              type="password"
              variant="outlined"
              fullWidth
              required
              {...register("confirmPassword", {
                required: "Este campo es obligatorio",
                validate: (value) => {
                  const password = watch("password");
                  return value === password || "Las contraseñas no coinciden";
                },
              })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          </Grid>

          <Grid item xs={12} marginTop={6}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Registrarse
            </Button>
          </Grid>
        </Grid>
      </form>
      <Link href={"/auth/login"}>Ya tienes cuenta?</Link>
    </Container>
  );
};

export default Register;
