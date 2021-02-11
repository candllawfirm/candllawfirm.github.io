import React from "react"
import LawyerImage from "../images/lawyer_hong2.jpg"

const Lawyer = () => (
  <div className="grid sm:grid-cols-2 ">
    <div className="p-8">
      <h1 className="text-3xl sm:text-4xl text-gray-900">
        <span className="text-green-700 mr-2">변호사</span>
        <span>홍순협</span>
      </h1>
      <h2 className="text-yellow-900">믿고 기댈 수 있는 든든한 법률파트너</h2>
      <h3>학력 및 경력</h3>
      <ul>
        <li>서울 중앙고 (69회)</li>
        <li>1982 서울대학교 졸업</li>
        <li>1982 제24회 사법시헙 합격</li>
        <li>1984 사법연수원 제14기 수료</li>
        <li>1988 육군법무관 전역</li>
        <li>1988 서울지방법원 판사 임용</li>
        <li>1989 변호사 개업</li>
        <li>대한상사중재원 국제중재전문가과정(10기) 수료</li>
        <li>
          고문변호사 경력: 국민은행, 브라더주식회사, 서울강동구청,
          한국요식업중앙회, 서울 소재 다수의 재개발건축조합
        </li>
        <li>저서: 홍순협의 생활법률(1995, 새길출판사)</li>
        <li>MBC라디오 홍순협의 생활법률 프로그램 진행</li>
        <li>현 볍률사무소 씨앤엘 대표</li>
        <li>미국변호사 (캘리포니아주) 자격취득</li>
      </ul>
    </div>
    <div>
      <img
        className="w-full h-96 md:h-screen object-cover"
        src={LawyerImage}
        alt="lawyer"
      />
    </div>
  </div>
)

export default Lawyer
