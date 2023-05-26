import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import pic1 from '../assets/img/pic1.jpg';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, product: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, product: action.payload };
    default:
      return ' ';
  }
};

const initialtState = {
  product: [{ image: 'datasdsjod' }],
  loading: true,
  error: '',
};

function About() {
  const [{ loading, error, product }, dispatch] = useReducer(
    reducer,
    initialtState
  );
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('http://localhost:2000/fetchImg2');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: error.message });
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Box marginLeft="40px" marginTop={4} className="B4">
        <Grid container justifyContent="center" columnSpacing={5}>
          <Grid item lg={6} md={6} xs={12}>
            <h1>A lil more about me</h1>
            <p>
              Hi there! I'm a developer with a passion for both outdoor and
              indoor activities. When I'm not coding, you'll often find me
              hiking in the mountains or camping under the stars. I love the
              feeling of being surrounded by nature and the physical challenge
              that comes with outdoor activities like hiking and bicycling.
              During the colder months, I enjoy ice skating and skiing to stay
              active and embrace the winter season. When I'm indoors, I like to
              unwind by reading books on a variety of topics and doing yoga to
              stay centered and focused. I also have a strong interest in the
              latest technologies and enjoy dedicating time to self-study and
              staying up-to-date with the latest trends in the tech industry.
              Through a balance of outdoor adventures and indoor pursuits, I'm
              able to stay motivated and inspired in all areas of my life.
            </p>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <img src={product[0].image} alt="pic" width="40%" height="400px" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default About;
