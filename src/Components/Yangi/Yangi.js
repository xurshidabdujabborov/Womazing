import React from 'react'
import { Grid, Container } from '@mui/material'
import car from "../../assets/img/card.png"
import car1 from "../../assets/img/card 1.png"
import car2 from "../../assets/img/card 2.png"
import "./Yangi.css"

function Yangi() {
    return (
        <div className='Yangi'>
            <Container maxWidth="xl">
                <h2 className="title">Новая коллекция</h2>
                <Grid container display={"flex"} alignItems={"center"} spacing={3}>
                    <Grid itmes md={4} sm={12} xs={12}>
                        <div className="box">
                            <img src={car} alt="" />
                            <h4>Футболка USA</h4>
                            <p>$229 $129</p>
                        </div>
                    </Grid>
                    <Grid itmes md={4} sm={12} xs={12}>
                        <div className="box">
                            <img src={car1} alt="" />
                            <h4>Купальник Glow</h4>
                            <p> $129</p>
                        </div>
                    </Grid>
                    <Grid itmes md={4} sm={12} xs={12}>
                        <div className="box">
                            <img src={car2} alt="" />
                            <h4>Свитшот Sweet Shot</h4>
                            <p> $129</p>
                        </div>
                    </Grid>
                </Grid>
                <div className="center">
                    <button>Открыть магазин</button>
                </div>
            </Container>
        </div>
    )
}

export default Yangi
