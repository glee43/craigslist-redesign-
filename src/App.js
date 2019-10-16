import React from "react";
import { Nav, Form, Button, FormControl, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { createRequireFromPath } from "module";
import StarIcon from "@material-ui/icons/Star";
var menuData = [
    {
        name: "community",
        data: [
            "activities",
            "artists",
            "childcare",
            "classes",
            "events",
            "general",
            "groups",
            "local news",
            "lost+found",
            "missed connections",
            "musicians",
            "pets",
            "politics",
            "rants & raves",
            "rideshare",
            "volunteers"
        ]
    },
    {
        name: "housing",
        data: []
    },
    {
        name: "jobs",
        data: []
    },
    {
        name: "services",
        data: []
    },
    {
        name: "for sale",
        data: []
    },
    {
        name: "gigs",
        data: []
    },
    {
        name: "discussion forums",
        data: []
    },
    {
        name: "resumes",
        data: []
    }
];

var gmap_style = {
    paddingTop: "200px"
}

const useStyles = makeStyles(theme => ({
    root: {
        justifyContent: "center",
        flexWrap: "wrap"
    },
    paper: {
        padding: theme.spacing(1, 2)
    }
}));

function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {menuData.map(menuTitle => {
                            return (
                                <NavDropdown
                                    title={menuTitle.name}
                                    id="collasible-nav-dropdown"
                                >
                                    {menuTitle.data.map(item => {
                                        return (
                                            <NavDropdown.Item href="#">
                                                {item}
                                            </NavDropdown.Item>
                                        );
                                    })}
                                </NavDropdown>
                            );
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="flex-center-wrap">
                <h1 className="account-button">craigslist</h1>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="search craigslist"
                />
                <div>
                    <Button className="account-button">Create Account</Button>
                    <Button className="account-button">Login</Button>
                </div>
            </div>
            <Paper elevation={0} className={classes.paper}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    <Link color="inherit" href="/">
                        Home
                    </Link>
                    <Link color="inherit" href="/getting-started/installation/">
                        For Sale
                    </Link>
                    <Link color="inherit" href="/getting-started/installation/">
                        Antiques
                    </Link>
                    <Typography color="textPrimary">
                        Vintage Mid-Century Oil Seascape Painting
                    </Typography>
                </Breadcrumbs>
            </Paper>
            <div>
                <h1>Vintage Mid-Century Oil Seascape Painting</h1>
            </div>
            {/* the contents */}
            <div className="flex-center-wrap">
                {/* the images */}
                <div className="images">
                    <img src={require("./images/bigPhoto.png")}></img>
                    <div className="flex-center-wrap">
                        <img
                            class="small-pic"
                            src={require("./images/small1.png")}
                        ></img>
                        <img
                            class="small-pic"
                            src={require("./images/small2.png")}
                        ></img>
                        <img
                            class="small-pic"
                            src={require("./images/small3.png")}
                        ></img>
                        <img
                            class="small-pic"
                            src={require("./images/small4.png")}
                        ></img>
                        <img
                            class="small-pic"
                            src={require("./images/small5.png")}
                        ></img>
                        <img
                            class="small-pic"
                            src={require("./images/small6.png")}
                        ></img>
                    </div>
                    <div>Image 1 of 7</div>
                </div>
                {/* the text */}
                <div className="flex-between-wrap column text">
                    <div>
                        <strong>Price:</strong> $125.00
                        <br />
                        <strong>Location:</strong> Provicence, RI <br />
                        <strong>Posted:</strong> 2 Hours Ago by johnsmith34{" "}
                        <br />
                        <strong>Condition:</strong> Good <br />
                        <strong>Price:</strong> $125.00 <br />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        (45)
                    </div>
                    <p>
                        For your consideration is a vintage Mid-Century seascape
                        oil painting. This dramatic seascape was completed on a
                        canvas panel and was signed by the artist on the lower
                        left. The signature looks to me like C. Rodaphele,
                        however, I am not positive. I provided a close-up image
                        of the signature for you own inspection. The artist
                        dramatically captures the rough seas crashing upon the
                        rocky shore as a lone sailboat cruises beneath the storm
                        clouds. I am estimating the painting to be from the
                        1940's-1950's time period. <br /> <br />
                        This painting is in overall very good vintage condition.
                        Under a black light it shows no signs of paint loss,
                        in-painting or repair. Unframed the painting measures
                        14" in height x 18" wide and together with the rustic
                        drift wood colored wooden frame it measures 18 1/2" x 22
                        1/2". The handsome vintage frame has a depth of 2" and
                        is in overall very good condition consistent with its
                        age.
                    </p>
                </div>
                <div style={gmap_style} className="wtf-is-happening">
                    <div className="gmap flex-center-wrap">
                        <img
                            className="gmap-img "
                            src={require("./images/maps.png")}
                        ></img>
                        <div className="circle "></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
