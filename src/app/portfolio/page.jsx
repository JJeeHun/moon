
const Item = ({title, src, subtext}) => {
    return <article className="">
        <div className={`w-full rounded-xl overflow-hidden`}>
            <img className={`w-full`} src={src} alt=""/>
        </div>
        <h3 className={`font-bold text-xl mt-4`}>{title}</h3>
        <p>{subtext}</p>
    </article>
}


const PortfolioPage = () => {
    const items = [
        {title:'3D 애니메이션 & M/V', subtext:'HIVE ENT - YET TO COME', src:"https://static.wixstatic.com/media/79b378_a50e3f4b9db14b67a79dec37558d1428~mv2.jpeg/v1/fill/w_145,h_81,q_90,enc_avif,quality_auto/79b378_a50e3f4b9db14b67a79dec37558d1428~mv2.jpeg 1x, https://static.wixstatic.com/media/79b378_a50e3f4b9db14b67a79dec37558d1428~mv2.jpeg/v1/fill/w_290,h_162,q_90,enc_avif,quality_auto/79b378_a50e3f4b9db14b67a79dec37558d1428~mv2.jpeg 2x, https://static.wixstatic.com/media/79b378_a50e3f4b9db14b67a79dec37558d1428~mv2.jpeg/v1/fill/w_435,h_243,q_90,enc_avif,quality_auto/79b378_a50e3f4b9db14b67a79dec37558d1428~mv2.jpeg 3x, https://static.wixstatic.com/media/79b378_a50e3f4b9db14b67a79dec37558d1428~mv2.jpeg/v1/fill/w_580,h_324,q_90,enc_avif,quality_auto/79b378_a50e3f4b9db14b67a79dec37558d1428~mv2.jpeg 4x, https://static.wixstatic.com/media/79b378_a50e3f4b9db14b67a79dec37558d1428~mv2.jpeg/v1/fill/w_725,h_405,q_90,enc_avif,quality_auto/79b378_a50e3f4b9db14b67a79dec37558d1428~mv2.jpeg 5x",},
        {title:'웹 예능', subtext:'헥토그룹 - 전국건강자랑', src:"https://static.wixstatic.com/media/79b378_eaf192e105504dff8643e740302f0d6d~mv2.jpeg/v1/fill/w_145,h_81,fp_0.54_0.32,q_90,enc_avif,quality_auto/79b378_eaf192e105504dff8643e740302f0d6d~mv2.jpeg 1x, https://static.wixstatic.com/media/79b378_eaf192e105504dff8643e740302f0d6d~mv2.jpeg/v1/fill/w_290,h_162,fp_0.54_0.32,q_90,enc_avif,quality_auto/79b378_eaf192e105504dff8643e740302f0d6d~mv2.jpeg 2x, https://static.wixstatic.com/media/79b378_eaf192e105504dff8643e740302f0d6d~mv2.jpeg/v1/fill/w_435,h_243,fp_0.54_0.32,q_90,enc_avif,quality_auto/79b378_eaf192e105504dff8643e740302f0d6d~mv2.jpeg 3x, https://static.wixstatic.com/media/79b378_eaf192e105504dff8643e740302f0d6d~mv2.jpeg/v1/fill/w_580,h_324,fp_0.54_0.32,q_90,enc_avif,quality_auto/79b378_eaf192e105504dff8643e740302f0d6d~mv2.jpeg 4x, https://static.wixstatic.com/media/79b378_eaf192e105504dff8643e740302f0d6d~mv2.jpeg/v1/fill/w_725,h_405,fp_0.54_0.32,q_90,enc_avif,quality_auto/79b378_eaf192e105504dff8643e740302f0d6d~mv2.jpeg 5x",},
        {title:'테이블토크', subtext:'롯데주류 - 괜찮아 다그래', src:"https://static.wixstatic.com/media/fc4f7e_f4c5cb0304564a5292a087cfccc76cee~mv2.png/v1/fill/w_144,h_81,q_90,enc_avif,quality_auto/fc4f7e_f4c5cb0304564a5292a087cfccc76cee~mv2.png 1x, https://static.wixstatic.com/media/fc4f7e_f4c5cb0304564a5292a087cfccc76cee~mv2.png/v1/fill/w_288,h_162,q_90,enc_avif,quality_auto/fc4f7e_f4c5cb0304564a5292a087cfccc76cee~mv2.png 2x, https://static.wixstatic.com/media/fc4f7e_f4c5cb0304564a5292a087cfccc76cee~mv2.png/v1/fill/w_432,h_243,q_90,enc_avif,quality_auto/fc4f7e_f4c5cb0304564a5292a087cfccc76cee~mv2.png 3x, https://static.wixstatic.com/media/fc4f7e_f4c5cb0304564a5292a087cfccc76cee~mv2.png/v1/fill/w_435,h_244,q_90,enc_avif,quality_auto/fc4f7e_f4c5cb0304564a5292a087cfccc76cee~mv2.png 4x, https://static.wixstatic.com/media/fc4f7e_f4c5cb0304564a5292a087cfccc76cee~mv2.png/v1/fill/w_435,h_244,q_90,enc_avif,quality_auto/fc4f7e_f4c5cb0304564a5292a087cfccc76cee~mv2.png 5x",},
        {title:'TVCF', subtext:'아이스트 - 김사랑 TVCF', src:"https://static.wixstatic.com/media/79b378_12bc4238a0aa465b900b5db25553eb25~mv2.jpeg/v1/fill/w_145,h_81,fp_0.54_0.37,q_90,enc_avif,quality_auto/79b378_12bc4238a0aa465b900b5db25553eb25~mv2.jpeg 1x, https://static.wixstatic.com/media/79b378_12bc4238a0aa465b900b5db25553eb25~mv2.jpeg/v1/fill/w_290,h_162,fp_0.54_0.37,q_90,enc_avif,quality_auto/79b378_12bc4238a0aa465b900b5db25553eb25~mv2.jpeg 2x, https://static.wixstatic.com/media/79b378_12bc4238a0aa465b900b5db25553eb25~mv2.jpeg/v1/fill/w_435,h_243,fp_0.54_0.37,q_90,enc_avif,quality_auto/79b378_12bc4238a0aa465b900b5db25553eb25~mv2.jpeg 3x, https://static.wixstatic.com/media/79b378_12bc4238a0aa465b900b5db25553eb25~mv2.jpeg/v1/fill/w_580,h_324,fp_0.54_0.37,q_90,enc_avif,quality_auto/79b378_12bc4238a0aa465b900b5db25553eb25~mv2.jpeg 4x, https://static.wixstatic.com/media/79b378_12bc4238a0aa465b900b5db25553eb25~mv2.jpeg/v1/fill/w_725,h_405,fp_0.54_0.37,q_90,enc_avif,quality_auto/79b378_12bc4238a0aa465b900b5db25553eb25~mv2.jpeg 5x",},
        {title:'유튜브 콘텐츠', subtext:'어서오십초 - 이판사판', src:"https://static.wixstatic.com/media/79b378_178e2cfe7a4f45c6a5f19df7998e864e~mv2.jpeg/v1/fill/w_145,h_81,fp_0.49_0.37,q_90,enc_avif,quality_auto/79b378_178e2cfe7a4f45c6a5f19df7998e864e~mv2.jpeg 1x, https://static.wixstatic.com/media/79b378_178e2cfe7a4f45c6a5f19df7998e864e~mv2.jpeg/v1/fill/w_290,h_162,fp_0.49_0.37,q_90,enc_avif,quality_auto/79b378_178e2cfe7a4f45c6a5f19df7998e864e~mv2.jpeg 2x, https://static.wixstatic.com/media/79b378_178e2cfe7a4f45c6a5f19df7998e864e~mv2.jpeg/v1/fill/w_435,h_243,fp_0.49_0.37,q_90,enc_avif,quality_auto/79b378_178e2cfe7a4f45c6a5f19df7998e864e~mv2.jpeg 3x, https://static.wixstatic.com/media/79b378_178e2cfe7a4f45c6a5f19df7998e864e~mv2.jpeg/v1/fill/w_580,h_324,fp_0.49_0.37,q_90,enc_avif,quality_auto/79b378_178e2cfe7a4f45c6a5f19df7998e864e~mv2.jpeg 4x, https://static.wixstatic.com/media/79b378_178e2cfe7a4f45c6a5f19df7998e864e~mv2.jpeg/v1/fill/w_725,h_405,fp_0.49_0.37,q_90,enc_avif,quality_auto/79b378_178e2cfe7a4f45c6a5f19df7998e864e~mv2.jpeg 5x",},
        {title:'바이럴필름', subtext:'동아제약 - 신드롬보고서', src:"https://static.wixstatic.com/media/79b378_742b2c2e6aad43bfa7e6f8ac920219cd~mv2.jpeg/v1/fill/w_144,h_81,fp_0.55_0.39,q_90,enc_avif,quality_auto/79b378_742b2c2e6aad43bfa7e6f8ac920219cd~mv2.jpeg 1x, https://static.wixstatic.com/media/79b378_742b2c2e6aad43bfa7e6f8ac920219cd~mv2.jpeg/v1/fill/w_288,h_162,fp_0.55_0.39,q_90,enc_avif,quality_auto/79b378_742b2c2e6aad43bfa7e6f8ac920219cd~mv2.jpeg 2x, https://static.wixstatic.com/media/79b378_742b2c2e6aad43bfa7e6f8ac920219cd~mv2.jpeg/v1/fill/w_432,h_243,fp_0.55_0.39,q_90,enc_avif,quality_auto/79b378_742b2c2e6aad43bfa7e6f8ac920219cd~mv2.jpeg 3x, https://static.wixstatic.com/media/79b378_742b2c2e6aad43bfa7e6f8ac920219cd~mv2.jpeg/v1/fill/w_576,h_324,fp_0.55_0.39,q_90,enc_avif,quality_auto/79b378_742b2c2e6aad43bfa7e6f8ac920219cd~mv2.jpeg 4x, https://static.wixstatic.com/media/79b378_742b2c2e6aad43bfa7e6f8ac920219cd~mv2.jpeg/v1/fill/w_720,h_405,fp_0.55_0.39,q_90,enc_avif,quality_auto/79b378_742b2c2e6aad43bfa7e6f8ac920219cd~mv2.jpeg 5x",},
        {title:'체험형 콘텐츠', subtext:'여기어때 - 모뽀걸즈', src:"https://static.wixstatic.com/media/fc4f7e_bef97e66de42446dbd5cf61daa78e034~mv2.png/v1/fill/w_145,h_81,q_90,enc_avif,quality_auto/fc4f7e_bef97e66de42446dbd5cf61daa78e034~mv2.png 1x, https://static.wixstatic.com/media/fc4f7e_bef97e66de42446dbd5cf61daa78e034~mv2.png/v1/fill/w_290,h_162,q_90,enc_avif,quality_auto/fc4f7e_bef97e66de42446dbd5cf61daa78e034~mv2.png 2x, https://static.wixstatic.com/media/fc4f7e_bef97e66de42446dbd5cf61daa78e034~mv2.png/v1/fill/w_435,h_243,q_90,enc_avif,quality_auto/fc4f7e_bef97e66de42446dbd5cf61daa78e034~mv2.png 3x, https://static.wixstatic.com/media/fc4f7e_bef97e66de42446dbd5cf61daa78e034~mv2.png/v1/fill/w_438,h_244,q_90,enc_avif,quality_auto/fc4f7e_bef97e66de42446dbd5cf61daa78e034~mv2.png 4x, https://static.wixstatic.com/media/fc4f7e_bef97e66de42446dbd5cf61daa78e034~mv2.png/v1/fill/w_438,h_244,q_90,enc_avif,quality_auto/fc4f7e_bef97e66de42446dbd5cf61daa78e034~mv2.png 5x",},
        {title:'정보 전달', subtext:'NH손해보험 - 물어보험', src:"https://static.wixstatic.com/media/fc4f7e_ef6e0a06da844497be971f635ff41bc2~mv2.jpg/v1/fill/w_145,h_81,q_90,enc_avif,quality_auto/fc4f7e_ef6e0a06da844497be971f635ff41bc2~mv2.jpg 1x, https://static.wixstatic.com/media/fc4f7e_ef6e0a06da844497be971f635ff41bc2~mv2.jpg/v1/fill/w_290,h_162,q_90,enc_avif,quality_auto/fc4f7e_ef6e0a06da844497be971f635ff41bc2~mv2.jpg 2x, https://static.wixstatic.com/media/fc4f7e_ef6e0a06da844497be971f635ff41bc2~mv2.jpg/v1/fill/w_435,h_243,q_90,enc_avif,quality_auto/fc4f7e_ef6e0a06da844497be971f635ff41bc2~mv2.jpg 3x, https://static.wixstatic.com/media/fc4f7e_ef6e0a06da844497be971f635ff41bc2~mv2.jpg/v1/fill/w_439,h_245,q_90,enc_avif,quality_auto/fc4f7e_ef6e0a06da844497be971f635ff41bc2~mv2.jpg 4x, https://static.wixstatic.com/media/fc4f7e_ef6e0a06da844497be971f635ff41bc2~mv2.jpg/v1/fill/w_439,h_245,q_90,enc_avif,quality_auto/fc4f7e_ef6e0a06da844497be971f635ff41bc2~mv2.jpg 5x",},
        {title:'정보 전달', subtext:'롯데주류 - 맥과사전', src:"https://static.wixstatic.com/media/fc4f7e_9506cd8d7b7d4281ac84516b68556ba7~mv2.jpg/v1/fill/w_144,h_81,q_90,enc_avif,quality_auto/fc4f7e_9506cd8d7b7d4281ac84516b68556ba7~mv2.jpg 1x, https://static.wixstatic.com/media/fc4f7e_9506cd8d7b7d4281ac84516b68556ba7~mv2.jpg/v1/fill/w_288,h_162,q_90,enc_avif,quality_auto/fc4f7e_9506cd8d7b7d4281ac84516b68556ba7~mv2.jpg 2x, https://static.wixstatic.com/media/fc4f7e_9506cd8d7b7d4281ac84516b68556ba7~mv2.jpg/v1/fill/w_432,h_243,q_90,enc_avif,quality_auto/fc4f7e_9506cd8d7b7d4281ac84516b68556ba7~mv2.jpg 3x, https://static.wixstatic.com/media/fc4f7e_9506cd8d7b7d4281ac84516b68556ba7~mv2.jpg/v1/fill/w_437,h_245,q_90,enc_avif,quality_auto/fc4f7e_9506cd8d7b7d4281ac84516b68556ba7~mv2.jpg 4x, https://static.wixstatic.com/media/fc4f7e_9506cd8d7b7d4281ac84516b68556ba7~mv2.jpg/v1/fill/w_437,h_245,q_90,enc_avif,quality_auto/fc4f7e_9506cd8d7b7d4281ac84516b68556ba7~mv2.jpg 5x",},
        {title:'체험형 콘텐츠', subtext:'롯데주류 - 맥주클라쓰', src:"https://static.wixstatic.com/media/fc4f7e_c35d3acd1c044b88ae789237c9eead08~mv2.jpg/v1/fill/w_145,h_81,q_90,enc_avif,quality_auto/fc4f7e_c35d3acd1c044b88ae789237c9eead08~mv2.jpg 1x, https://static.wixstatic.com/media/fc4f7e_c35d3acd1c044b88ae789237c9eead08~mv2.jpg/v1/fill/w_290,h_162,q_90,enc_avif,quality_auto/fc4f7e_c35d3acd1c044b88ae789237c9eead08~mv2.jpg 2x, https://static.wixstatic.com/media/fc4f7e_c35d3acd1c044b88ae789237c9eead08~mv2.jpg/v1/fill/w_435,h_243,q_90,enc_avif,quality_auto/fc4f7e_c35d3acd1c044b88ae789237c9eead08~mv2.jpg 3x, https://static.wixstatic.com/media/fc4f7e_c35d3acd1c044b88ae789237c9eead08~mv2.jpg/v1/fill/w_439,h_245,q_90,enc_avif,quality_auto/fc4f7e_c35d3acd1c044b88ae789237c9eead08~mv2.jpg 4x, https://static.wixstatic.com/media/fc4f7e_c35d3acd1c044b88ae789237c9eead08~mv2.jpg/v1/fill/w_439,h_245,q_90,enc_avif,quality_auto/fc4f7e_c35d3acd1c044b88ae789237c9eead08~mv2.jpg 5x",},
        {title:'테이블토크', subtext:'우리은행 - 은근남녀 썰', src:"https://static.wixstatic.com/media/fc4f7e_28dad3f72b374a668b35b4f0ff450c66~mv2.jpg/v1/fill/w_145,h_81,q_90,enc_avif,quality_auto/fc4f7e_28dad3f72b374a668b35b4f0ff450c66~mv2.jpg 1x, https://static.wixstatic.com/media/fc4f7e_28dad3f72b374a668b35b4f0ff450c66~mv2.jpg/v1/fill/w_290,h_162,q_90,enc_avif,quality_auto/fc4f7e_28dad3f72b374a668b35b4f0ff450c66~mv2.jpg 2x, https://static.wixstatic.com/media/fc4f7e_28dad3f72b374a668b35b4f0ff450c66~mv2.jpg/v1/fill/w_435,h_243,q_90,enc_avif,quality_auto/fc4f7e_28dad3f72b374a668b35b4f0ff450c66~mv2.jpg 3x, https://static.wixstatic.com/media/fc4f7e_28dad3f72b374a668b35b4f0ff450c66~mv2.jpg/v1/fill/w_439,h_245,q_90,enc_avif,quality_auto/fc4f7e_28dad3f72b374a668b35b4f0ff450c66~mv2.jpg 4x, https://static.wixstatic.com/media/fc4f7e_28dad3f72b374a668b35b4f0ff450c66~mv2.jpg/v1/fill/w_439,h_245,q_90,enc_avif,quality_auto/fc4f7e_28dad3f72b374a668b35b4f0ff450c66~mv2.jpg 5x",},
        {title:'바이럴', subtext:'빙그레 - 슈퍼콘', src:"https://static.wixstatic.com/media/fc4f7e_11dd387314b2457baecf726e04ed7153~mv2.jpg/v1/fill/w_144,h_81,q_90,enc_avif,quality_auto/fc4f7e_11dd387314b2457baecf726e04ed7153~mv2.jpg 1x, https://static.wixstatic.com/media/fc4f7e_11dd387314b2457baecf726e04ed7153~mv2.jpg/v1/fill/w_288,h_162,q_90,enc_avif,quality_auto/fc4f7e_11dd387314b2457baecf726e04ed7153~mv2.jpg 2x, https://static.wixstatic.com/media/fc4f7e_11dd387314b2457baecf726e04ed7153~mv2.jpg/v1/fill/w_432,h_243,q_90,enc_avif,quality_auto/fc4f7e_11dd387314b2457baecf726e04ed7153~mv2.jpg 3x, https://static.wixstatic.com/media/fc4f7e_11dd387314b2457baecf726e04ed7153~mv2.jpg/v1/fill/w_437,h_245,q_90,enc_avif,quality_auto/fc4f7e_11dd387314b2457baecf726e04ed7153~mv2.jpg 4x, https://static.wixstatic.com/media/fc4f7e_11dd387314b2457baecf726e04ed7153~mv2.jpg/v1/fill/w_437,h_245,q_90,enc_avif,quality_auto/fc4f7e_11dd387314b2457baecf726e04ed7153~mv2.jpg 5x",},
        {title:'광고', subtext:'우리은행 - 우리WON뱅킹', src:"https://static.wixstatic.com/media/fc4f7e_eb0975fcda8f41719907d7e8c82fb235~mv2.jpg/v1/fill/w_145,h_81,q_90,enc_avif,quality_auto/fc4f7e_eb0975fcda8f41719907d7e8c82fb235~mv2.jpg 1x, https://static.wixstatic.com/media/fc4f7e_eb0975fcda8f41719907d7e8c82fb235~mv2.jpg/v1/fill/w_290,h_162,q_90,enc_avif,quality_auto/fc4f7e_eb0975fcda8f41719907d7e8c82fb235~mv2.jpg 2x, https://static.wixstatic.com/media/fc4f7e_eb0975fcda8f41719907d7e8c82fb235~mv2.jpg/v1/fill/w_435,h_243,q_90,enc_avif,quality_auto/fc4f7e_eb0975fcda8f41719907d7e8c82fb235~mv2.jpg 3x, https://static.wixstatic.com/media/fc4f7e_eb0975fcda8f41719907d7e8c82fb235~mv2.jpg/v1/fill/w_439,h_245,q_90,enc_avif,quality_auto/fc4f7e_eb0975fcda8f41719907d7e8c82fb235~mv2.jpg 4x, https://static.wixstatic.com/media/fc4f7e_eb0975fcda8f41719907d7e8c82fb235~mv2.jpg/v1/fill/w_439,h_245,q_90,enc_avif,quality_auto/fc4f7e_eb0975fcda8f41719907d7e8c82fb235~mv2.jpg 5x",},
        {title:'광고', subtext:'스냅스 - 폰케이스', src:"https://static.wixstatic.com/media/fc4f7e_4cc9268efd9e4349bb9ef35ab75fae36~mv2.png/v1/fill/w_145,h_81,q_90,enc_avif,quality_auto/fc4f7e_4cc9268efd9e4349bb9ef35ab75fae36~mv2.png 1x, https://static.wixstatic.com/media/fc4f7e_4cc9268efd9e4349bb9ef35ab75fae36~mv2.png/v1/fill/w_290,h_162,q_90,enc_avif,quality_auto/fc4f7e_4cc9268efd9e4349bb9ef35ab75fae36~mv2.png 2x, https://static.wixstatic.com/media/fc4f7e_4cc9268efd9e4349bb9ef35ab75fae36~mv2.png/v1/fill/w_435,h_243,q_90,enc_avif,quality_auto/fc4f7e_4cc9268efd9e4349bb9ef35ab75fae36~mv2.png 3x, https://static.wixstatic.com/media/fc4f7e_4cc9268efd9e4349bb9ef35ab75fae36~mv2.png/v1/fill/w_437,h_244,q_90,enc_avif,quality_auto/fc4f7e_4cc9268efd9e4349bb9ef35ab75fae36~mv2.png 4x, https://static.wixstatic.com/media/fc4f7e_4cc9268efd9e4349bb9ef35ab75fae36~mv2.png/v1/fill/w_437,h_244,q_90,enc_avif,quality_auto/fc4f7e_4cc9268efd9e4349bb9ef35ab75fae36~mv2.png 5x",},
        {title:'바이럴', subtext:'케이크어플 홍보', src:"https://static.wixstatic.com/media/fc4f7e_48625f04a22843acb3445f301b05162e~mv2.jpg/v1/fill/w_144,h_81,q_90,enc_avif,quality_auto/fc4f7e_48625f04a22843acb3445f301b05162e~mv2.jpg 1x, https://static.wixstatic.com/media/fc4f7e_48625f04a22843acb3445f301b05162e~mv2.jpg/v1/fill/w_288,h_162,q_90,enc_avif,quality_auto/fc4f7e_48625f04a22843acb3445f301b05162e~mv2.jpg 2x, https://static.wixstatic.com/media/fc4f7e_48625f04a22843acb3445f301b05162e~mv2.jpg/v1/fill/w_432,h_243,q_90,enc_avif,quality_auto/fc4f7e_48625f04a22843acb3445f301b05162e~mv2.jpg 3x, https://static.wixstatic.com/media/fc4f7e_48625f04a22843acb3445f301b05162e~mv2.jpg/v1/fill/w_437,h_245,q_90,enc_avif,quality_auto/fc4f7e_48625f04a22843acb3445f301b05162e~mv2.jpg 4x, https://static.wixstatic.com/media/fc4f7e_48625f04a22843acb3445f301b05162e~mv2.jpg/v1/fill/w_437,h_245,q_90,enc_avif,quality_auto/fc4f7e_48625f04a22843acb3445f301b05162e~mv2.jpg 5x",},
        {title:'광고', subtext:'인비절라인 - 교정 골든타임', src:"https://static.wixstatic.com/media/fc4f7e_a0c6f86a4f7843a18ff7679fac2a2d89~mv2.jpg/v1/fill/w_145,h_81,q_90,enc_avif,quality_auto/fc4f7e_a0c6f86a4f7843a18ff7679fac2a2d89~mv2.jpg 1x, https://static.wixstatic.com/media/fc4f7e_a0c6f86a4f7843a18ff7679fac2a2d89~mv2.jpg/v1/fill/w_290,h_162,q_90,enc_avif,quality_auto/fc4f7e_a0c6f86a4f7843a18ff7679fac2a2d89~mv2.jpg 2x, https://static.wixstatic.com/media/fc4f7e_a0c6f86a4f7843a18ff7679fac2a2d89~mv2.jpg/v1/fill/w_435,h_243,q_90,enc_avif,quality_auto/fc4f7e_a0c6f86a4f7843a18ff7679fac2a2d89~mv2.jpg 3x, https://static.wixstatic.com/media/fc4f7e_a0c6f86a4f7843a18ff7679fac2a2d89~mv2.jpg/v1/fill/w_439,h_245,q_90,enc_avif,quality_auto/fc4f7e_a0c6f86a4f7843a18ff7679fac2a2d89~mv2.jpg 4x, https://static.wixstatic.com/media/fc4f7e_a0c6f86a4f7843a18ff7679fac2a2d89~mv2.jpg/v1/fill/w_439,h_245,q_90,enc_avif,quality_auto/fc4f7e_a0c6f86a4f7843a18ff7679fac2a2d89~mv2.jpg 5x",},
        {title:'바이럴', subtext:'신라면세점 - 5번출국장', src:"https://static.wixstatic.com/media/fc4f7e_9d99164bbc144d7bacb996022c24e6c4~mv2.jpg/v1/fill/w_145,h_81,q_90,enc_avif,quality_auto/fc4f7e_9d99164bbc144d7bacb996022c24e6c4~mv2.jpg 1x, https://static.wixstatic.com/media/fc4f7e_9d99164bbc144d7bacb996022c24e6c4~mv2.jpg/v1/fill/w_290,h_162,q_90,enc_avif,quality_auto/fc4f7e_9d99164bbc144d7bacb996022c24e6c4~mv2.jpg 2x, https://static.wixstatic.com/media/fc4f7e_9d99164bbc144d7bacb996022c24e6c4~mv2.jpg/v1/fill/w_435,h_243,q_90,enc_avif,quality_auto/fc4f7e_9d99164bbc144d7bacb996022c24e6c4~mv2.jpg 3x, https://static.wixstatic.com/media/fc4f7e_9d99164bbc144d7bacb996022c24e6c4~mv2.jpg/v1/fill/w_439,h_245,q_90,enc_avif,quality_auto/fc4f7e_9d99164bbc144d7bacb996022c24e6c4~mv2.jpg 4x, https://static.wixstatic.com/media/fc4f7e_9d99164bbc144d7bacb996022c24e6c4~mv2.jpg/v1/fill/w_439,h_245,q_90,enc_avif,quality_auto/fc4f7e_9d99164bbc144d7bacb996022c24e6c4~mv2.jpg 5x",},
        {title:'브이로그', subtext:'신라면세점 - 명동 탐방', src:"https://static.wixstatic.com/media/fc4f7e_4b2318c6545d4ac0a08f3b7bdec6af18~mv2.png/v1/fill/w_144,h_81,q_90,enc_avif,quality_auto/fc4f7e_4b2318c6545d4ac0a08f3b7bdec6af18~mv2.png 1x, https://static.wixstatic.com/media/fc4f7e_4b2318c6545d4ac0a08f3b7bdec6af18~mv2.png/v1/fill/w_288,h_162,q_90,enc_avif,quality_auto/fc4f7e_4b2318c6545d4ac0a08f3b7bdec6af18~mv2.png 2x, https://static.wixstatic.com/media/fc4f7e_4b2318c6545d4ac0a08f3b7bdec6af18~mv2.png/v1/fill/w_432,h_243,q_90,enc_avif,quality_auto/fc4f7e_4b2318c6545d4ac0a08f3b7bdec6af18~mv2.png 3x, https://static.wixstatic.com/media/fc4f7e_4b2318c6545d4ac0a08f3b7bdec6af18~mv2.png/v1/fill/w_437,h_245,q_90,enc_avif,quality_auto/fc4f7e_4b2318c6545d4ac0a08f3b7bdec6af18~mv2.png 4x, https://static.wixstatic.com/media/fc4f7e_4b2318c6545d4ac0a08f3b7bdec6af18~mv2.png/v1/fill/w_437,h_245,q_90,enc_avif,quality_auto/fc4f7e_4b2318c6545d4ac0a08f3b7bdec6af18~mv2.png 5x",},
        {title:'바이럴', subtext:'청정원 - 소스 후크송', src:"https://static.wixstatic.com/media/fc4f7e_81d85bea0de54036aef48f278e36c657~mv2.jpg/v1/fill/w_145,h_81,q_90,enc_avif,quality_auto/fc4f7e_81d85bea0de54036aef48f278e36c657~mv2.jpg 1x, https://static.wixstatic.com/media/fc4f7e_81d85bea0de54036aef48f278e36c657~mv2.jpg/v1/fill/w_290,h_162,q_90,enc_avif,quality_auto/fc4f7e_81d85bea0de54036aef48f278e36c657~mv2.jpg 2x, https://static.wixstatic.com/media/fc4f7e_81d85bea0de54036aef48f278e36c657~mv2.jpg/v1/fill/w_435,h_243,q_90,enc_avif,quality_auto/fc4f7e_81d85bea0de54036aef48f278e36c657~mv2.jpg 3x, https://static.wixstatic.com/media/fc4f7e_81d85bea0de54036aef48f278e36c657~mv2.jpg/v1/fill/w_439,h_245,q_90,enc_avif,quality_auto/fc4f7e_81d85bea0de54036aef48f278e36c657~mv2.jpg 4x, https://static.wixstatic.com/media/fc4f7e_81d85bea0de54036aef48f278e36c657~mv2.jpg/v1/fill/w_439,h_245,q_90,enc_avif,quality_auto/fc4f7e_81d85bea0de54036aef48f278e36c657~mv2.jpg 5x",},
        {title:'바이럴', subtext:'신라면세점 - S리워드', src:"https://static.wixstatic.com/media/fc4f7e_2906d912bf33415a9c2bfeb12b93dd66~mv2.jpg/v1/fill/w_145,h_81,q_90,enc_avif,quality_auto/fc4f7e_2906d912bf33415a9c2bfeb12b93dd66~mv2.jpg 1x, https://static.wixstatic.com/media/fc4f7e_2906d912bf33415a9c2bfeb12b93dd66~mv2.jpg/v1/fill/w_290,h_162,q_90,enc_avif,quality_auto/fc4f7e_2906d912bf33415a9c2bfeb12b93dd66~mv2.jpg 2x, https://static.wixstatic.com/media/fc4f7e_2906d912bf33415a9c2bfeb12b93dd66~mv2.jpg/v1/fill/w_435,h_243,q_90,enc_avif,quality_auto/fc4f7e_2906d912bf33415a9c2bfeb12b93dd66~mv2.jpg 3x, https://static.wixstatic.com/media/fc4f7e_2906d912bf33415a9c2bfeb12b93dd66~mv2.jpg/v1/fill/w_437,h_244,q_90,enc_avif,quality_auto/fc4f7e_2906d912bf33415a9c2bfeb12b93dd66~mv2.jpg 4x, https://static.wixstatic.com/media/fc4f7e_2906d912bf33415a9c2bfeb12b93dd66~mv2.jpg/v1/fill/w_437,h_244,q_90,enc_avif,quality_auto/fc4f7e_2906d912bf33415a9c2bfeb12b93dd66~mv2.jpg 5x",},
        {title:'광고', subtext:'롯데주류 - 복숭아 소다', src:"https://static.wixstatic.com/media/fc4f7e_0e37b2a6881d490d912363549ac698fc~mv2.png/v1/fill/w_144,h_81,q_90,enc_avif,quality_auto/fc4f7e_0e37b2a6881d490d912363549ac698fc~mv2.png 1x, https://static.wixstatic.com/media/fc4f7e_0e37b2a6881d490d912363549ac698fc~mv2.png/v1/fill/w_288,h_162,q_90,enc_avif,quality_auto/fc4f7e_0e37b2a6881d490d912363549ac698fc~mv2.png 2x, https://static.wixstatic.com/media/fc4f7e_0e37b2a6881d490d912363549ac698fc~mv2.png/v1/fill/w_432,h_243,q_90,enc_avif,quality_auto/fc4f7e_0e37b2a6881d490d912363549ac698fc~mv2.png 3x, https://static.wixstatic.com/media/fc4f7e_0e37b2a6881d490d912363549ac698fc~mv2.png/v1/fill/w_435,h_244,q_90,enc_avif,quality_auto/fc4f7e_0e37b2a6881d490d912363549ac698fc~mv2.png 4x, https://static.wixstatic.com/media/fc4f7e_0e37b2a6881d490d912363549ac698fc~mv2.png/v1/fill/w_435,h_244,q_90,enc_avif,quality_auto/fc4f7e_0e37b2a6881d490d912363549ac698fc~mv2.png 5x",},
        {title:'체험형 콘텐츠', subtext:'티스테이션 - 그들의 차생활', src:"https://static.wixstatic.com/media/fc4f7e_01a76f37a55c4e318577a585be55fa86~mv2.png/v1/fill/w_145,h_81,q_90,enc_avif,quality_auto/fc4f7e_01a76f37a55c4e318577a585be55fa86~mv2.png 1x, https://static.wixstatic.com/media/fc4f7e_01a76f37a55c4e318577a585be55fa86~mv2.png/v1/fill/w_290,h_162,q_90,enc_avif,quality_auto/fc4f7e_01a76f37a55c4e318577a585be55fa86~mv2.png 2x, https://static.wixstatic.com/media/fc4f7e_01a76f37a55c4e318577a585be55fa86~mv2.png/v1/fill/w_435,h_243,q_90,enc_avif,quality_auto/fc4f7e_01a76f37a55c4e318577a585be55fa86~mv2.png 3x, https://static.wixstatic.com/media/fc4f7e_01a76f37a55c4e318577a585be55fa86~mv2.png/v1/fill/w_437,h_244,q_90,enc_avif,quality_auto/fc4f7e_01a76f37a55c4e318577a585be55fa86~mv2.png 4x, https://static.wixstatic.com/media/fc4f7e_01a76f37a55c4e318577a585be55fa86~mv2.png/v1/fill/w_437,h_244,q_90,enc_avif,quality_auto/fc4f7e_01a76f37a55c4e318577a585be55fa86~mv2.png 5x",},
        {title:'인터뷰', subtext:'SK하이닉스 - ㅅㅋ한인터뷰', src:"https://static.wixstatic.com/media/fc4f7e_542d0e8620ec4f74ad0f344803f23f47~mv2.jpg/v1/fill/w_145,h_81,q_90,enc_avif,quality_auto/fc4f7e_542d0e8620ec4f74ad0f344803f23f47~mv2.jpg 1x, https://static.wixstatic.com/media/fc4f7e_542d0e8620ec4f74ad0f344803f23f47~mv2.jpg/v1/fill/w_290,h_162,q_90,enc_avif,quality_auto/fc4f7e_542d0e8620ec4f74ad0f344803f23f47~mv2.jpg 2x, https://static.wixstatic.com/media/fc4f7e_542d0e8620ec4f74ad0f344803f23f47~mv2.jpg/v1/fill/w_435,h_243,q_90,enc_avif,quality_auto/fc4f7e_542d0e8620ec4f74ad0f344803f23f47~mv2.jpg 3x, https://static.wixstatic.com/media/fc4f7e_542d0e8620ec4f74ad0f344803f23f47~mv2.jpg/v1/fill/w_439,h_245,q_90,enc_avif,quality_auto/fc4f7e_542d0e8620ec4f74ad0f344803f23f47~mv2.jpg 4x, https://static.wixstatic.com/media/fc4f7e_542d0e8620ec4f74ad0f344803f23f47~mv2.jpg/v1/fill/w_439,h_245,q_90,enc_avif,quality_auto/fc4f7e_542d0e8620ec4f74ad0f344803f23f47~mv2.jpg 5x",},
        {title:'정보 전달', subtext:'KT - 미레도시', src:"https://static.wixstatic.com/media/fc4f7e_8ec59dc8b6fb4190be4e2e2048fe76d7~mv2.jpg/v1/fill/w_144,h_81,q_90,enc_avif,quality_auto/fc4f7e_8ec59dc8b6fb4190be4e2e2048fe76d7~mv2.jpg 1x, https://static.wixstatic.com/media/fc4f7e_8ec59dc8b6fb4190be4e2e2048fe76d7~mv2.jpg/v1/fill/w_288,h_162,q_90,enc_avif,quality_auto/fc4f7e_8ec59dc8b6fb4190be4e2e2048fe76d7~mv2.jpg 2x, https://static.wixstatic.com/media/fc4f7e_8ec59dc8b6fb4190be4e2e2048fe76d7~mv2.jpg/v1/fill/w_432,h_243,q_90,enc_avif,quality_auto/fc4f7e_8ec59dc8b6fb4190be4e2e2048fe76d7~mv2.jpg 3x, https://static.wixstatic.com/media/fc4f7e_8ec59dc8b6fb4190be4e2e2048fe76d7~mv2.jpg/v1/fill/w_437,h_245,q_90,enc_avif,quality_auto/fc4f7e_8ec59dc8b6fb4190be4e2e2048fe76d7~mv2.jpg 4x, https://static.wixstatic.com/media/fc4f7e_8ec59dc8b6fb4190be4e2e2048fe76d7~mv2.jpg/v1/fill/w_437,h_245,q_90,enc_avif,quality_auto/fc4f7e_8ec59dc8b6fb4190be4e2e2048fe76d7~mv2.jpg 5x",},
    ]
    return <main className={`text-white main-bg relative`}>

        <div className={`overlay`}></div>

        <div className={`container font-bold text-5xl relative z-10`}>
            <h2 className={`pt-30 flex items-end gap-[1]`}>
                <span>PORTFOLIO</span>
                <div className={`bg-primary w-[8px] h-[8px] rounded-full mb-2`}></div>
            </h2>
        </div>

        <section className={`grid grid-cols-3 gap-10 gap-y-14 container py-20 relative z-10`} >
            {items.map((item, index) => (<Item {...item} key={index} />))}
        </section>
    </main>
}

export default PortfolioPage;