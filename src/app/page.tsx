import {
  Box,
  Card,
  Container,
  Typography,
} from '../../node_modules/@mui/material/index';

export default function Home() {
  return (
    <main>
      <Container>
        <Box>
          <Card>
            <Typography variant="h2">Hello World ~</Typography>
          </Card>
        </Box>
      </Container>
    </main>
  );
}
