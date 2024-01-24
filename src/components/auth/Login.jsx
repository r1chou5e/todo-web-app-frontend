import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from '@material-tailwind/react';
import LoginImage from '../../assets/images/login-image.jpg';
import { motion } from 'framer-motion';

function Login() {
  return (
    <div className="flex h-screen">
      {/* Phần bên trái */}
      <motion.div
        className="flex-1 flex items-center justify-center bg-gray-100"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-2/3">
          <CardBody className="flex flex-col gap-4 pb-3">
            <div className="flex flex-col gap-1">
              <Typography variant="h3" color="indigo">
                Login
              </Typography>
              <Typography variant="small">
                Enter your email and password to log in
              </Typography>
            </div>
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox
                label={
                  <Typography variant="small" color="indigo">
                    Remember Me
                  </Typography>
                }
                color="indigo"
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <div className="flex flex-col gap-2">
              <Button variant="gradient" color="indigo" fullWidth>
                Login
              </Button>
              <div className="relative my-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-white text-sm text-gray-500">
                    Or
                  </span>
                </div>
              </div>
              <Button
                variant="gradient"
                className="flex items-center justify-center gap-3 w-full"
              >
                <img
                  src="https://docs.material-tailwind.com/icons/google.svg"
                  alt="metamask"
                  className="h-4 w-4"
                />
                Login with Google
              </Button>
            </div>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="indigo"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
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

export default Login;
