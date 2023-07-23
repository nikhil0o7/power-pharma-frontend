import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Welcome() {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    component="h3"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    WELCOME TO POWER PHARMA
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary" paragraph>
                    Power pharma group is the company , we manufacture our products at WHO standards, ISO & GMP certified premises to meet stringent International standards".
                    Our manufacturing facilities are GMP certified and world class facilities are stick to WHO GMP norms.
                    Our company has a wide range of marketing network throughout the country even in the interior of the nation.
                    We at power pharma are committed to provide world class medicines at affordable price to every human being.
                </Typography>
                {/* <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Main call to action</Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack> */}
            </Container>
        </Box>
    )
}