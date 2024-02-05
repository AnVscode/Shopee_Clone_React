import { Dispatch, SetStateAction, createContext, useState } from 'react'

import { User } from 'src/types/user.type'
import { getAccessTokenFromLocalStorage, getProfileLocalStorage } from 'src/utils/auth'

interface AppContextType {
  isAuthenticated: boolean
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>
  profile: User | null
  setProfile: Dispatch<SetStateAction<User | null>>
}

const initAppContext: AppContextType = {
  isAuthenticated: Boolean(getAccessTokenFromLocalStorage()),
  setIsAuthenticated: () => null,
  setProfile: () => null,
  profile: getProfileLocalStorage()
}

export const AppContext = createContext<AppContextType>(initAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<AppContextType['isAuthenticated']>(
    initAppContext.isAuthenticated
  )
  const [profile, setProfile] = useState<AppContextType['profile']>(initAppContext.profile)

  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated, profile, setProfile }}>
      {children}
    </AppContext.Provider>
  )
}
