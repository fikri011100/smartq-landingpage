import React from 'react'
import Footer from '../../components/Footer';


function About() {
    return (
        <div>
            <div className="container-about">
                <div className="row-about">
                    <div className='img-wrapper'>
                        <img src="images/logo.png" alt="Antrian" className='img' />
                    </div>
                    <div className="text-wrapper">
                        <p>
                            SmartQ merupakan sebuah aplikasi booking dan atau antrian yang dilakukan secara online 
                            dengan tujuan memberikan konsumen kemudahan, efisiensi, dan efektivitas waktu yang lebih 
                            baik. Selain itu SmartQ juga memberikan profitabilitas lebih bagi UMKM yang sampai hari 
                            ini masih memiliki kendala mengenai system antrian. Dengan adanya perbaikan system antrian 
                            yang ada di Indonesia diharapkan mampu menciptakan, menumbuhkan dan menerapkan kembali 
                            budaya antri yang sudah mulai menghilang di lingkungan masyarakat saat ini. Selain itu 
                            budaya antri merupakan sebuah kegiatan yang seharusnya diterapkan oleh setiap orang pada 
                            tempat dan waktu tertentu. Usaha layanan ini juga dapat mengintegrasikan UMKM yang 
                            membutuhkan solusi mengenai system antrian yang masih belum berjalan dengan baik sehingga 
                            dapat meningkatkan pelayanannya terhadap konsumen yang ada pada suatu tempat tersebut, 
                            sehingga mampu meningkatkan pelayanan yang jauh lebih baik dibandingkan dengan sebelumnya. 
                        </p>
                    </div>
                </div>
                <div
                    className='row-about'
                    
                >
                        <div className='col-slider'>
                            <div className='home__hero-slider-wrapper'>
                                {/* <Slider dots centerMode={true} centerMode={true} >
                                    <div >
                                        <img src="images/queue_photo.jpg" alt="Antrian" className='home__hero-img' />
                                    </div>
                                    <div>
                                        <img src="images/queue_photo.jpg" alt="Antrian" className='home__hero-img' />
                                    </div>
                                    <div>
                                        <img src="images/queue_photo.jpg" alt="Antrian" className='home__hero-img' />
                                    </div>
                                </Slider> */}
                            </div>
                        </div>
                    </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About
