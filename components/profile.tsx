import { useSelector } from 'react-redux'

const Profile = () => {
  // ** Redux
  const isLargeScreen = useSelector((state: any) => state.screen.isLargeScreen)

  return (
    <>
      <section>
        {isLargeScreen ? (
          <>
            <div className="w-full h-80 bg-slate-50"></div>
            <div className="w-full h-80 bg-white relative flex justify-center">
              <div className="absolute top-0 mt-[-72px]">
                <img
                  className="w-36 h-36 rounded-full object-cover"
                  src="/images/profile.jpeg"
                  alt="profile"
                />
              </div>
              <div className="mt-24">
                <div className="text-4xl text-center font-semibold">
                  Jinyong Ahn
                </div>
                <div className="text-xl text-center font-light mt-3">
                  Fullstack Engineer
                </div>

                <div className="flex justify-center">
                  <div className="my-6 w-16 h-px bg-gray-300"></div>
                </div>

                <div className="text-base text-center">b930208@gmail.com</div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200"></div>
          </>
        ) : (
          <>
            <div className="w-full h-100 bg-slate-50 pt-20 pb-12">
              <div className="flex justify-center">
                <img
                  className="w-24 h-24 rounded-full object-cover"
                  src="/images/profile.jpeg"
                  alt="profile"
                />
              </div>
              <div className="mt-3">
                <div className="text-2xl text-center font-semibold">
                  Jinyong Ahn
                </div>
                <div className="text-lg text-center font-light mt-3">
                  Fullstack Engineer
                </div>

                <div className="flex justify-center">
                  <div className="my-6 w-16 h-px bg-gray-300"></div>
                </div>

                <div className="text-sm text-center">b930208@gmail.com</div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  )
}

export default Profile
