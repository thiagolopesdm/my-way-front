import { v4 as uuid } from 'uuid';

type SignInRequestData = {
  email: string;
  password: string;
};

const delay = (amount = 750) =>
  new Promise(resolve => setTimeout(resolve, amount));

export async function singInRequest(data: SignInRequestData) {
  await delay();
  return {
    token: uuid(),
    user: {
      firstName: 'Thiago',
      surname: 'Lopes',
      email: 'tlopesdm@gmail.com',
    },
  };
}

export async function recoverUserInformation() {
  await delay();
  return {
    user: {
      firstName: 'Thiago',
      surname: 'Lopes',
      email: 'tlopesdm@gmail.com',
    },
  };
}
