import React from 'react';
import "./footer.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return (
        <footer>
            <div className="continer">
                <div className="Address-section">
                    <div className="Logo-channel">
                        <div className="channels">
                            <div className="Telegram">
                                <a href='https://t.me/alireza_egn'>
                                    <TelegramIcon />
                                </a>
                            </div>
                            <div className="Instagram">
                                <a href='https://instagram.com/alireza_egn'>
                                    <InstagramIcon />
                                </a>
                            </div>
                            <div className="LinkedIn">
                                <a href='https://www.linkedin.com/in/alireza-akhoondi2001'>
                                    <LinkedInIcon />
                                </a>
                            </div>
                        </div>
                        <div className="boxLogo">
                            <img src="/logo/logo.png" alt="" />
                        </div>
                    </div>
                    <div className="Address">
                        <div className="boxAddres">
                            <div className="MtnAddress">
                                ایران، تهران
                            </div>
                            <div className="iconeAddress">
                                <LocationOnIcon />
                            </div>
                        </div>
                        <div className="boxAddres">
                            <div className="MtnAddress">
                                alireza.akhoondi1@gmail.com
                            </div>
                            <div className="iconeAddress">
                                <EmailIcon />
                            </div>
                        </div>
                        <div className="boxAddres">
                            <div className="MtnAddress">
                                09024009061
                            </div>
                            <div className="iconeAddress">
                                <LocalPhoneIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="Links-section" dir="rtl">
                    <div className="Description">
                        <p className="Description-title">درباه سایت</p>
                        <p className="Description-mten">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                            مورد نیاز
                        </p>
                        <p className="Description-Rights">کلیه حقوق مادی و معنوی سایت محفوظ است</p>
                    </div>
                    <div className="Links">
                        <div className="div-Links">
                            <p className="div-Links-title">خدمات مشتریان</p>
                            <ul>
                                <li>پاسخ به پرسش های متداول</li>
                                <li>رویه های بازگرداندن کالا</li>
                                <li>حریم خصوصی</li>
                                <li>گزارش باگ</li>
                            </ul>
                        </div>
                        <div className="div-Links">
                            <p className="div-Links-title">دسترسی سریع</p>
                            <ul>
                                <li>قوانین و مقررات</li>
                                <li>نحوه ثبت فروش</li>
                                <li>شیوه پرداخت</li>
                            </ul>
                        </div>
                    </div>
                    <div className="namad-sendEmail">
                        <div className="namad">
                            <button>محل نماد</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
