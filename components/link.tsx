import { useSelector } from 'react-redux'
import LinkButton from './linkButton'

const Link = () => {
  // ** Redux
  const isLargeScreen = useSelector((state: any) => state.screen.isLargeScreen)

  return (
    <>
      <section>
        <div
          className={`grid gap-4 ${
            isLargeScreen ? 'grid-cols-2' : 'grid-cols-1'
          }`}
        >
          <LinkButton
            src="/images/icon/github-sign.png"
            label="Github"
            link="http://github.com/chihiro888"
          />

          <LinkButton
            src="/images/icon/boj.png"
            label="백준"
            link="https://www.acmicpc.net/user/chihiro888"
          />

          <LinkButton
            src="/images/icon/atcoder.png"
            label="Atcoder"
            link="https://atcoder.jp/users/chihiro888"
          />

          <LinkButton
            src="/images/icon/codeforces.png"
            label="Codeforces"
            link="https://codeforces.com/profile/chihiro888"
          />
        </div>
      </section>
    </>
  )
}

export default Link
