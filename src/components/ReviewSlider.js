import React from 'react';
const fakeData = [
    {
        quotes: "‘",
        content: 'To date I have lost 14 Kilos (30 pounds) and my fitnes level is at least the same as when I was actively engaged in sport (if not better), thanks to iFit and the range and variation of fitness programs available.',
        reviewauthor: '—Graham Lambourne'
    },
    {
        quotes: "‘",
        content: 'IFit has changed my life, I am now fully able to get off my couch and run around the block, without assistance.',
        reviewauthor: '—Joe Singleton'
    },
    {
        quotes: "‘",
        content: 'I have lost SO much weight with IFit!  The plumpness has melted away and I am thin! Thin I say! Yaay!!!!.',
        reviewauthor: '—Cindy Jones'
    }

];

const fakeFetchApi = (query) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(fakeData), 500);
        // setTimeout(() => reject(new Error('api error'), 500);
    });
}



class CarouselIndicator extends React.Component {
    render() {
        return (
            <li>
                <a className={this.props.index === this.props.activeIndex
                    ? "carousel__indicator carousel__indicator--active"
                    : "carousel__indicator"} onClick={this.props.onClick} />
            </li>
        );
    }
}

class CarouselSlide extends React.Component {
    render() {
        return (
            <li
                className={
                    this.props.index === this.props.activeIndex
                        ? "carousel__slide carousel__slide--active"
                        : "carousel__slide"
                }
            >
                <div className="carousel-slide__content">
                    <div className="reviewQuotes">{this.props.slide.quotes}
                        <span className="spanReviewQuotes">{this.props.slide.quotes}</span></div>
                    <div >
                        <p className="reviewContent">{this.props.slide.content} </p>
                        <div className="reviewAuthor">{this.props.slide.reviewauthor}</div>
                    </div>

                </div>
            </li>
        );
    }
}

class ReviewSlider extends React.Component {
    constructor(props) {
        super(props);
        fakeFetchApi('fakeData').then((dataSlides) => {
            this.setState({ slides: dataSlides });
        });

        this.goToSlide = this.goToSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);

        this.state = {
            activeIndex: 0,
            slides: []
        };
    }

    goToSlide(index) {
        this.setState({
            activeIndex: index
        });
    }
    goToPrevSlide(e) {
        e.preventDefault();
        let index = this.state.activeIndex;
        let slidesLength = this.state.slides.length;
        if (index < 1) {
            index = slidesLength;
        }
        --index;
        this.setState({
            activeIndex: index
        });
    }

    goToNextSlide(e) {
        let index = this.state.activeIndex;
        let slidesLength = this.state.slides.length - 1;
        if (index === slidesLength) {
            index = -1;
        }
        ++index;
        this.setState({
            activeIndex: index
        });
    }


    componentDidMount() {
        setInterval(() => {
            this.goToNextSlide();
        }, 3400);
    }

    render() {
        return (
            <div className="carousel">
                <ul className="carousel__slides">
                    {this.state.slides.map((slide, index) =>
                        <CarouselSlide
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            slide={slide}
                        />
                    )}
                </ul>
                <ul className="carousel__indicators">
                    {this.state.slides.map((slide, index) =>
                        <CarouselIndicator
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            isActive={this.state.activeIndex === index}
                            onClick={e => this.goToSlide(index)}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

export default ReviewSlider;