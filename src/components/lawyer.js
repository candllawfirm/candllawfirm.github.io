import React from "react"
import LawyerImage from "../images/lawyer.jpg"

const Lawyer = () => (
  <div className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-2xl sm:text-4xl text-gray-900">
              <span className="text-green-700 mr-4">변호사</span>
              <span>홍순협</span>
            </h1>
            <h2 className="text-yellow-900">
              믿고 기댈 수 있는 든든한 법률파트너
            </h2>
            <h3>학력 및 경력</h3>
            <ul>
              <li>1982 서울대학교 졸업</li>
              <li>1982 제24회 사법시헙 합격</li>
              <li>1984 사법연수원 제14기 수료</li>
              <li>1988 육군법무관 전역</li>
              <li>1988 서울지방법원 판사 임용</li>
              <li>1989 변호사 개업</li>
              {/* <li>2020 미국 캘리포니아 주 바시험 합격</li> */}
              <li>
                고문변호사 경력: 국민은행, 브라더주식회사, 서울강동구청,
                한국요식업중앙회, 서울 소재 다수의 재개발건축조합
              </li>
              <li>MBC라디오 홍순협의 생활법률 프로그램 진행</li>
              <li>현 볍률사무소 씨앤엘 대표</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={LawyerImage}
        alt="lawyer"
      />
    </div>
  </div>
)

export default Lawyer
