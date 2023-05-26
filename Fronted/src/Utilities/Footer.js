import { Grid, IconButton, Link, Typography } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Grid
      container
      style={{
        marginTop: '120px',
        width: '100%',
        bottom: 0,
        left: 0,
      }}
      sx={{ bgcolor: '#FDEEF1', padding: '16px' }}
    >
      <Grid item xs={12} sm={6}>
        <Typography
          variant="body2"
          color="text.secondary"
          marginTop={1}
          fontWeight="medium"
          // fontFamily="fantasy"
        >
          Made with love, code and lots of coffee.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
        <Link href="#" color="inherit">
          <IconButton>
            <LinkedIn />
          </IconButton>
        </Link>
        <Link href="#" color="inherit">
          <IconButton>
            <GitHub />
          </IconButton>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
