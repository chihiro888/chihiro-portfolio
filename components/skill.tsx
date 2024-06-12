import { useSelector } from 'react-redux'
import RoundBadge from './roundBadge'

const Skill = () => {
  // ** Redux
  const isLargeScreen = useSelector((state: any) => state.screen.isLargeScreen)

  return (
    <section>
      <div className="mb-10">
        <div className="grid grid-cols-3">
          <div className="flex items-start">
            <div className="text-lg font-semibold">Skill</div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-wrap mt-2 items-start">
              <RoundBadge label="Nest.js" filled />
              <RoundBadge label="React.js" filled />
              <RoundBadge label="Next.js" filled />
              <RoundBadge label="MySQL" filled />
              <RoundBadge label="Ubuntu" filled />
              <RoundBadge label="Nginx" filled />
              <RoundBadge label="AWS" filled />
              <RoundBadge label="Cloudflare" filled />
              <RoundBadge label="Node.js" />
              <RoundBadge label="Express.js" />
              <RoundBadge label="Python" />
              <RoundBadge label="Django" />
              <RoundBadge label="Java" />
              <RoundBadge label="Spring" />
              <RoundBadge label="PHP" />
              <RoundBadge label="Laravel" />
              <RoundBadge label="C# Winform" />
              <RoundBadge label="Spring Boot" />
              <RoundBadge label="MongoDB" />
              <RoundBadge label="ElasticSearch" />
              <RoundBadge label="Redis" />
              <RoundBadge label="Memcached" />
              <RoundBadge label="PostgreSQL" />
              <RoundBadge label="Oracle" />
              <RoundBadge label="Jenkins" />
              <RoundBadge label="Docker" />
              <RoundBadge label="Vagrant" />
              <RoundBadge label="Slack" />
              <RoundBadge label="Notion" />
              <RoundBadge label="JIRA" />
              <RoundBadge label="Redmind" />
            </div>
            <div className="text-sm text-blue-300 text-right">
              실무에서 사용한 기술만 기술하였습니다.
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-slate-200"></div>

      <div className="mt-5 mb-10">
        <div className="grid grid-cols-3">
          <div className="flex items-start">
            <div className="text-lg font-semibold">Domain</div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-wrap mt-2 items-start">
              <RoundBadge label="교육" />
              <RoundBadge label="금융" />
              <RoundBadge label="회계" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
