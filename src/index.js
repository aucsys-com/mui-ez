import React from 'react'
import SimpleInput from "./components/Input/SimpleInput";
import ValidatingTextInput from "./components/Input/ValidatingTextInput";
import SelectWithOneChoosableOption from "./components/Input/SelectWithOneChoosableOption";
import SelectWithManyChoosableOptions from "./components/Input/SelectWithManyChoosableOptions";
import SelectWithInsertableOption from "./components/Input/SelectWithInsertableOption";
import {ValidatingSelectWithInsertableOption} from "./components/Input/ValidatingSelectWithInsertableOption";
import CustomButton from './components/Button/CustomButton'
import {emptyTextValidator, isFormValid, makeErrorText, numberValidator} from "./components/Input/utils/formUtils";
import EmailField from './components/Input/EmailField'
import PasswordField from './components/Input/PasswordField'
import PhoneField from './components/Input/PhoneField'

export {
  SimpleInput,
  ValidatingTextInput,
  SelectWithOneChoosableOption,
  SelectWithManyChoosableOptions,
  SelectWithInsertableOption,
  ValidatingSelectWithInsertableOption,
  CustomButton,
  EmailField,
  PasswordField,
  PhoneField,
  isFormValid,
  makeErrorText,
  numberValidator,
  emptyTextValidator
}
