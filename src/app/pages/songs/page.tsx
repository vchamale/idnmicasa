import SongsTable from "@/components/SongsTable/SongsTable";
import { Container, Typography, Box } from "@mui/material";

const Songs = () => {
  return (
    <Container>
      <Box display={"flex"} justifyContent={"center"} paddingTop={6}>
        <Typography variant="h3" gutterBottom>
          Listado Miércoles 6 Nov
        </Typography>
      </Box>
      <Box paddingTop={2}>
        <SongsTable />
      </Box>
    </Container>
  );
};

export default Songs;
