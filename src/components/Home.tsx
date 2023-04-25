import { UserProps } from '../types/user'
import Search from '../components/Search'
import User from '../components/User'
import Error from '../components/Error'
import classes from './Home.module.css'

import { useState } from 'react'

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState(false)

  const loadUser = async(userName: string) => {
    setUser(null)
    setError(false);

    const response = await fetch(`https://api.github.com/users/${userName}`)
    const data = await response.json()

    if (response.status === 404) {
      setError(true)
      return;
    }

    const {avatar_url, login, location, followers, following} = data

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    }

    setUser(userData)
  }

  return (
    <div className={classes.home}>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  )
}

export default Home