import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Allroutes from './routes/AllRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box className="App">
      <Navbar />
      <Allroutes />
      
    </Box>
  );
}

export default App;
