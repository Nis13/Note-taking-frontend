import { Box, Container, Paper, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="90vh"
        textAlign="center"
      >
        <Paper
          elevation={4}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: 2,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h2" color="primary" gutterBottom>
            Welcome to Your Note Taking Website
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Stay organized and keep track of your tasks easily. Get started by
            logging in or signing up.
          </Typography>
          <Box display="flex" gap={2} maxHeight={"3rem"} minWidth={"13rem"}>
            <Button
              component={NavLink}
              to="login"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ fontWeight: "bold" }}
            >
              Log in
            </Button>
            <Button
              component={NavLink}
              to="signup"
              variant="outlined"
              color="primary"
              fullWidth
              sx={{ fontWeight: "bold" }}
            >
              Sign Up
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home;
