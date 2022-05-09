import { Error } from '@components/illustrations/Error';
import { Typography } from '@components/UI/atoms/Typography';
import { Layout } from '@components/UI/organisms/Layout';
import { colors } from '@styles/theme';
import Link from 'next/link';
import { Anchor, MessageErrorIllustration, MessageErrorWrapper, NumberErrorLeft, NumberErrorRight } from './ErrorPages.styled';

const InternalServerErrorPage = () => (
  <Layout alignItems="center">
    <MessageErrorWrapper>
      <MessageErrorIllustration>
        <NumberErrorLeft>5</NumberErrorLeft>
        <Error />
        <NumberErrorRight>0</NumberErrorRight>
      </MessageErrorIllustration>
      <Typography variant="h2" color={colors.white}>¡Lo sentimos!, ha ocurrido un error</Typography>
      <Link href="/" passHref>
        <Anchor aria-label="Volver a la página de inicio">Volver al inicio</Anchor>
      </Link>
    </MessageErrorWrapper>
  </Layout>
);

export default InternalServerErrorPage;
