import React from 'react'
import SimpleInput from "./components/Input/SimpleInput";
import ValidatingTextInput from "./components/Input/ValidatingTextInput";
import SelectWithOneChoosableOption from "./components/Input/SelectWithOneChoosableOption";
import SelectWithManyChoosableOptions from "./components/Input/SelectWithManyChoosableOptions";
import SelectWithInsertableOption from "./components/Input/SelectWithInsertableOption";
import {ValidatingSelectWithInsertableOption} from "./components/Input/ValidatingSelectWithInsertableOption";
import {emptyTextValidator, isFormValid, makeErrorText, numberValidator} from "./components/Input/utils/formUtils";


export {
  SimpleInput,
  ValidatingTextInput,
  SelectWithOneChoosableOption,
  SelectWithManyChoosableOptions,
  SelectWithInsertableOption,
  ValidatingSelectWithInsertableOption,
  isFormValid,
  makeErrorText,
  numberValidator,
  emptyTextValidator
}
