import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import styled from "@emotion/styled";
import { Theme } from "@mui/material";

import safeLogo from "src/assets/safe-logo.svg";
import ChainSelector from "src/components/chain-selector/ChainSelector";

type IntroProps = {
  setStep: (newStep: number) => void;
};

const Intro = ({ setStep }: IntroProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      paddingTop="72px"
      paddingLeft="100px"
    >
      <img src={safeLogo} alt="safe logo" height="30px" />

      <Typography variant="h1" fontSize="64px" lineHeight="76px">
        Safe Pay
      </Typography>

      <Typography variant="body1">
        Get paid and Pay with any Crypto Currency seamlessly using SafePay
      </Typography>

  
      <Divider style={{ alignSelf: "stretch", margin: "42px 0" }} />

      <Typography variant="h2" fontWeight="700" fontSize="20px">
        To start using app select a network:
      </Typography>

      <Typography>
        Consider that the Onramp kit will only work on Mumbai test chain and US
        based connection.
      </Typography>

      <Box display="flex" gap={2} marginTop="32px" alignItems="center">
        <ChainSelector />

        <Button variant="contained" onClick={() => setStep(1)}>
          Start App
        </Button>
      </Box>
    </Box>
  );
};

export default Intro;

const OrderLabel = styled(Typography)<{
  theme?: Theme;
}>(
  ({ theme }) => `
  border: 1px solid ${theme.palette.text.primary};
  border-radius: 4px;
  padding: 4px 6px;
  line-height: 12px;
`
);
