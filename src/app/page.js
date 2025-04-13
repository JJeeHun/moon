import Image from "next/image";
import Link from "next/link";


const FirstComponent = () => {
  return <section className={`w-full h-screen`} >
    <iframe width={'100%'} height={'100%'} src="https://www.youtube.com/embed/w9bns-A1AxE?si=9MGIJUr6-GjsQg6Q"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </section>
}

const VideoListComponent = ({items}) => {
  return <section className={`w-full text-white relative main-bg`}
  >
    {/* 오버 레이 */}
    <div className={`overlay`}></div>

    {/* 타이틀 */}
    <div className={`relative z-10 container`}>
      <h2 className={`text-5xl py-10 pt-16 px-[17px] font-semibold`}>
        <p className={``}>프로젝트 콤마에서 완성된</p>
        <p className={`text-lime-300`}>브랜드들의 영상을 만나보세요<span>
          <Image width={24} height={24}
                 className={`inline ml-2`}
                 src={'https://static.wixstatic.com/media/fc4f7e_1cf14782275b4d29ae01d16b1e5e1324~mv2.png/v1/fill/w_60,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fc4f7e_1cf14782275b4d29ae01d16b1e5e1324~mv2.png'}
                 alt={'video'}
          />
        </span>
        </p>
      </h2>

      {/* 포트폴리오 리스트 */}
      <div className={`grid grid-cols-3 gap-3`}>
        {items.map((item ,index) => (
            <article key={index} className={`transition-all duration-300 hover:translate-y-[-10px]`}>
              <img src={item.src} alt="video"/>
            </article>
        ))}
      </div>

      {/* 포트폴리오 더보기 */}
      <div className={`flex justify-center items-center
      h-24 text-black text-xs
      `}>
        <button className={`bg-lime-300 px-6 py-2 rounded-3xl font-semibold`}>
          <Link href={ '/portfolio' }>
            포트폴리오 <span>더 보기</span>
          </Link>
        </button>
      </div>

      {/*업체 이미지*/}
      <div className={`flex justify-center items-center`}>
        <Image width={650} height={650}
               alt={'video'}
               src={`https://static.wixstatic.com/media/79b378_5ac1d1a6c6394e8688fe4f1b8bb81664~mv2.png/v1/fill/w_1294,h_1294,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/%ED%98%91%EB%A0%A5%EC%82%AC.png`}
        />
      </div>
    </div>

  </section>
}


export default function Home() {

  const items = [
    {src: 'https://static.wixstatic.com/media/79b378_b73adcd757904af192a50a7b1c734d99~mv2.png/v1/fill/w_530,h_372,fp_0.51_0.29,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%9C%A0%ED%8A%9C%EB%B8%8C%EC%BD%98%ED%85%90%EC%B8%A0.png'},
    {src: 'https://static.wixstatic.com/media/fc4f7e_7a27f0c3bb7b4520b5d38b58d98e9b10~mv2.png/v1/fill/w_530,h_372,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EB%AA%A8%EC%85%98%EA%B7%B8%EB%9E%98%ED%94%BD3.png'},
    {src: 'https://static.wixstatic.com/media/fc4f7e_9dcc2c8814644ef6831d785e0aef2479~mv2.png/v1/fill/w_530,h_372,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EA%B8%B0%EC%97%85%ED%99%8D%EB%B3%B42.png'},
    {src: 'https://static.wixstatic.com/media/79b378_beb9e8dfac084b7ea121fc120db1790c~mv2.png/v1/fill/w_530,h_372,fp_0.81_0.30,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EB%94%94%EC%A7%80%ED%84%B8%ED%95%84%EB%A6%84.png'},
    {src: 'https://static.wixstatic.com/media/fc4f7e_72a54278a1f3438eb5240c2fef4d8232~mv2.png/v1/fill/w_530,h_372,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%A0%9C%ED%92%88%EA%B4%91%EA%B3%A02.png'},
    {src: 'https://static.wixstatic.com/media/fc4f7e_9f6542f07558456184ea4584e240798f~mv2.png/v1/fill/w_530,h_372,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%A0%95%EB%B3%B4%EC%A0%84%EB%8B%AC2.png'},
  ]
  return (
      <div>
        <FirstComponent />
        <VideoListComponent items={items} />
      </div>
  );
}
