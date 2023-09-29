/* eslint-disable react/prop-types */

import styled  from 'styled-components'


export const OptionList = styled.select`
  color: rgb(0 0 0 / 50%);
  padding: 7px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  margin: 0;
  border: none;
  margin-bottom: 20px;
  background: #fff;
  box-shadow:  1px 1px 6px 0px #ccc;
  text-transform: capitalize;
  margin: 0 20px 20px auto;

`
export const Option = styled.option`
  &:checked{
    background: #fcba1c;
  }
`
export default function SortProductsOptions({setSortPreference,defaultValue}){

  return(
  <OptionList name="sortProductBy" value={defaultValue} onChange={(e) => setSortPreference(e.target.value)}>
    <Option value="-createdAt" >Latest</Option>
    <Option value="createdAt" >Oldest</Option>
    <Option value="price" >Lower price</Option>
    <Option value="-price" >Higher price</Option>
    <Option value="-sold" >popular</Option>
  </OptionList>

);

}