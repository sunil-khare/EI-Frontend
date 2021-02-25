// import Header from '../providers/Header'
import React from 'react'
import logo from '../assets/img/logo.png';
import '../assets/css/Loader.css'
import '../assets/css/Home.css'
import Chart from "react-apexcharts";
import { Button, Modal, Dropdown, Spinner } from 'react-bootstrap'
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {
    Link,
    Redirect
} from "react-router-dom";
import StepperData from '../providers/Stepper'
import Footer from '../providers/Footer';
import { PostData } from '../services/PostData';
// import $ from 'jquery/jquery'
// const newCFList = []
class Home extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            lineChart_1: {
                options: {
                    chart: {
                        id: "line"
                    },
                    xaxis: {
                        categories: [0]
                    },
                    title: {
                        text: 'X Edge Result Type',
                        align: 'left'
                    },
                    responsive: [
                        {
                            breakpoint: 1000
                        }
                    ]
                },

                series: [
                    {
                        name: "series-1",
                        data: [0]
                    }
                ]
            },
            lineChart_2: {
                options: {
                    chart: {
                        id: "line"
                    },
                    xaxis: {
                        categories: [0]
                    },
                    title: {
                        text: 'X Edge Result Type',
                        align: 'left'
                    },
                    responsive: [
                        {
                            breakpoint: 500,
                            options: {
                                plotOptions: {
                                    bar: {
                                        horizontal: false
                                    }
                                },
                                legend: {
                                    position: "bottom"
                                }
                            }
                        }
                    ]
                },
                series: [
                    {
                        name: "series-1",
                        data: [0]
                    }
                ],

            },
            lineChart_3: {
                options: {
                    chart: {
                        id: "line"
                    },
                    xaxis: {
                        categories: []
                    },
                    title: {
                        text: 'X Edge Result Type',
                        align: 'left'
                    },
                    responsive: [
                        {
                            breakpoint: 500,
                            options: {
                                plotOptions: {
                                    bar: {
                                        horizontal: false
                                    }
                                },
                                legend: {
                                    position: "bottom"
                                }
                            }
                        }
                    ]
                },
                series: [
                    {
                        name: "series-1",
                        data: []
                    }
                ]

            },
            lineChart_4: {
                options: {
                    chart: {
                        id: "line"
                    },
                    xaxis: {
                        categories: []
                    },
                    title: {
                        text: 'X Edge Result Type',
                        align: 'left'
                    },
                    responsive: [
                        {
                            breakpoint: 500,
                            options: {
                                plotOptions: {
                                    bar: {
                                        horizontal: false
                                    }
                                },
                                legend: {
                                    position: "bottom"
                                }
                            }
                        }
                    ]
                },
                series: [
                    {
                        name: "series-1",
                        data: []
                    }
                ]

            },
            lineChart_5: {
                options: {
                    chart: {
                        id: "line"
                    },
                    xaxis: {
                        categories: []
                    },
                    title: {
                        text: 'X Edge Result Type',
                        align: 'left'
                    },
                    responsive: [
                        {
                            breakpoint: 500,
                            options: {
                                plotOptions: {
                                    bar: {
                                        horizontal: false
                                    }
                                },
                                legend: {
                                    position: "bottom"
                                }
                            }
                        }
                    ]
                },
                series: [
                    {
                        name: "series-1",
                        data: []
                    }
                ]
            },
            lineChart_6: {
                options: {
                    chart: {
                        id: "line"
                    },
                    xaxis: {
                        categories: []
                    },
                    title: {
                        text: 'X Edge Result Type',
                        align: 'left'
                    },
                    responsive: [
                        {
                            breakpoint: 500,
                            options: {
                                plotOptions: {
                                    bar: {
                                        horizontal: false
                                    }
                                },
                                legend: {
                                    position: "bottom"
                                }
                            }
                        }
                    ]
                },
                series: [
                    {
                        name: "series-1",
                        data: []
                    },
                ]
            },
            line1: {
                chart: {
                    width: 380,
                    type: 'donut',
                },
                labels: ['Miss', 'Redirect', 'Hit', 'Error'],
                title: {
                    text: 'X Edge Result Type',
                    align: 'left'
                },
                fill: {
                    type: 'gradient',

                },
                responsive: [{
                    breakpoint: 480
                }],
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 800,
                    animateGradually: {
                        enabled: true,
                        delay: 150
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350
                    }
                }
            },
            series: [0],
            series2: [0],
            setShow_instractions: false,
            show_instractions: false,
            handle_showConfig_new: false,
            handle_showConfig_delete: false,
            show_config_new: false,
            show_config_delete: false,
            loader: true,
            graphType: "Select Graph Type",
            graphType_name: 'NIL',
            distributionId: 'Select Distribution',
            distributionName_id: 'NIL',
            distributionList: [],
            NewDistributionId: '',
            redirect: false,
            daily: 'Select Hour',
            startDate: new Date(),
            fullDate: '',
            monthly: '',
            weekNo: '',
            graphScreen:false,
            dailyArray: [{ id: 1, name: '1' }, { id: 2, name: '2' }, { id: 3, name: '3' }, { id: 4, name: '4' }, { id: 5, name: '5' }, { id: 6, name: '6' }, { id: 7, name: '7' }, { id: 8, name: '8' }, { id: 9, name: '9' }, { id: 10, name: '10' }, { id: 11, name: '11' }, { id: 12, name: '12' }]
        };
        this.handleShow_instractions = this.handleShow_instractions.bind(this);
        this.handleClose_instractions = this.handleClose_instractions.bind(this)
        this.handleShow_config_new = this.handleShow_config_new.bind(this);
        this.handleShow_config_delete = this.handleShow_config_delete.bind(this);
        this.handleClose_config = this.handleClose_config.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.getReport = this.getReport.bind(this);
        this.logout = this.logout.bind(this)
        
        this.setStartDate = this.setStartDate.bind(this)
        this.getDistributionList()

    }
    load_graph(pathname) {
        // this.setState({loader:true})
        // let PathName = {PathName:PathName}
        // const options = {
        //     method:'POST',
        //     headers: {
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(PathName)
        // }
        // console.log(pathname)
        fetch('http://localhost:3001/getData').then((response) => response.json()).then((data) => {


            var players = data
            let miss = 0, hit = 0, redirect = 0, error = 0, get = 0, post = 0, option = 0, head = 0;


            players.forEach(function (d) {
                if (d.x_edge_result_type === "Miss")
                    miss = miss + 1;
                if (d.x_edge_result_type === "Hit")
                    hit = hit + 1;
                if (d.x_edge_result_type === "Redirect")
                    redirect = redirect + 1;
                if (d.x_edge_result_type === "Error")
                    error = error + 1;

                if (d.cs_method === "GET")
                    get = get + 1;
                if (d.cs_method === "POST")
                    post = post + 1;
                if (d.cs_method === "OPTIONS")
                    option = option + 1;
                if (d.cs_method === "HEAD")
                    head = head + 1;
            });
            let data1 = [miss, hit, redirect, error];
            let data2 = [get, post, option, head]
            this.setState({ series: data1, series2: data2 })

            var playerLabels = []
            var group_sum_sc_datatransfer = [];
            var group_avg_time_taken = [];
            var group_avg_time_to_first_byte = [];
            var group_sum_count = [];
            var group_sum_cs_datatransfer = [];
            var promise = []

            promise.push(
                players.forEach(function (d) {
                    playerLabels.push(d.year + "/" + d.month + "/" + d.day);
                }),

                players.forEach(function (d) {
                    group_sum_sc_datatransfer.push(d.group_sum_sc_datatransfer)
                }),
                players.forEach(function (d) {

                    group_avg_time_taken.push(d.group_avg_time_taken)
                }),
                players.forEach(function (d) {
                    group_avg_time_to_first_byte.push(d.group_avg_time_to_first_byte)
                }),
                players.forEach(function (d) {
                    group_sum_count.push(d.group_sum_count)
                }),
                players.forEach(function (d) {
                    group_sum_cs_datatransfer.push(d.group_sum_cs_datatransfer)
                })

            )
            Promise.all(promise)

            this.setState({
                lineChart_1: {
                    options: { chart: { id: 'line' }, xaxis: { categories: playerLabels } },
                    series: [{ name: "series-1", data: group_sum_sc_datatransfer }]
                }
            })
            this.setState({
                lineChart_2: {
                    options: { chart: { id: 'line' }, xaxis: { categories: playerLabels } },
                    series: [{ name: "series-1", data: group_avg_time_taken }]
                }
            })
            this.setState({
                lineChart_3: {
                    options: { chart: { id: 'line' }, xaxis: { categories: playerLabels } },
                    series: [{ name: "series-1", data: group_avg_time_to_first_byte }]
                }
            })
            this.setState({
                lineChart_4: {
                    options: { chart: { id: 'line' }, xaxis: { categories: playerLabels } },
                    series: [{ name: "series-1", data: group_sum_count }]
                }
            })
            this.setState({
                lineChart_5: {
                    options: { chart: { id: 'line' }, xaxis: { categories: playerLabels } },
                    series: [{ name: "series-1", data: group_sum_cs_datatransfer }]
                }
            })
            this.setState({ loader: false })

        }).catch((err) => console.log(err))

    }
    loadGraph() {
        let PathName = '';

        if (this.state.distributionId !== 'Select Distribution' && this.state.graphType !== 'Select Graph Type') {
            if (this.state.graphType === 'Hourly' && this.state.daily !== 'Select Hour') {
                PathName = '/123456789012/' + this.state.distributionId + '/' + this.state.graphType + '/' + this.state.fullDate + '-' + this.state.daily + ".csv"
                console.log(PathName)
              
                
               
            } else if (this.state.graphType === 'Today') {
                PathName = '/123456789012/' + this.state.distributionId + '/' + this.state.graphType + '/today.csv'
                console.log(PathName)
              
                
               
            } else if (this.state.graphType === 'WTD') {
                PathName = '/123456789012/' + this.state.distributionId + '/' + this.state.graphType + '/wtd.csv'
                console.log(PathName)
              
                
               
            }else if (this.state.graphType === 'MTD') {
                PathName = '/123456789012/' + this.state.distributionId + '/' + this.state.graphType + '/mtd.csv'
                console.log(PathName)
              
                
               
            } else if (this.state.graphType === 'monthly') {
                PathName = '/123456789012/' + this.state.distributionId + '/' + this.state.graphType + '/wtd.csv'
                console.log(PathName)
              
                
               
            } else if (this.state.graphType === 'Daily') {
                PathName = '/123456789012/' + this.state.distributionId + '/' + this.state.graphType + '/' + this.state.fullDate + '.csv'
                console.log(PathName)
              
                
               
            } else if (this.state.graphType === 'Weekly') {
                PathName = '/123456789012/' + this.state.distributionId + '/' + this.state.graphType + '/' + this.state.weekNo + '.csv'
                console.log(PathName)
              
                
               
            } else if (this.state.graphType === 'Monthly') {
                PathName = '/123456789012/' + this.state.distributionId + '/' + this.state.graphType + '/' + this.state.monthly + '.csv'
                console.log(PathName)
              
                
               
            }
            else {
                alert('Please Add Filter Correctly')
            }

        } else {
            alert('Please Add Filter Correctly')
        }

        if(PathName !== ''){
            this.setState({graphScreen:true})
            this.load_graph(PathName)
        }

    }
    handleShow_instractions() {
        console.log('true')
        this.setState({ setShow_instractions: true, show_instractions: true })
    }
    handleClose_instractions() {
        this.setState({ setShow_instractions: false, show_instractions: false })
    }
    handleShow_config_new(e) {
        console.log('true')
        this.setState({ handle_showConfig_new: true, show_config_new: true })
    }
    handleShow_config_delete(e) {
        console.log('true')
        this.setState({ handle_showConfig_delete: true, show_config_delete: true })
    }
    handleClose_config() {
        this.setState({ handle_showConfig_new: false, handle_showConfig_delete: false, show_config_new: false, show_config_delete: false })
    }

    getDistributionList() {
        PostData('getCloudFrontDistributions', 'GET', '').then((response) => {
            let CFList = []
            let promise = []
            let CloudFront = response.DistributionList.Items
            promise.push(CloudFront.forEach((value, index) => {
                let cf_id = value.Id.toString();
                let comment = value.Comment.toString();
                CFList.push({ CFID: cf_id, CF_comment: comment })
            }));
            Promise.all(promise)

            this.setState({ distributionList: CFList })
        })

    }

    // Handle Graph Type And Click Events on Graph Type Dropdown
    selectedIndex(event) {
        this.setState({ graphType: event, graphType_name: event })
    }

    // Get Selected Index And Show Distribution on dropdown
    selectedIndex_cf(cf, comment) {
        this.setState({ distributionId: cf, distributionName_id: cf });
    }

    // Handle Modal Distribution Click Event
    handleClick(e) {
        this.setState({ NewDistributionId: e.target.value })
        console.log('Event :' + e.target.value)
        console.log(this.state.NewDistributionId)
    }

    // Add Distributions
    addDistribution() {
        // let requestBody = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ distributionList: newCFList })
        // }

        fetch("http://localhost:3001/addDistributions").then((data) => {
            data.json().then((data1) => {
                this.setState({ setShow_config: false, show_config: false })
                console.log(data1)
            })
        })
    }

    // Set Onload Operations
    UNSAFE_componentWillMount() {

        if (sessionStorage.getItem("userData")) {
            var todaydate = new Date();
            let month = todaydate.getMonth();
            let year = todaydate.getFullYear();
            let day = todaydate.getDate()

            let fullDate = year + "-" + (month + 1) + "-" + day;
            let monthly = year + "-" + (month + 1);


            var oneJan = new Date(todaydate.getFullYear(), 0, 1);
            var numberOfDays = Math.floor((todaydate - oneJan) / (24 * 60 * 60 * 1000));
            var result = Math.ceil((todaydate.getDay() + 1 + numberOfDays) / 7);
            console.log(fullDate)
            this.setState({ fullDate: fullDate, monthly: monthly, weekNo: year + '-' + result })
        }
        else {

            this.setState({ redirect: true });
        }
    }


    // Get Report Type From Dropdown Menu
    getReport(e) {
        this.setState({ daily: e.target.name })
    }

    // Get Current Dates, Days, Months, Hours, Seconds
    setStartDate(e) {
        let newDate = new Date(e);
        let month = newDate.getMonth();
        let year = newDate.getFullYear();
        let day = newDate.getDate()
        let fullDate = year + "-" + (month + 1) + "-" + day;
        let monthly = year + "-" + (month + 1);
        this.setState({ startDate: e, fullDate: fullDate, monthly: monthly })


        // 
        var todaydate = new Date(e);
        var oneJan = new Date(todaydate.getFullYear(), 0, 1);
        var numberOfDays = Math.floor((todaydate - oneJan) / (24 * 60 * 60 * 1000));
        var result = Math.ceil((todaydate.getDay() + 1 + numberOfDays) / 7);
        this.setState({ startDate: e, fullDate: fullDate, monthly: monthly, weekNo: year + '-' + result })

    }

    // Logout
    logout() {
        this.setState({ redirect: true });
        sessionStorage.removeItem("userData")
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/login"></Redirect>
        }
        return (
            <div className="height-css">
                {/* Header Start */}
                <div className="row App">
                    <div >
                        <img src={logo} alt="logo" width="150" />
                    </div>
                    <div style={{ right: 10, position: 'absolute' }}>
                        <label className="menuList-dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" value='' id="dropdown-basic" >
                                    Configure
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="" name="handle_showConfig_new" onClick={this.handleShow_config_new} >New Configuration</Dropdown.Item>
                                    <Dropdown.Item href="" name="handle_showConfig_delete" onClick={this.handleShow_config_delete} >Delete Configuration</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                        </label>
                        {/* <label className="menuList"><Link to="#" className="link">Configure</Link></label> */}
                        <label className="menuList" ><Link to="/support" className="link">Support</Link></label>
                        <label className="menuList"><Link to="/profile" className="link">Profile</Link></label>
                        <label className="menuList" onClick={this.logout}><span className="link">Logout</span></label>
                    </div>

                </div>
                {/* Header End */}

                {/* {this.state.loader === true ? <div className="loading">Loading&#8230;</div> : ''} */}

                <div >
                    <div className="d-flex flex-row-reverse selection-menu">
                        <div className='div-css'>
                            <Button variant="success" size='sm' id="button" onClick={() => this.loadGraph()} block>Load Graph</Button>
                        </div>
                        <div className='div-css'>
                            {this.state.graphType === 'Hourly' ?
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" size='sm' value='' id="dropdown-basic" style={{ width: 130 }}>
                                        {this.state.daily}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {
                                            this.state.dailyArray.map((value, index) => {
                                                return (<Dropdown.Item key={index} href="" name={value.name} onClick={this.getReport} >{value.name}</Dropdown.Item>)
                                            })
                                        }


                                    </Dropdown.Menu>
                                </Dropdown>

                                : ""}
                        </div>
                        {/* Hourly */}
                        <div style={{ margin: 10 }}>
                            {this.state.graphType === 'Hourly' ?
                                <DatePicker className="btn btn-secondary btn-sm" dateFormat="dd-MM-yyyy" selected={this.state.startDate} onChange={date => this.setStartDate(date)}>
                                </DatePicker>
                                : ''}

                        </div>

                        {/* Daily */}
                        <div style={{ margin: 10 }}>
                            {this.state.graphType === 'Daily' ?
                                <DatePicker className="btn btn-secondary btn-sm" dateFormat="dd-MM-yyyy" selected={this.state.startDate} onChange={date => this.setStartDate(date)}>
                                </DatePicker>
                                : ''}

                        </div>


                        {/* Weekly */}
                        <div style={{ margin: 10 }}>
                            {this.state.graphType === 'Weekly' ?
                                <span style={{ paddingLeft: 10 }}>Week No:{this.state.weekNo}</span>
                                : ''}
                        </div>
                        
                        <div style={{ margin: 10 }}>
                            {this.state.graphType === 'Weekly' ? <div>
                                <DatePicker className="btn btn-secondary btn-sm" dateFormat="dd-MM-yyyy" selected={this.state.startDate} onChange={date => this.setStartDate(date)}>
                                </DatePicker>

                            </div>
                                : ''}

                        </div>

                        {/* Monthly */}
                        <div style={{ margin: 10 }}>
                            {this.state.graphType === 'Monthly' ? <div>
                                <DatePicker className="btn btn-secondary btn-sm" style={{ width: 20 }} dateFormat="MM-yyyy" showMonthYearPicker selected={this.state.startDate} onChange={date => this.setStartDate(date)}>
                                </DatePicker>

                            </div>
                                : ''}

                        </div>

                        <div className="div-css">
                            {/* <p>Please Select Report:</p> */}
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" size='sm' value='' id="dropdown-basic" >
                                    {this.state.graphType}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="" onClick={() => this.selectedIndex('Hourly')} >Hourly</Dropdown.Item>
                                    <Dropdown.Item href="" onClick={() => this.selectedIndex('Daily')} >Daily</Dropdown.Item>
                                    <Dropdown.Item href="" onClick={() => this.selectedIndex('Today')} >Today</Dropdown.Item>
                                    <Dropdown.Item href="" onClick={() => this.selectedIndex('Weekly')} >Weekly</Dropdown.Item>
                                    <Dropdown.Item href="" onClick={() => this.selectedIndex('Monthly')} >Monthly</Dropdown.Item>
                                    <Dropdown.Item href="" onClick={() => this.selectedIndex('WTD')} >(WTD) Week To Date</Dropdown.Item>
                                    <Dropdown.Item href="" onClick={() => this.selectedIndex('MTD')} >(MTD) Month to Date</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                        <div className="div-css">
                            {/* <p>Please Select Distribution:</p> */}
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" size='sm' id="dropdown-basic" style={{ textOverflow: 'ellipsis', overflow: "hidden" }}>
                                    {this.state.distributionId}
                                </Dropdown.Toggle>
                                <Dropdown.Menu id='distrbutionList' >
                                    {
                                        this.state.distributionList.map((distribution, index) => (
                                            <Dropdown.Item href="" key={index} onClick={() => this.selectedIndex_cf('' + distribution.CFID + '', '' + distribution.CF_comment + '')} >{distribution.CFID} ({distribution.CF_comment})</Dropdown.Item>
                                        ))
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>


                    </div>

                <div>
                    <button style={{margin:10}}className='btn btn-primary btn-sm' onClick={this.handleShow_instractions}>Instractions </button>
                    <p style={{margin:10}} >Please Click <b>"Instractions"</b> to know how to configure account with Edge Insights</p>
                </div>
                    <hr></hr>
                    <div className="row div-width">

                        <div className="col-md-6 ">
                            <p > <b style={{ padding: 5 }}>Selected Distribution :</b>{this.state.distributionName_id}</p>
                        </div>
                        <div className="col-md-6">
                            <p> <b>Report Type :</b>{this.state.graphType_name}</p>
                        </div>

                    </div>
                    {/* Graph Start */}
                    {this.state.graphScreen === true ?

                        <div style={{ alignItems: 'center' }} className="animate__bounceInDown">


                            <div className="row div-width"  style={{ padding: 20, border: 1 }}>
                                <div className="col-lg-5  border-css">
                                    {this.state.loader === true ? <div> <Spinner className="Spinner" animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner> <span className="Spinner1">Loading...</span></div> : ''}

                                    <Chart
                                        options={this.state.line1}
                                        series={this.state.series}
                                        type="donut"
                                        width="400"
                                        style={{ paddingLeft: 15 + '%' }}
                                    />
                                </div>
                                <div className="col-lg-5 border-css">
                                    {this.state.loader === true ? <div> <Spinner className="Spinner" animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner> <span className="Spinner1">Loading...</span></div> : ''}
                                    <Chart
                                        options={this.state.line1}
                                        series={this.state.series2}
                                        type="donut"
                                        width="400"
                                        style={{ paddingLeft: '15%' }}
                                    />
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row div-width" style={{ padding: 20, border: 1 }}>

                                <div className="col-md-5 border-css">
                                    {this.state.loader === true ? <div> <Spinner className="Spinner" animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner> <span className="Spinner1">Loading...</span></div> : ''}
                                    <Chart
                                        options={this.state.lineChart_1.options}
                                        series={this.state.lineChart_1.series}
                                        type="line"

                                    />
                                </div>
                                <hr></hr>
                                <div className="col-md-5 border-css">
                                    {this.state.loader === true ? <div> <Spinner className="Spinner" animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner> <span className="Spinner1">Loading...</span></div> : ''}
                                    <Chart
                                        options={this.state.lineChart_2.options}
                                        series={this.state.lineChart_2.series}
                                        type="line"

                                    />
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row div-width" style={{ padding: 20, border: 1 }}>
                                <div className="col-md-5 border-css" >
                                    {this.state.loader === true ? <div> <Spinner className="Spinner" animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner> <span className="Spinner1">Loading...</span></div> : ''}
                                    <Chart
                                        options={this.state.lineChart_3.options}
                                        series={this.state.lineChart_3.series}
                                        type="line"

                                    />
                                </div>
                                <div className="col-md-5 border-css">
                                    {this.state.loader === true ? <div> <Spinner className="Spinner" animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner> <span className="Spinner1">Loading...</span></div> : ''}
                                    <Chart
                                        options={this.state.lineChart_4.options}
                                        series={this.state.lineChart_4.series}
                                        type="line"

                                    />
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row div-width" style={{ padding: 20, border: 1 }}>
                                <div className="col-md-5 border-css">
                                    {this.state.loader === true ? <div> <Spinner className="Spinner" animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner> <span className="Spinner1">Loading...</span></div> : ''}
                                    <Chart
                                        options={this.state.lineChart_5.options}
                                        series={this.state.lineChart_5.series}
                                        type="line"

                                    />
                                </div>

                            </div>
                        </div>
                        : 
                        <div>
                            <h3>Please Select Filter</h3>
                        </div>
                        }
                    {/* Graph Ends */}
                </div>
                <hr></hr>

               

                {/* Instraction Modal */}
                <Modal show={this.state.show_instractions} onHide={this.handleClose_instractions} centered size="xl">
                    <form>
                        <Modal.Header closeButton>
                            <Modal.Title>Instraction for Setting up Account for Marketplace Access</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <StepperData />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose_instractions}>Close</Button>
                            <Button variant="primary" onClick={this.handleClose_instractions}>Save Changes</Button>
                        </Modal.Footer>
                    </form>
                </Modal>

                {/* Configuration Modal */}
                <Modal show={this.state.show_config_new} onHide={this.handleClose_config} centered size="xl">
                    <form>
                        <Modal.Header closeButton>
                            <Modal.Title>Configure your Account</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div >
                               
                                    {this.state.distributionList.map((distribution, index) => {
                                        return (
                                            <div key={index}>

                                                <input type="radio" id={distribution.CFID} name="distribution_id" value={distribution.CFID} onChange={this.handleClick} />
                                                <label style={{ padding: 10 }} htmlFor={distribution.CFID}>{distribution.CFID}</label>
                                            </div>
                                        )
                                    })}
                                


                            </div>
                            {/* {this.state.distributionList.map((distribution, index) => {
                                return (
                                    <div key={index}>
                                        <label>{index + 1 + ". "} </label>
                                        <FormControlLabel
                                            control={<Checkbox name="checkedA" onChange={(checked) => this.handleClick(checked.target.checked, distribution.CFID)} />}
                                            label={'' + distribution.CFID + ' (' + (distribution.CF_comment !== '' ? distribution.CF_comment : 'No Name') + ')'}
                                        />
                                    </div>

                                )
                            }

                            )} */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose_config}>Close</Button>
                            <Button variant="success" onClick={() => this.deleteDistribution()}>Add</Button>
                        </Modal.Footer>
                    </form>
                </Modal>


                {/* Configuration Modal - Delete */}
                <Modal show={this.state.show_config_delete} onHide={this.handleClose_config} centered size="xl">
                    <form>
                        <Modal.Header closeButton>
                            <Modal.Title>Delete Configuration</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div >
                            
                                    {this.state.distributionList.map((distribution, index) => {
                                        return (
                                            <div key={index}>

                                                <input type="radio" id={distribution.CFID} name="distribution_id" value={distribution.CFID} onChange={this.handleClick} />
                                                <label style={{ padding: 10 }} htmlFor={distribution.CFID}>{distribution.CFID}</label>
                                            </div>
                                        )
                                    })}
                                


                            </div>
                            {/* {this.state.distributionList.map((distribution, index) => {
                                return (
                                    <div key={index}>
                                        <label>{index + 1 + ". "} </label>
                                        <FormControlLabel
                                            control={<Checkbox name="checkedA" onChange={(checked) => this.handleClick(checked.target.checked, distribution.CFID)} />}
                                            label={'' + distribution.CFID + ' (' + (distribution.CF_comment !== '' ? distribution.CF_comment : 'No Name') + ')'}
                                        />
                                    </div>

                                )
                            }

                            )} */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose_config}>Close</Button>
                            <Button variant="danger" onClick={() => this.deleteDistribution()}>Delete</Button>
                        </Modal.Footer>
                    </form>
                </Modal>

                 {/* Footer */}
                 <Footer />
            </div >
        )
    }
}


export default Home