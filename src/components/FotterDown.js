import React from "react";

function FooterDown(){
    return(
        <div className="fotter-container fotter-down bg-white border-top text-dark">
            <div className="fotter-content">
                    <div className="colom-1">
                        <h6>About us</h6>
                            <p>
                            Kami membangun website ini dengan harapan dapat menjadi acuan bagi pengunjung yang masih kebingungan dengan masa depan mereka. Sebagai wadah informasi untuk kaum millennial dalam membantu menentukan pilihan karir dengan harapan dapat menjadi pribadi yang produktif dan berkembang pada masa mendatang.
                            </p>
                    </div>
                    <div className="colom-2">
                    <h6>Target</h6>
                        <ul className="list-unstyled">
                            <li><a href="https://campus.quipper.com/kampuspedia/sekolah-menengah-atas-sma" target="_blank" rel="noopener noreferrer">SMA/SMK</a></li>
                            <li><a href="https://campus.quipper.com/kampuspedia/mahasiswa" target="_blank" rel="noopener noreferrer">Mahasiswa</a></li>
                            <li><a href="https://campus.quipper.com/kampuspedia/fresh-graduate" target="_blank" rel="noopener noreferrer">Fresh Graduate</a></li>
                        </ul>
                    </div>
            </div>
            <div className="copy-right border-top">
                <p> Create by <strong>FUTURE SIGHT</strong> 2022&copy;</p>
            </div>
        </div>
    )
}
export default FooterDown;