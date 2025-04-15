import AddView from "./AddView";
import { useAdd } from "./useAdd";

const AddCategory = () => {
  const logic = useAdd();
  return <AddView {...logic} />;
};

export default AddCategory;
