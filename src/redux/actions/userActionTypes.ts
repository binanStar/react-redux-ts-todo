export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_START = 'LOGIN_START'


interface LoginStart {
  type: typeof LOGIN_START
}

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS
  userId: number
}

export type UserDispatchType = LoginSuccess | LoginStart