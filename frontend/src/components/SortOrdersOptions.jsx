/* eslint-disable react/prop-types */

import {Option,OptionList} from './SortProductsOptions'

export default function SortOrdersOptions({setSortPreferece,defaultValue}){


return(
<OptionList  defaultValue={defaultValue} name="sortProductBy" onChange={(e) => setSortPreferece(e.target.value)}>
<Option value="-createdAt" >Recent</Option>
<Option value="createdAt" >Oldest</Option>
<Option value="total" >Higher Price</Option>
<Option value="-total">Lower Price</Option>

</OptionList>

);

}