import {apiCliemt} from './client'


export const createUser = apiClient.post('/register')
export const signIn = apiCliemt.post('/login')
export const signOut = apiCliemt.post('logout')