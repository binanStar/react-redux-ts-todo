export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_END = 'LOGIN_END'


interface LoginStart {
  type: typeof LOGIN_START
}

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS
  userId: number
}

interface LoginEnd {
  type: typeof LOGIN_END
}

export type UserDispatchType = LoginSuccess | LoginStart | LoginEnd