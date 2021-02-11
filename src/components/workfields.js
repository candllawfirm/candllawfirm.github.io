import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGavel,
  faArchway,
  faUsers,
  faBuilding,
  faBalanceScale,
  faHardHat,
  faStore,
} from "@fortawesome/free-solid-svg-icons"

const Field = props => (
  <div className="flex">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-900 text-white">
        <FontAwesomeIcon icon={props.icon || faGavel} />
      </div>
    </div>
    <div className="ml-4">
      <dt className="text-lg leading-6 font-medium text-gray-900">
        {props.title}
      </dt>
      <dd className="mt-2 text-base text-gray-500">{props.contents}</dd>
    </div>
  </div>
)

const WorkFields = () => (
  <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h1 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
          업무분야
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          법률사무소 씨앤엘 (LAW FIRM C&L)
        </p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <Field
            title="민사"
            contents="매매, 임대차, 부동산등기, 대여금, 손해배상, 가압류·가처분"
          />
          <Field
            title="형사"
            contents="고소, 피고소, 정식재판청구, 무죄변론, 조사입회"
            icon={faBalanceScale}
          />
          <Field
            title="가사"
            contents="이혼, 재산분할, 상간자소송, 입양, 친자, 상속, 가족관계"
            icon={faUsers}
          />
          <Field
            title="회사"
            contents="주주대표소송, 주총 또는 이사회결의 관련소송, 영업양도, M&A, 회사법자문"
            icon={faBuilding}
          />
          <Field
            title="행정"
            contents="위법한 행정처분취소소송, 위법부당한 행정처분에 대한 정심판청구, 국가상대손해배상, 토지보상금증액청구, 징계취소 및 효력정지가처분"
            icon={faArchway}
          />
          <Field
            title="건축관계소송"
            contents="공사대금, 하도급대금직접청구, 유치권, 임금, 재건축·재개발"
            icon={faHardHat}
          />
          <Field
            title="프랜차이즈"
            contents="프랜차이즈가맹점의 권리의무, 프랜차이즈 영업양도"
            icon={faStore}
          />
        </dl>
      </div>
    </div>
  </div>
)

export default WorkFields
