import CardWrapper from "./card-wrapper";

export const LoginForm = () => {
 return (
  <CardWrapper
   headerLabel='Welcome back'
   backButtonLabel="Don't have an account?"
   backButtonHref='/register'
   showSocial
  >
   Login Form
  </CardWrapper>
 );
};
