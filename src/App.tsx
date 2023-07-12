import { styled } from "@stitches/react";

import Button from "./components/Button";
import EmailIcon from "./components/icons/EmailIcon";
import SearchIcon from "./components/icons/SearchIcon";
import LocationIcon from "./components/icons/LocationIcon";
import VoicemailIcon from "./components/icons/VoicemailIcon";

function App() {
  const ButtonBigContainer = styled('div', {
    width: '367px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '360px',
    paddingTop: '4px',
    paddingBottom: '4px',
    border: '1px dashed #9747FF',
    borderRadius: '5px',

    '& button': {
      marginTop: '16px',
      marginBottom: '16px'
    }
  })

  const ButtonSmallContainer = styled('div', {
    width: '253px',
    height: '274px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',
    border: '1px dashed #9747FF',
    justifyContent: 'space-between'
  })

  const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh'
  });


  return (
    <Container>
      <div style={{ display: 'flex', gap: '22px', alignItems: 'center', marginBottom: '149px' }}>
        <Button
          size="big"
          color="black"
          text="Agee and continue"
          icon={<SearchIcon />}
          icon2={<LocationIcon />}
          icon3={<VoicemailIcon />} />
        <Button
          size="small"
          color="red"
          text="Search"
          icon={<SearchIcon />} />
      </div>
      <div style={{ display: 'flex', gap: '17px' }}>
        <ButtonBigContainer>
          <Button
            size="big"
            color="red"
            text="Primary"
            icon={<EmailIcon />}
          />
          <Button
            size="big"
            color="black"
            text="Secondary"
            icon={<EmailIcon />}
          />
          <Button
            size="big"
            tertiary
            text="Tertiary"
            icon={<EmailIcon color="#000" />}
          />
          <Button
            size="big"
            text="Secondary"
            icon={<EmailIcon />}
            disabled
          />
        </ButtonBigContainer>
        <ButtonSmallContainer>
          <Button
            size="medium"
            text="Show 365 Stays"
            icon={<SearchIcon />}
            color="red" />
          <Button
            size="medium"
            text="Show 365 Stays"
            icon={<SearchIcon />}
            color="black" />
          <Button
            size="medium"
            text="Show 365 Stays"
            icon={<SearchIcon color="#000" />}
            color="white" />
          <Button
            size="medium"
            text="Show 365 Stays"
            icon={<SearchIcon />}
            disabled />
        </ButtonSmallContainer>
      </div>
    </Container >
  );
}

export default App;
