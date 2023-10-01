import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants'
import mem from 'mem'
import { axiosPublic } from './axiosPublic'

const refreshTokenFn = async () => {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN)
  // TODO: CHECK IF REFRESH TOKEN HAS EXPIRED OR IS TO EXPIRE BEFORE REFRESHING
  try {
    const response = await axiosPublic.post('/jwt/refresh/', {
      refresh: refreshToken
    })

    const { access } = response.data
    if (!access) {
      localStorage.removeItem(REFRESH_TOKEN)
      localStorage.removeItem(ACCESS_TOKEN)
      localStorage.removeItem("auth")
      location.reload()
    }
    localStorage.setItem(ACCESS_TOKEN, access)
    return access as string

  } catch (error) {
    localStorage.removeItem(REFRESH_TOKEN)
    localStorage.removeItem(ACCESS_TOKEN)
    localStorage.removeItem("auth")
    location.reload()
  }
}

const maxAge = 10000

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});
