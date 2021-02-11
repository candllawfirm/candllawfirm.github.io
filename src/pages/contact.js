import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import OfficeImage from "../images/office_bg.jpg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="width-screen sm:h-96 overflow-hidden">
      <figure className="m-0">
        <img src={OfficeImage} alt="office" className="m-0" />
        <figcaption className="absolute top-32 sm:top-44 left-1/2 text-lg text-white transform -translate-x-1/2">
          <h1>오시는길</h1>
        </figcaption>
      </figure>
    </section>
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-20 lg:px-40">
        <div
          style={{
            font: "normal normal 400 12px/normal dotum, sans-serif",
            maxWidth: "640px",
            height: "auto",
            color: "#333",
            position: "relative",
            margin: "0 auto",
          }}
        >
          <div>
            <a
              href="https://map.kakao.com/?urlX=534580.0&amp;urlY=912436.0&amp;itemId=920276497&amp;q=%EB%B2%95%EB%A5%A0%EC%82%AC%EB%AC%B4%EC%86%8C%20%EC%94%A8%EC%95%A4%EC%97%98&amp;srcid=920276497&amp;map_type=TYPE_MAP&amp;from=roughmap"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="//t1.daumcdn.net/roughmap/imgmap/0fd894320ba147361609d1bdfc2fee495298165ad756a11913a41b5cc25739c6"
                style={{ border: "1px solid #ccc", margin: "0", width: "100%" }}
                alt="kakao-map"
              />
            </a>
          </div>
          <div
            style={{
              overflow: "hidden",
              padding: "7px 11px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "0px 0px 2px 2px",
              backgroundColor: "rgb(249, 249, 249)",
            }}
          >
            <a
              href="https://map.kakao.com"
              target="_blank"
              style={{ float: "left" }}
              rel="noreferrer"
            >
              <img
                src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                width="72"
                height="16"
                alt="카카오맵"
                style={{
                  display: "block",
                  width: "72px",
                  height: "16px",
                  margin: 0,
                }}
              />
            </a>
            <div
              style={{
                float: "right",
                position: "relative",
                top: "1px",
                fontSize: "11px",
              }}
            >
              <a
                target="_blank"
                href="https://map.kakao.com/?from=roughmap&amp;srcid=920276497&amp;confirmid=920276497&amp;q=%EB%B2%95%EB%A5%A0%EC%82%AC%EB%AC%B4%EC%86%8C%20%EC%94%A8%EC%95%A4%EC%97%98&amp;rv=on"
                style={{
                  float: "left",
                  height: "15px",
                  paddingTop: "1px",
                  lineHeight: "15px",
                  color: "#000",
                  textDecoration: "none",
                }}
                rel="noreferrer"
              >
                로드뷰
              </a>
              <span
                style={{
                  width: "1px",
                  padding: "0",
                  margin: "0 8px 0 9px",
                  height: "11px",
                  verticalAlign: "top",
                  position: "relative",
                  top: "2px",
                  borderLeft: "1px solid #d0d0d0",
                  float: "left",
                }}
              ></span>
              <a
                target="_blank"
                href="https://map.kakao.com/?from=roughmap&amp;eName=%EB%B2%95%EB%A5%A0%EC%82%AC%EB%AC%B4%EC%86%8C%20%EC%94%A8%EC%95%A4%EC%97%98&amp;eX=534580.0&amp;eY=912436.0"
                style={{
                  float: "left",
                  height: "15px",
                  paddingTop: "1px",
                  lineHeight: "15px",
                  color: "#000",
                  textDecoration: "none",
                }}
                rel="noreferrer"
              >
                길찾기
              </a>
              <span
                style={{
                  width: "1px",
                  padding: "0",
                  margin: "0 8px 0 9px",
                  height: "11px",
                  verticalAlign: "top",
                  position: "relative",
                  top: "2px",
                  borderLeft: "1px solid #d0d0d0",
                  float: "left",
                }}
              ></span>
              <a
                target="_blank"
                href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=920276497&amp;itemId=920276497&amp;q=%EB%B2%95%EB%A5%A0%EC%82%AC%EB%AC%B4%EC%86%8C%20%EC%94%A8%EC%95%A4%EC%97%98&amp;urlX=534580.0&amp;urlY=912436.0"
                style={{
                  float: "left",
                  height: "15px",
                  paddingTop: "1px",
                  lineHeight: "15px",
                  color: "#000",
                  textDecoration: "none",
                }}
                rel="noreferrer"
              >
                지도 크게 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
