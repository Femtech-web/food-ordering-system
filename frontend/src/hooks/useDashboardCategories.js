import { useState } from "react";
import { useStorage } from "../context/useStorage";
import updateCategoryNameAPI from "../API/updateCategoryNameAPI";
import deleteCategoryAPI from "../API/deleteCategoryAPI";
import createCategoryAPI from "../API/createCategoryAPI";

export default function useCategoriesForms() {
  const { categories, setIsSuccessfullySend, token, setAllCategories } =
    useStorage();

  const [isRenameFormLoading, setIsRenameFormLoading] = useState(false);
  const [isCreateFormLoading, setIsCreateFormLoading] = useState(false);
  const [isDeleteFormLoading, setIsDeleteFormLoading] = useState(false);

  const [categorySelectId, setCategorySelectId] = useState("");
  const [categoryFormerName, setCategoryFormerName] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const confirmation = window.confirm(
      "When deleting the category, all the products within it will be deleted, are you sure?",
    );
    const onSuccess = () => {
      setIsDeleteFormLoading(false);
      setIsSuccessfullySend(true);
      setAllCategories(
        categories.filter((category) => category._id !== categorySelectId),
      );
      setTimeout(() => {
        setIsSuccessfullySend(false);
      }, 3000);
    };

    if (confirmation) {
      setIsDeleteFormLoading(true);
      await deleteCategoryAPI({ categorySelectId, token });

      onSuccess();
    }
  };

  const handleRenameSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const info = {
      categoryNewName: e.target.categoryNewName.value.trim(),
      categoryOldName: categoryFormerName.trim(),
    };
    const onSuccess = (data) => {
      setIsRenameFormLoading(false);
      setAllCategories(
        categories.map((category) =>
          category._id === categorySelectId
            ? { ...category, name: data.category.name }
            : category,
        ),
      );
      setIsSuccessfullySend(true);
      setTimeout(() => {
        setIsSuccessfullySend(false);
      }, 3000);
    };
    setIsRenameFormLoading(true);
    await updateCategoryNameAPI({
      categorySelectId,
      info,
      onSuccess,
      token,
    });
    setIsRenameFormLoading(false);
  };
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const info = {
      category: e.target.newCategory.value.trim(),
    };
    const onSuccess = (data) => {
      e.target.newCategory.value = "";
      setIsCreateFormLoading(false);
      setAllCategories([...categories, data.category]);
      setIsSuccessfullySend(true);
      setTimeout(() => {
        setIsSuccessfullySend(false);
      }, 3000);
    };
    setIsCreateFormLoading(true);
    await createCategoryAPI({
      token,
      info,
      onSuccess,
      e,
    });
    setIsCreateFormLoading(false);
  };
  const handleCategorySelect = (e) => {
    setCategorySelectId(e.target.value.split("/")[0]);
    setCategoryFormerName(e.target.value.split("/")[1]);
    // console.log(e.target.value.split('/')[0]);
    // console.log(e.target.value.split('/')[1])
  };
  return {
    handleRenameSubmit,
    handleCategorySelect,
    handleCreateSubmit,
    isDeleteFormLoading,
    handleDelete,
    isRenameFormLoading,
    isCreateFormLoading,
    categories,
  };
}
