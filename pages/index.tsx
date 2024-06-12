import Header from '@/components/header'
import Profile from '@/components/profile'
import { setIsLargeScreen } from '@/store/screen'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = ({}) => {
  // ** Hooks
  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsLargeScreen(window.innerWidth >= 768))
    }

    // 초기화 및 창 크기 변경 이벤트 리스너 추가
    handleResize()
    window.addEventListener('resize', handleResize)

    // 컴포넌트가 unmount될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <Header />
      <Profile />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default Home
