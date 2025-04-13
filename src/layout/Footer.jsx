import MainLogo from "@/components/MainLogo";
import Link from "next/link";


const Footer = () => {
    return <footer className="text-white text-xs container
    flex flex-col gap-2 py-16 font-semibold
    ">
        <Link href="#Header" className={`w-[100px] ml-[-15px]`}>
            <MainLogo />
        </Link>

        <section>
            <p>고객센터</p>
            <p>평일 10:00 ~ 19:00 (주말, 공휴일 제외)</p>
            <p>dnsdltk@projectcomma.co.kr</p>
        </section>

        <section className={`text-[#979797]`}>
            <p>
                <span>프로젝트문</span>
                <span> | </span>
                <span>대표자 손단비</span>
                <span> | </span>
                <span>사업자등록번호: 589-25-00767</span>
            </p>
            <p>
                <span>Copyrights ⓒ 2024 PROJECTMOON. ALL RIGHTS RESERVED.</span>
            </p>
        </section>
    </footer>
}


export default Footer;