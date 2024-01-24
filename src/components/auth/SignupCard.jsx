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

function SignupCard() {
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
            Signup
          </Typography>
          <Typography variant="small">
            Fill all fields below to create a new account
          </Typography>
        </div>
        <Input label="Name" size="lg" />
        <Input label="Email" size="lg" />
        <Input label="Password" size="lg" />
        <Input label="Confirm Password" size="lg" />
        <Checkbox
          color="indigo"
          label={
            <Typography color="blue-gray" className="flex font-medium">
              I agree with the
              <Typography
                as="a"
                href="#"
                color="indigo"
                className="font-medium transition-colors"
              >
                &nbsp;terms and conditions
              </Typography>
              .
            </Typography>
          }
          className="-mx-2"
        />
      </CardBody>
      <CardFooter className="pt-0">
        <div className="flex flex-col gap-2">
          <Button variant="gradient" color="indigo" fullWidth>
            Sign up
          </Button>
        </div>
        <Typography variant="small" className="mt-6 flex justify-center">
          Already have an account ?
          <NavLink to={'/login'}>
            <Typography
              as="a"
              variant="small"
              color="indigo"
              className="ml-1 font-bold"
            >
              Login
            </Typography>
          </NavLink>
        </Typography>
      </CardFooter>
    </Card>
  );
}

export default SignupCard;
