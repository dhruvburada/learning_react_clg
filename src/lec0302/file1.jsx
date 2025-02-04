import React from 'react'
export const UserContext = React.createContext()
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Dhruv Burada', id: 1 })
    }, 1000)
  })
}

export function UserProvider({ children }) {
  const [user, setuser] = React.useState({
    name: 'loading...',
    id: "loading...",
  })  
  React.useEffect(() => {
    fetchUser().then((user) => {
      setuser(user)
    })
  }, [])
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}