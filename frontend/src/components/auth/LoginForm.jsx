/* eslint-disable react/prop-types */

import useLoginForm from "../../hooks/useLoginForm";
import { LoaderSpinner } from "../LoaderSpinner";
import { ButtonPrimary } from "../Buttons";
import burgerIcon from "../../img/burger-icon.png";

import {
  FormCard,
  Logo,
  Form,
  FormLink,
  UserEmailInput,
  UserPasswordInput,
  ErrorServerMessage,
} from "./SignupForm";

export default function SignInForm({ setIsModalOpened }) {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    serverError,
    isFormLoading,
  } = useLoginForm();

  return (
    <FormCard>
      <Logo src={burgerIcon} alt="LogoBrand"></Logo>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <UserEmailInput errors={errors} register={register} name="userEmail" />
        <UserPasswordInput
          name="userPassword"
          placeholder="Password..."
          errors={errors}
          register={register}
        />

        <ErrorServerMessage>{serverError}</ErrorServerMessage>

        <FormLink to="/authentication/signUp">
          Are you a new user? <b>Sign Up</b>{" "}
        </FormLink>
        <FormLink as="a" onClick={() => setIsModalOpened(true)}>
          Forgot Password?
        </FormLink>
        <ButtonPrimary as="input" type="submit" value="Login" />
        {isFormLoading && <LoaderSpinner small />}
      </Form>
    </FormCard>
  );
}
