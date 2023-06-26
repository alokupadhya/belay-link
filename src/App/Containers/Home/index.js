import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import { Images } from 'App/Components';

export default function Home() {
  const BoxContainer = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${Images.home.bg})`,
    position: "relative",
    backgroundSize: 'cover',
    
    [theme.breakpoints.up('xs')]: {
      backgroundPosition: '75% 56px'
    },
    [theme.breakpoints.up('sm')]: {
      backgroundPosition: '0px 54px'
    },
  }));

  const BoxOverlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      padding: '20px 10px'
    },
  }));

  const PaperContainer = styled(Paper)(({ theme }) => ({
    backgroundColor: '#ffffffe8',
    ...theme.typography.body2,
    padding: "40px 30px 90px 30px",
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius:'25px',
    boxShadow: "9px 12px 20px -10px #2b2b2b",
    margin: "10px"
  }));

  const ButtonBig = styled(Button)(({ theme }) => ({
    padding: "10px 30px",
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: "block",
    width: "100%",
    fontWeight:"bolder",
    borderRadius:'50px',
    fontSize: '14px'
  }));

  const ButtonText = styled(Typography)(({ theme }) => ({
    fontWeight: "bolder",
    color: 'black',
    fontSize: "21px",
    textTransform: "none"
  }));

  return (
    <BoxContainer height={"100vh"} >
      <BoxOverlay>
        <Container sx={{mt:10}} >
          <PaperContainer>
            <Typography variant='h4' mb={4} fontWeight={'bolder'} color={'black'}>
              Find people to do sports together
            </Typography>
            <Grid container spacing={2} >
              <Grid item xs={12} sm={6} >
                <ButtonBig sx={{backgroundColor:"#FFD465"}}>
                  <ButtonText>
                    I’m looking for...
                  </ButtonText>
                  <img src={Images.home.lookingFor} alt={'Looking for'}/>
                </ButtonBig>
              </Grid>
              <Grid item xs={12} sm={6} >
                <ButtonBig sx={{backgroundColor:"#00C6AE"}}>
                  <ButtonText>
                    Look around
                  </ButtonText>
                  <img src={Images.home.lookAround} alt={'Look Around'} style={{marginTop: "8px", marginBottom: "2px"}}/>
                </ButtonBig>
              </Grid>
            </Grid>
          </PaperContainer>
        </Container>
      </BoxOverlay>
    </BoxContainer>
  )
}
