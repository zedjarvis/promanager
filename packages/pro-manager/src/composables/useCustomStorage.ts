import { REMBER_ME } from '@/constants'
import { StorageLike, useLocalStorage, useStorage } from '@vueuse/core'


const rememberMe = useLocalStorage(REMBER_ME, false)

const customStorage: StorageLike = rememberMe.value ? localStorage : sessionStorage

const useCustomStorage = (storage_key: string, initial_value: any) => {
  return useStorage(storage_key, initial_value, customStorage)
}

export { customStorage, useCustomStorage }
