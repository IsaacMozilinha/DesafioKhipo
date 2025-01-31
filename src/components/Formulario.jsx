import React from "react";
import { Box, Paper, Typography, Button, TextField, MobileStepper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const steps = [
  {
    label: "Passo 1: Informações Pessoais",
    description: (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <TextField label="Observações" fullWidth variant="outlined" multiline rows={4} margin="normal" />
      </Box>
    ),
  },
  {
    label: "Passo 2: Endereço",
    description: (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Horas/Esforço" fullWidth variant="outlined" margin="normal" type="number" />
        <TextField label="Peso" fullWidth variant="outlined" margin="normal" type="number"/>
        <TextField label="Valor Comissonavel" fullWidth variant="outlined" margin="normal" type="number" />
        <TextField label="Valor Final" fullWidth variant="outlined" margin="normal" type="number" />
      </Box>
    ),
  },
  {
    label: "Passo 3: Confirmação",
    description: (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Nome" fullWidth variant="outlined" margin="normal" />
        <TextField label="Email" fullWidth variant="outlined" margin="normal" />
        <Button variant="contained" color="primary" fullWidth>Enviar</Button>
      </Box>
    ),
  },
];

export default function Formulario() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Ocupa toda a altura da janela
        width: "30vw",
        fontStyle: "bold",
        backgroundColor: "#d9d9d9",
        padding: 2,
        marginLeft: "480px",
        marginTop: "100px", // Espaço no topo para "descer" o formulário
        boxShadow: "20px, 20px 20px 20px",
      }}
    >
      <Paper
        square
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontStyle: "bold",
          padding: 4,
          bgcolor: "#fff",
          borderRadius: 2,
          width: "100%",
          maxWidth: 600,
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          {steps[activeStep].label}
        </Typography>

        <Box sx={{ width: "100%", marginBottom: 3 }}>
          {steps[activeStep].description}
        </Box>

        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="center"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{ color: "black" }}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ color: "black" }}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Paper>
    </Box>
  );
}
