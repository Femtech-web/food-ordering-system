/* eslint-disable react/prop-types */

import { Option, OptionList } from "./SortProductsOptions";

export default function FilterOrdersStateOptions({
  setStatePreferece,
  setPage,
  defaultValue,
}) {
  const handelChange = (e) => {
    e.preventDefault();
    setPage(1);
    setStatePreferece(e.target.value);
  };

  return (
    <OptionList
      defaultValue={defaultValue}
      name="filterOrdersByState"
      onChange={(e) => handelChange(e)}
    >
      <Option value="all">All</Option>
      <Option value="finish">Completed</Option>
      <Option value="unfinished">Pending</Option>
    </OptionList>
  );
}
