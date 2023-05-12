import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { IUser } from '../types/types'
import { Navigate, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export type UserItemPageParams = {
  id: string
}

const UserItemPage = () => {
    const [user, setUser] = useState<IUser | null>(null)

    useEffect(() => {
      fetchUser()
    }, [])
    
    const params = useParams<UserItemPageParams>()
    const navigate = useNavigate();
  
    async function fetchUser() {
      try {
        const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
        setUser(response.data)
      } catch (e) {
        alert(e)
      }
    }

  return (
    <div>
      <button onClick={() => navigate('/users')}>Back</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>
        {user?.email}
      </div>
      <div>
        {user?.address.city} {user?.address.street}
      </div>
    </div>
  )
}

export default UserItemPage
