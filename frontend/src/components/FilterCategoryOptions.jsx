/* eslint-disable react/prop-types */

import {Option,OptionList} from './SortProductsOptions'

export default function FilerCategoryOptions({categories,setCategoryPreference,defaultValue}){

  const handelChange = (e) =>{
    e.preventDefault()
    setCategoryPreference(e.target.value)
  }

  return(
    <OptionList value={defaultValue} name="filterProductsByCategory" onChange={(e) =>handelChange(e)}>
      <Option value="all" >All categories</Option>
      {categories?.map( category =>

        <Option value={category.name} key={category._id} >{category.name}</Option>

      )}
    </OptionList>

  );

}