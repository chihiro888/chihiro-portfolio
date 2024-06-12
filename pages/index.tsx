import Header from "@/components/header"

const Home = ({}) => {
  return (
    <>
    <Header />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home