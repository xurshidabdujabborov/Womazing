import React, { useState } from 'react'
import { Grid, Container } from '@mui/material'
import logo from "../../assets/img/logo.png"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./Nav.css"

function Nav() {
    return (
        <nav>
            <Container maxWidth="xl">
                <Grid container display={"flex"} alignItems={"center"}>
                    <Grid itmes md={4} sm={12} xs={12}>
                        <div className="img">
                            <img src={logo} alt="" />
                        </div>
                    </Grid>
                    <Grid items md={5} sm={12} xs={12}>
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
                    <Grid items md={3} sm={12} xs={12}>
                        <div className="flex">
                            <PhoneInTalkIcon />
                            <span>+7 (495) 823-54-12</span>
                            <ShoppingBasketIcon />
                        </div>
                    </Grid>
                </Grid> 
            </Container>
        </nav>
    )
}

export default Nav