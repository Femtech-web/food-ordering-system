/* eslint-disable react/prop-types */

import { Option, OptionList } from "./SortProductsOptions";

export default function FilterProductsStateOptions({
  setStatePreferece,
  defaultValue,
}) {
  const handelChange = (e) => {
    e.preventDefault();

    setStatePreferece(e.target.value);
  };

  return (
    <OptionList
      name="filterProductsByState"
      value={defaultValue}
      onChange={(e) => handelChange(e)}
    >
      <Option value="all">All</Option>
      <Option value="active">Active</Option>
      <Option value="inactive">Inactive</Option>
    </OptionList>
  );
}
