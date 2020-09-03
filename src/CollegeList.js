import React, { Component } from 'react'
import CollegeDetail from './colleges.json';
import ScrollData from './ScrollData'

const arr = CollegeDetail.colleges;
console.log(arr);
class CollegeList extends Component {

    constructor() {
        super();
        this.state = {
            collegeArray: [],
            hasMore: true
        }
    }
    componentDidMount = () => {
        let updatedArr = arr.slice(0, 10);
        this.setState({ collegeArray: updatedArr })

    };
    handleScroll = () => {
        let updatedArr = arr.slice(10, 20);
        this.setState((state) => {

            state.collegeArray.push(...updatedArr);
            console.log(state);

            if (state.collegeArray.length < 50) return state;
        })

    }
    render() {

        const { collegeArray } = this.state;
        console.log(collegeArray.length);
        return (
            <>
                <div className="college-data">
                    {collegeArray.map(ele => {

                        return (

                            <div key="" className="rectangle-1 ele">

                                <div className="college-image">
                                    {/* <img src={collegePic} /> */}

                                    <div className="college-detail">
                                        <div className="college-card">
                                            <div className="college-image-inner"></div>
                                            <div className="rating -Very-Good">
                                                <span className="text-style-1">{ele.rating}</span>/5 <br />{ele.rating_remarks}
                                            </div>
                                            <div className="card-overlay">


                                                <div className="Rectangle-2">
                                                    <span className="Best-college-2018">
                                                        {ele.tags[0]}
                                                    </span>
                                                </div>
                                                <div className="Rectangle-2a">
                                                    <span className="kms-away">
                                                        {ele.tags[1]}
                                                    </span>
                                                </div>
                                            </div>
                                            <div id="-in-260-colleges-in-north-campus">#{ele.ranking} </div>
                                        </div>
                                        <div className="Hansraj-College-Delhi-University">
                                            <span>{ele.college_name}</span>
                                        </div>
                                        <div className="Near-Vishwavidyalya-Metro-Station-outer">
                                            <span className="Near-Vishwavidyalya-Metro-Station">{ele.nearest_place[0]} |</span>

                                            <span className="-Kms-away-from-bus-stand "> {ele.nearest_place[1]}</span>


                                        </div>
                                        <br />
                                        <div className="-Match-25kms-from-GTB-Nagar-7-Kms-from-Rajiv-Chowk">
                                            <div id="rajiv-chowk-outer">
                                                <span className="text-style-1">
                                                    93% Match :</span><span className="text-style-2"> 2.5kms</span> from GTB Nagar, <span className="text-style-2">7 Kms</span> from Rajiv Chowk
                            </div>
                                        </div>
                                        <br />
                                        <div className="Flat-Rs2000-off-upto-Rs-500-wallet-to-avail-LOGIN">
                                            <span className="text-style-1">Flat Rs</span><span className="text-style-2 ">2,000</span><span className="text-style-1"> off + upto Rs</span><span className="text-style-2">500</span><span className="text-style-1">wallet! to avail...</span><span className="text-style-3">LOGIN</span>
                                        </div>

                                    </div>
                                </div>



                            </div>


                        )
                    })}
                </div>
                <ScrollData onChange={this.handleScroll} />
            </>
        )
    }
}
export default CollegeList
