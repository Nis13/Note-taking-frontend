import { Box, Button, Container, Modal, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import WarningText from "../../../components/WarningText";
import { addSchema } from "./add.schema";
import Loading from "../../../components/Loading";
import TextInput from "../../../components/TextInput";
import { AddNoteViewProps } from "./add.types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddView = ({
  handleAddTask,
  openModal,
  handleOpen,
  handleClose,
  isLoading,
  errorResponse,
}: AddNoteViewProps) => {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "flex-end", margin: "1rem 0" }}
    >
      <Box>
        <Button variant="contained" onClick={handleOpen} size="large">
          Add Category
        </Button>
      </Box>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h2"
            textAlign={"center"}
            sx={{ padding: "1rem" }}
            color="primary.main"
          >
            Add Category
          </Typography>
          <Formik
            initialValues={{
              name: "",
            }}
            validationSchema={addSchema}
            onSubmit={async (values) => {
              handleAddTask(values);
            }}
          >
            {(props) => {
              const { values, handleChange, errors, touched, isSubmitting } =
                props;
              return (
                <Form>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "2rem",
                    }}
                  >
                    <TextInput
                      label="name"
                      type="name"
                      name="name"
                      value={values.name}
                      isDisabled={isLoading}
                      onChange={handleChange}
                    />
                    {errors.name && touched.name ? (
                      <WarningText message={errors.name} />
                    ) : null}
                    <Box alignSelf={"center"}>
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{ backgroundColor: "primary.main" }}
                        disabled={isLoading || isSubmitting}
                      >
                        Add Category
                      </Button>
                    </Box>
                    <Box>
                      <WarningText message={errorResponse} />
                      {isLoading ? <Loading height="1rem" /> : null}
                    </Box>
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Modal>
    </Container>
  );
};

export default AddView;
