import React from 'react'
import { Grid, Container } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import head from "../../assets/img/header.png"
import head1 from "../../assets/img/header 1.png"
import head2 from "../../assets/img/header 2.png"
import Nav from '../../Components/Nav/Nav'
import "./Header.css"

function Header() {
    return (
        <header>
            <Nav />
            <Container maxWidth="xl">
                <Grid container alignItems={"center"} spacing={0}>
                    <Grid itmes md={6} sm={12} xs={12}>
                        <div className="left">
                            <h1>Новые поступления
                                в этом сезоне</h1>
                            <p>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
                            <div className="flex">
                                <div className="icons">
                                    <ArrowDownwardIcon />
                                </div>
                                <button> Открыть магазин</button>
                            </div>
                        </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                       <div className="bacro">
                       <div className="img">
                            <img src={head} alt="" />
                            <div className="img1">
                                <img src={head1} alt="" />
                            </div>
                            <div className="img2">
                                <img src={head2} alt="" />
                            </div>
                        </div>
                       </div>
                    </Grid>
                </Grid>
            </Container>
        </header>
    )
}

export default Header
