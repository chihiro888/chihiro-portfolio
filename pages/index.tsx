import Divider from '@/components/divider'
import Header from '@/components/header'
import Profile from '@/components/profile'
import Summary from '@/components/summary'
import Title from '@/components/title'
import { setIsLargeScreen } from '@/store/screen'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import TimeData from '@/components/timeData'
import Education from '@/components/education'
import Certificate from '@/components/certificate'
import Skill from '@/components/skill'
import Link from '@/components/link'

const Home = ({}) => {
  // ** Hooks
  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsLargeScreen(window.innerWidth >= 768))
    }

    handleResize()

    // add listener
    window.addEventListener('resize', handleResize)

    return () => {
      // remove listener
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <Header />
      <Profile />
      <div className="container mx-auto px-6">
        <Summary />
        <Divider />

        <Title>경력</Title>
        <Divider />

        <Title>기술</Title>
        <Skill />
        <Divider />

        <Title>학력</Title>
        <Education />
        <Divider />

        <Title>자격증</Title>
        <Certificate />
        <Divider />

        <Title>링크</Title>
        <Link />
      </div>

      <div className="mb-12"></div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default Home
