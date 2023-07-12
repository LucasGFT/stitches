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
    <>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '149px', gap: '22px' }}>
          <Button text="Agee and continue" bgColor="black" icon={<EmailIcon />} moreIcons={[<LocationIcon />, <VoicemailIcon />]} />
          <Button icon={<SearchIcon />} text="Search" size="sm" />
        </div>
        <div style={{ display: 'flex', gap: '17px' }}>
          <ButtonBigContainer>
            <Button icon={<EmailIcon />} text="Primary" />
            <Button bgColor="black" icon={<EmailIcon />} text="Secondary" />
            <Button oneIcon bgColor="white" icon={<EmailIcon color="#000" />} text="Tertiary" />
            <Button isDisabled icon={<EmailIcon />} text="Secondary" />
          </ButtonBigContainer>
          <ButtonSmallContainer>
            <Button icon={<SearchIcon />} size="md" text="Show 356 Stays" />
            <Button icon={<SearchIcon />} size="md" bgColor="black" text="Show 356 Stays" />
            <Button icon={<SearchIcon color="#000" />} size="md" bgColor="white" text="Show 356 Stays" />
            <Button icon={<SearchIcon />} size="md" isDisabled text="Show 356 Stays" />
          </ButtonSmallContainer>
        </div>
      </Container>
    </>
  );
}

export default App;
