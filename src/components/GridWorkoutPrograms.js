import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class GridWorkoutPrograms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataWorkoutPrograms: []
        };

        // bind
        this.OnMouseOverCard = this.OnMouseOverCard.bind(this);
        this.OnMouseOutCard = this.OnMouseOutCard.bind(this);
        this.fetchGridData = this.fetchGridData.bind(this);
    };


    OnMouseOverCard(workoutProgram) {

        // start clean
        this.state.dataWorkoutPrograms.forEach((wop, index) => {
            wop["isHover"] = false;
        })

        // set isHover
        let selectedWOP = this.state.dataWorkoutPrograms.find(wop => wop.id === workoutProgram.id);
        selectedWOP["isHover"] = true;

        this.setState({
            dataWorkoutPrograms: this.state.dataWorkoutPrograms
        })
    }

    OnMouseOutCard(workoutProgram) {

        this.state.dataWorkoutPrograms.forEach((wop, index) => {
            wop["isHover"] = false;
        })

        this.setState({
            dataWorkoutPrograms: this.state.dataWorkoutPrograms
        })
    }

    componentDidMount() {
        this.fetchGridData();
    }

    fetchGridData() {
        fetch(`http://localhost:3000/db.json`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ dataWorkoutPrograms: data });
            })
    }

    render() {

        let _columnsJSX = [];
        return (
            <div>

                <div className="container divWeightLossBlurb">
                    <div className="row">
                        <div className="col-xs-12  col-md-12 text-center">
                            <div className="divWeightLossBlurbHeader">Weight Loss</div>
                            <p className="pWeightLossBlurbContent">Welcome to the center of it all. The Fitness Shop presents you with hundreds of workout programs designed to guide your weight loss journey.</p>
                        </div>
                    </div>
                </div>

                <TransitionGroup className="container">
                    {
                        this.state.dataWorkoutPrograms.map((workoutProgram, index) => {
                            let heartName = `heartFor_${workoutProgram.id}`;
                            let columnJSX = <CSSTransition
                                key={workoutProgram.id}
                                in={workoutProgram.isHover === true}
                                timeout={120}
                                classNames="scaleOnHover">
                                <div className="col-xs-12 col-md-3 gridContainer"
                                    onMouseEnter={e => this.OnMouseOverCard(workoutProgram)}
                                    onMouseLeave={e => this.OnMouseOutCard(workoutProgram)} >
                                    <input type='checkbox' id={heartName} className="heartCheckbox" />
                                    <label htmlFor={heartName}>&#9829;</label>
                                    <img src={workoutProgram.imgURL} alt={workoutProgram.imgAltText} className="centered responsive imgThumbnail" />
                                    <div className="divSubHeaderGrid">{workoutProgram.captionText}</div>
                                    <div className="divSubSubHeaderGrid">{workoutProgram.subCaptionText}</div>
                                </div>
                            </CSSTransition>;

                            _columnsJSX.push(columnJSX);

                            // append row
                            if (_columnsJSX.length === 4 || index + 1 === this.state.dataWorkoutPrograms.length) {
                                let row = <div className="row" key={`row_${index}`}>
                                    {_columnsJSX.map((column, index) => {
                                        return column;
                                    })}
                                </div>
                                _columnsJSX = [];
                                return row;
                            }
                        })}

                    <div className="row">
                        <div className="col-xs-12  col-md-12 text-center">
                            <button className="viewMore">View More</button>
                        </div>
                    </div>
                </TransitionGroup>
            </div>
        )
    }
}

export default GridWorkoutPrograms