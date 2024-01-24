import { Typography } from '@material-tailwind/react';
import LoginImage from '../../assets/images/login-image.jpg';
import { motion } from 'framer-motion';
import LoginCard from '../auth/LoginCard';
import SignupCard from '../auth/SignupCard';

function Authentication({ login }) {
  return (
    <div className="flex h-screen">
      {/* Phần bên trái */}
      <motion.div
        className="flex-1 flex items-center justify-center bg-gray-100"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {login ? <LoginCard /> : <SignupCard />}
      </motion.div>

      {/* Phần bên phải */}
      <motion.div
        className="flex-1 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover"
          style={{ backgroundImage: `url(${LoginImage})` }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <motion.div
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.1 },
              tap: { scale: 0.9 },
            }}
            whileHover="hover"
            whileTap="tap"
          >
            <Typography variant="h1">Todo App</Typography>
          </motion.div>
          <Typography variant="small" className="mt-4">
            Organize your tasks efficiently and stay productive with our Todo
            App. Manage your to-do list, set priorities, and track your
            progress.
          </Typography>
        </div>
      </motion.div>
    </div>
  );
}

export default Authentication;
