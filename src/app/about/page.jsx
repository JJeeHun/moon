
const InfoItem = ({title, text1, text2, src}) => {
    return <section className={`p-6 bg-gray-800 rounded-2xl w-full`}>
        <img className={`w-full`} src={src} alt="calendar"/>
        <div className={`flex flex-col gap-2 font-bold text-sm`}>
            <h4 className={`text-lg font-[900]`}>{title}</h4>
            <div>
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
        </div>
    </section>
}

const AboutPage = () => {
    return <main className={`main-bg w-full relative text-white`}>
        {/* overlay */}
        <div className="overlay"></div>

        <section className="relative z-10 flex flex-col gap-10 pb-56">
            {/* title */}
            <article className={`container h-screen text-center
            flex flex-col justify-center items-center gap-8 
            `}>
                <h2 className={`font-bold text-5xl flex flex-col gap-3`}>
                    <p>PROJECT MOON</p>
                    <p className={`text-primary`}>브랜드의 스토리를 이어가다.</p>
                </h2>

                <p className={`text-lg font-bold`}>브랜드가 써왔던 스토리를, 프로젝트 콤마가 최고의 파트너들과 함께 퍼포먼스 브랜딩을 이어갑니다.</p>

                <div className={`text-sub-text text-sm`}>
                    <p>프로젝트 문은 2015부터 트랜드에 발 맞는 브랜드 캠페인 및 영상 필름을 전문적으로 제작하던 전문인력이 모인 그룹입니다.</p>
                    <p>대형 비즈니스부터 작은 브랜드들의 스몰 비즈니스까지를 아우르며, 유튜브 채널 운영 및 제작(웹 예능, 테이블 토크 등)을 전문적으로 운영합니다.</p>
                    <p>이 외에도 브랜딩 캠페인, 라이브커머스, 바이럴마케팅 등 다양한 마케팅 영역에 대한 전문성을 가진 종합 마케팅 관고 대행사입니다.</p>
                </div>
            </article>

            {/* Group Items */}
            <article className={`h-screen`}>

                <section className={`py-20`}>
                    <div className={`container text-sub-text text-lg`}>
                        <h3 className={'text-primary font-bold text-4xl mb-5'}>
                            <p>BRAND STRATEGY &</p>
                            <p>CAMPAIGN</p>
                        </h3>
                        <p>브랜드 전략과 아이덴티티 수립, 브랜드 캠페인까지 브랜드 전반의 스토리를 구축하는 퍼포먼스 브랜딩 기업.</p>
                        <p>오프라인 add value(팝업 및 전시)</p>
                    </div>
                </section>

                <section className={`border-t-1 border-b-1 border-primary py-20`}>
                    <div className={`container text-sub-text text-lg`}>
                        <h3 className={'text-primary font-bold text-4xl mb-5'}>
                            <p>CONTENT &</p>
                            <p>FILM</p>
                        </h3>
                        <p>트렌디한 크리에이티브로 브랜드의 머리 속에 각인되는 유튜브 및 홍보 콘텐츠 제작 스튜디오.</p>
                    </div>
                </section>

                <section className={`py-20`}>
                    <div className={`container text-sub-text text-lg`}>
                        <h3 className={'text-primary font-bold text-4xl mb-5'}>
                            <p>DESIGN &</p>
                            <p>PRODUCTION</p>
                        </h3>
                        <p>감각적인 디자인과 2D & 3D 모션 기반의 그래픽 전문 디자인 스튜디오.</p>
                    </div>
                </section>

            </article>

            {/*  Sub 영역  */}
            <article className={`flex justify-between container gap-12`}>

                <InfoItem src={'/calendar.png'}
                    title={'사전 상담'}
                    text1={'사전 미팅부터 납품일자, 견적 산정까지'}
                    text2={'담당 디렉터가 도와드려요.'} />

                <InfoItem src={'/camera.png'}
                    title={'전문 인력'}
                    text1={'연출자, 작가, 모션디자이너 등'}
                    text2={'탁월한 실력을 겸비한 인재 상주'} />

                <InfoItem src={'/forder.png'}
                    title={'안심 계약'}
                    text1={'법무법인의 검토를 마친 계약서를 통해'}
                    text2={'계약 과정을 안전하고 전문적으로 진행해요.'} />

            </article>

        </section>
    </main>
}

export default AboutPage;