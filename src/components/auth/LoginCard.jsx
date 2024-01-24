import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from '@material-tailwind/react';
import { useState } from 'react';
import '../styles/animation.css';
import { NavLink } from 'react-router-dom';

function LoginCard() {
  const [isSwinging, setIsSwinging] = useState(false);

  return (
    <Card className="w-2/3">
      <CardBody className="flex flex-col gap-4 pb-3">
        <div className="flex flex-col gap-1">
          <Typography
            variant="h3"
            color="indigo"
            className={isSwinging ? 'swing' : ''}
            onMouseEnter={() => setIsSwinging(true)}
            onAnimationEnd={() => setIsSwinging(false)}
          >
            Login
          </Typography>
          <Typography variant="small">
            Enter your email and password to log in
          </Typography>
        </div>
        <Input label="Email" size="lg" />
        <Input label="Password" size="lg" />
        <div className="flex justify-between">
          <Checkbox
            label={<Typography variant="small">Remember Me</Typography>}
            color="indigo"
            className="-mx-2"
          />
          <Typography
            as="a"
            variant="small"
            color="indigo"
            className="font-bold my-auto"
          >
            Forgot Password?
          </Typography>
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
              <span className="px-2 bg-white text-sm text-gray-500">Or</span>
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
          <NavLink to={'/signup'}>
            <Typography
              as="a"
              variant="small"
              color="indigo"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </NavLink>
        </Typography>
      </CardFooter>
    </Card>
  );
}

export default LoginCard;
