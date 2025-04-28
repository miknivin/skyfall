import { Metadata } from 'next';
import SignInMain from '@/pages/sign-in/sign-in';

export const metadata: Metadata = {
  title: 'Travello - SignIn Page',
};

const SignInPage = () => {
  return <SignInMain />;
};

export default SignInPage;
