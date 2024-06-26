import { Trans } from '@lingui/macro';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LanguageButton } from '../../../shared/components/language/LanguageButton';
import { Logo } from '../../../shared/components/images/Logo';
import { Page } from '../../../shared/components/containers/Page';

export const AuthLandingPage = () => {
  const navigate = useNavigate();

  return (
    <Page className="flex items-center justify-between flex-col pt-20 pb-8">
      <div className="flex-1 pt-10">
        <Logo size="large"></Logo>
      </div>
      <section className="grid gap-5 w-full px-8 mb-10">
        <Button
          size="large"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
            navigate('register');
          }}
        >
          <Trans id="Auth.Register">REGISTER</Trans>
        </Button>
        <Button
          size="large"
          fullWidth
          variant="outlined"
          color="primary"
          onClick={() => {
            navigate('sign-in');
          }}
        >
          <Trans id="Auth.SignIn">SIGN IN</Trans>
        </Button>
      </section>
      <LanguageButton></LanguageButton>
    </Page>
  );
};
