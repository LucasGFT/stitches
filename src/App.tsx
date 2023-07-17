import { styled } from "@stitches/react";

import Button from "./components/Button";
import EmailIcon from "./components/icons/EmailIcon";
import SearchIcon from "./components/icons/SearchIcon";


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
          <Button iconRight={<SearchIcon />} text="Search" size="sm" />
        </div>
        <div style={{ display: 'flex', gap: '17px' }}>
          <ButtonBigContainer>
            <Button iconLeft={<EmailIcon />} iconRight={<EmailIcon />} text="Primary" />
            <Button bgColor="black" iconLeft={<EmailIcon />} text="Secondary" />
            <Button bgColor="white" iconRight={<EmailIcon />} text="Tertiary" />
            <Button iconRight={<EmailIcon />} isDisabled text="Secondary" />
          </ButtonBigContainer>
          <ButtonSmallContainer>
            <Button iconRight={<SearchIcon />} size="md" text="Show 356 Stays" />
            <Button iconLeft={<SearchIcon />} size="md" bgColor="black" text="Show 356 Stays" />
            <Button iconRight={<SearchIcon color="#000" />} iconLeft={<SearchIcon color="#000" />} size="md" bgColor="white" text="Show 356 Stays" />
          </ButtonSmallContainer>
        </div>
      </Container>
    </>
  );
}

export default App;
