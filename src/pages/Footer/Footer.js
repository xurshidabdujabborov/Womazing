import React from 'react'
import { Grid, Container } from '@mui/material'
import logo from "../../assets/img/logo.png"
import fot from "../../assets/img/foooter logo.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <Container maxWidth="xl">
                <Grid container spacing={"12"} alignItems="center">
                    <Grid itmes md={2} sm={12} xs={12}>
                        <div className="img">
                        <img src={logo} alt="" />
                        </div>
                    </Grid>
                    <Grid itmes md={8} sm={12} xs={12}>
                        <ul>
                            <li>
                                <a href="#">Главная</a>
                            </li>
                            <li>
                                <a href="#">Магазин</a>
                            </li>
                            <li>
                                <a href="#">О бренде</a>
                            </li>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid itmes md={2} sm={12} xs={12}>
                      <div className="colomun">
                        <span>+7 (495) 823-54-12</span>
                        <p>hello@womazing.com</p>
                      </div>
                    </Grid>
                </Grid>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Grid container spacing={"12"} alignItems="center">
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="var">
                            <p>© Все права защищены</p>
                            <p>Политика конфиденциальности</p>
                            <p>Публичная оферта</p>
                        </div>
                    </Grid>
                    <Grid itmes md={4} sm={12} xs={12}>
                        <div className="flex">
                            <a href="#">Пальто</a>
                            <a href="#">Свитшоты</a>
                            <a href="#">Кардиганы</a>
                            <a href="#">Толстовки</a>
                        </div>
                    </Grid>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="icon">
                            <InstagramIcon/>
                            <FacebookIcon/>
                            <TelegramIcon/>
                        </div>
                            <div className="img">
                            <img src={fot} alt="" />
                            </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer
