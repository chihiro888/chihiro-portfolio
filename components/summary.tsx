import { useSelector } from 'react-redux'

const Summary = () => {
  // ** Redux
  const isLargeScreen = useSelector((state: any) => state.screen.isLargeScreen)

  return (
    <>
      <section>
        <div className="pt-10 pb-12">
          <div className={`${isLargeScreen ? 'text-2xl' : 'text-lg'}`}>
            "어떤 문제든지 해결할 수 있는 능력은 항상 우리 안에 있습니다."
          </div>
          <div
            className={`mt-5 text-slate-800 leading-7 ${
              isLargeScreen ? 'text-base' : 'text-sm'
            }`}
          >
            저는 문제해결을 좋아하는 풀스택 엔지니어입니다.
            <br />
            개발자의 관점이 아닌 사용자가 사용하기 편리한 UI/UX와 심플한
            디자인을 좋아합니다.
            <br />
            요구사항 정의에 적합한 데이터베이스 설계, 코드 리팩토링 및 처리 속도
            최적화에 자신이 있습니다.
            <br />
            INTJ로 전략적으로 일정을 세우고 계획적이며 주도적으로 일합니다.
          </div>
          <div
            className={`mt-5 text-slate-800 leading-7 ${
              isLargeScreen ? 'text-base' : 'text-sm'
            }`}
          >
            <ul className="list-disc ml-4">
              <li>
                HTML5, CSS, Javascript, Jquery, Typescript, React(Next),
                Vue(Nuxt) 프론트엔드 프로젝트 경험이 있습니다.
              </li>
              <li>
                Express, Nest, Spring, Spring boot, Django, Laravel 백엔드
                프로젝트 경험이 있습니다.
              </li>
              <li>
                기획, 데이터베이스 설계, 화면 설계(디자인), 개발, 테스트,
                운영까지의 전반적인 프로세스를 총괄하여 진행한 경험이 있습니다.
              </li>
              <li>
                AWS EC2, AWS S3, AWS Aurora, Cloudflare DNS, Cloudflare Image,
                Bunny Stream 등 인프라 경험이 있어 인프라 설계 및 구축이
                가능합니다.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Summary
