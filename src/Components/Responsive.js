import { Button, Grid, Icon, Typography } from "@mui/material";
import React from "react";
import "./style.css";
export default class Reponsive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            IsLoginSuccess: false,
            errorMsg: ""
        }

    }

    render() {
        return (
            <div>
                <Grid container style={{ padding: 50 }}>
                    <Grid item xs={12} className="box">
                        <Typography style={{ textAlign: "center" }}>
                            <h4 className="fontStyle">Always know what you'll pay.</h4>
                            <h6 className="fontStyle_min">Once you're setup, instantly withdraw payments or deposit into your bank
                                account within 2-3 business days.</h6>
                            <Button variant="contained" className="buttonStyle">Learn More</Button>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6} className="box" mb={5}>

                        <Grid className="GridStyle">
                            <Typography style={{ textAlign: "center" }}>
                                <h1 className="fontStyle2">
                                    15%
                                </h1>
                                <p1 className="fontStyle_low">
                                    per successfull transaction
                                </p1>
                            </Typography>

                        </Grid>
                        <Grid style={{ display: "flex", flexDirection: "row" }}>
                            <Grid item md={6} xs={12} >
                                <div style={{ textAlign: "center" }}>
                                    <h1 className="fontStyle2">
                                        <Icon sx={{ fontSize: 50 }}>campaignoutlined</Icon>
                                        {/* <img src={image} /> */}
                                    </h1>
                                    <p1 className="fontStyle_med">
                                        Account Creation
                                    </p1>
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <div style={{ textAlign: "center" }}>
                                    <h1 className="fontStyle2">
                                        <Icon sx={{ fontSize: 50 }}>movieCreationOutlined</Icon>
                                        {/* <img src={image} /> */}
                                    </h1>
                                    <p1 className="fontStyle_med">
                                        Professional Account
                                    </p1>
                                </div>
                            </Grid>
                            <Typography>

                            </Typography>
                        </Grid>
                        <Grid className="GridStyle">
                            <div className="div5" style={{ textAlign: "center" }}>
                                <span className="fontStyle_med1">
                                    Included for 3 months,
                                    <br />
                                    then $2.5/monthly included VAT
                                </span>
                            </div>
                            <div style={{ textAlign: "center", marginTop:4 }}>
                                <Button variant="contained" className="buttonStyle">Learn More
                                    <Icon style={{ color: "white" }}>
                                        arrow_right_alt
                                    </Icon>
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={6} className="box">
                        <div className="css-1lc3359 css-1r6ovc0">
                            <div className="div3">
                                <Icon sx={{ fontSize: 50 }}>extension</Icon>
                            </div>
                            <h4 className="div3">Customize</h4>
                            <p className="p">Design a custom package for your business.</p>
                            <p className="p">Available for businesses with large payments volume or unique business models.</p>
                        </div>
                        <div className="innerDiv">
                            <h4 className="div3">Contact Sales</h4>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}