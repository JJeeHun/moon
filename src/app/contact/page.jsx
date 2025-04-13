
const LabelBox = ({text, required, children}) => {
    return <div>
        <p className={`font-[900] text-2xl py-2`}>
            {text} {required && <span>*</span>}
        </p>
        {children}
    </div>
}

const ContactPage = () => {

    return <main className="text-white main-bg relative">

        <div className={`overlay`}></div>

        <section className={`container relative z-10 py-30`}>
            <div className={`font-bold text-5xl relative z-10`}>
                <h2 className={`flex items-end gap-[1]`}>
                    <span>CONTACT</span>
                    <div className={`bg-primary w-[8px] h-[8px] rounded-full mb-2`}></div>
                </h2>
            </div>

            <form className={`flex flex-col gap-5 pt-10`}>
                <LabelBox text={'회사명/성함/직급'} required={true}>
                    <input type="text" placeholder={'프로젝트문 김OO 대리'}/>
                </LabelBox>
                <LabelBox text={'연락처'} required={true}>
                    <input type="text" placeholder={'연락 받으실 연락처를 입력해 주세요.'}/>
                </LabelBox>
                <LabelBox text={'이메일'} required={true}>
                    <input type="text" placeholder={'연락 받으실 이메일을 입력해주세요.'}/>
                </LabelBox>
                <LabelBox text={'희망 견적'}>
                    <input type="text" placeholder={'희망하시는 견적이나 예산 범위를 작성해 주시면 해당 범위 내에서 제작 가능한 참고 영상을 안내해 드립니다.'}/>
                </LabelBox>
                <LabelBox text={'문의 내용'} required={true}>
                    <textarea placeholder={'제작하고자 하는 영상에 대해 설명해주세요. 참고 영상 링크가 있을 경우 더욱 수월한 상담이 가능합니다.'}/>
                </LabelBox>

                <button className={`bg-white rounded-3xl text-black px-10 py-3 w-[200px] mx-auto font-bold text-2xl mt-10
                cursor-pointer hover:bg-primary
                `}>문의하기</button>
            </form>
        </section>
    </main>
}

export default ContactPage;