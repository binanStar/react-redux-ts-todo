export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'


interface LoginSuccess {
  type: typeof LOGIN_SUCCESS
  userId: number
}

interface LoginFailed {
  type: typeof LOGIN_FAILED
}

export type UserDispatchType = LoginSuccess | LoginFailed