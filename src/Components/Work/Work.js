import React from 'react'
import { Grid, Container } from '@mui/material'
import zor from "../../assets/img/zor.png"
import nas from "../../assets/img/nastroyka.png"
import qol from "../../assets/img/qol.png"
import "./Work.css"
function Work() {
    return (
        <div className='Work'>
            <Container maxWidth="xl">
                <h2 className="title">Что для нас важно</h2>
                <Grid  container  spacing={"12"}>
                    <Grid itmes md={4} sm={6} xs={12}>
                        <div className="box">
                            <img src={zor} alt="" />
                            <h4>Качество</h4>
                            <p>Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</p>
                        </div>
                    </Grid>
                    <Grid itmes md={4} sm={6} xs={12}>
                        <div className="box">
                            <img src={nas} alt="" />
                            <h4>Скорость</h4>
                            <p>Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах</p>
                        </div>
                    </Grid>
                    <Grid itmes md={4} sm={12} xs={12}>
                        <div className="box">
                            <img src={qol} alt="" />
                            <h4>Ответственность</h4>
                            <p>Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Work
