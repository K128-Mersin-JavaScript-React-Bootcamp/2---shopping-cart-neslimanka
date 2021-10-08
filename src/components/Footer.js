import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <Box>
        <Container maxWidth="lg" style={{ marginTop: "10px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Box style={{ marginBottom: "10px", fontWeight: "bolder" }}>
                ACCOUNT
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Account
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Order History
                </Link>
              </Box>

              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Notification Settings
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box style={{ marginBottom: "10px", fontWeight: "bolder" }}>
                USEFUL LINKS
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Your Account
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Help
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box style={{ marginBottom: "10px", fontWeight: "bolder" }}>
                CONTACT
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Contact Us
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Github
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Instagram
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  LinkedIn
                </Link>
              </Box>
              <Box>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontWeight: "lighter" }}
                >
                  Youtube
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box
            color="white"
            textAlign="center"
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
          >
            {" "}
            All right reserved.&reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
