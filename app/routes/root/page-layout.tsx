import { useNavigate } from 'react-router'
import { logoutUser } from '~/appwrite/auth'

const PageLayout = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logoutUser()
    navigate('/sign-in')
  }

  return (
    <div>
      <button onClick={handleLogout} className='cursor-pointer'>
        <img
          src='/assets/icons/logout.svg'
          alt='Logout icon'
          className='size-6'
        />
      </button>

      <button
        onClick={() => {
          navigate('/dashboard')
        }}
      >
        Navigate to Dashboard
      </button>
    </div>
  )
}

export default PageLayout
