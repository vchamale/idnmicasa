import { Box } from "@mui/material";
import React from "react";
import DashboardCard from "@/components/DashboardCard/DashboardCard";

const DashboardPage = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={"16px"}
        paddingX={2}
        paddingY={6}
      >
        <DashboardCard
          title="Músicos"
          description="Revisa listados, sube cifrados..."
          route="/pages/songs"
        />
      </Box>
    </>
  );
};

export default DashboardPage;
