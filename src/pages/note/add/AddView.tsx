import { Box, Button, Container, Modal, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import WarningText from "../../../components/WarningText";
import { AddNoteViewProps } from "./add.types";
import { addSchema } from "./add.schema";
import Loading from "../../../components/Loading";
import TextInput from "../../../components/TextInput";
import CategorySelect from "../../../components/CategorySelect";

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
          Add Note
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
            Add Note
          </Typography>
          <Formik
            initialValues={{
              title: "",
              content: "",
              categoryIds: [],
            }}
            validationSchema={addSchema}
            onSubmit={async (values) => {
              handleAddTask(values);
            }}
          >
            {(props) => {
              const {
                values,
                handleChange,
                errors,
                touched,
                isSubmitting,
                setFieldValue,
              } = props;
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
                      label="title"
                      type="title"
                      name="title"
                      value={values.title}
                      isDisabled={isLoading}
                      onChange={handleChange}
                    />
                    {errors.title && touched.title ? (
                      <WarningText message={errors.title} />
                    ) : null}
                    <TextInput
                      label="content"
                      type="content"
                      name="content"
                      value={values.content}
                      isDisabled={isLoading}
                      onChange={handleChange}
                    />
                    {errors.content && touched.content ? (
                      <WarningText message={errors.content} />
                    ) : null}

                    <CategorySelect
                      selectedCategoryIds={values.categoryIds}
                      setFieldValue={setFieldValue}
                    />

                    <Box alignSelf={"center"}>
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{ backgroundColor: "primary.main" }}
                        disabled={isLoading || isSubmitting}
                      >
                        Add Note
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
