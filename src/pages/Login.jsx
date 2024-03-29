import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import { object, string, number, date, InferType } from "yup";
import useAuthCalls from "../service/useAuthCalls";
const { login } = useAuthCalls;
const Login = () => {
  const loginSchema = object({
    password: string()
      .required("şifre zorunludur")
      .min(8, "şifre en az 8 karakter içermelidir.")
      .matches(/\d+/, "şifreniz en az 1 rakam içermelidir.")
      .matches(/[a-z]/, "şifre en az bir küçük harf içermelidir. ")
      .matches(/[A-Z]/, "şifre en az bir büyük karakter içermelidir.")
      .matches(/[@$!%*?&]+/, "en az bir özel karakter içermelidir."),
    email: string()
      .email("geçerli bir email giriniz")
      .required("email girişi zorunludur"),
  });
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              login(values);
              //TODO login(post) istegi
              actions.resetForm();
              actions.setSubmitting(false); //? isSubmitting
              //? veriler global state'e aktırlabilir
              //? navigasyon yapılabilir
              //? tost yapılabilr
            }}
          >
            {({ handleChange, values, touched, errors, handleBlur }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={errors.email}
                    onBlur={handleBlur}
                  />
                  <TextField
                    label="password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && Boolean(errors.password)}
                    helperText={errors.password}
                    onBlur={handleBlur}
                  />
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
