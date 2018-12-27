import React, { Component } from 'react';


class Doubleslider extends Component {

    state = {
        lowerVal: 1100,
        upperVal: 450000
    }

    onSliderChange = (event) => {
        let lowerSlider = document.querySelector('#lower');
        let upperSlider = document.querySelector('#upper');
        let lowerVal = parseInt(lowerSlider.value);
        let upperVal = parseInt(upperSlider.value);

        if (lowerVal > upperVal - 4) {
            upperSlider.value = lowerVal + 4;

            if (upperVal === upperSlider.max) {
                lowerSlider.value = parseInt(upperSlider.max) - 4;
            }

        }

        if (upperVal < lowerVal + 4) {
            lowerSlider.value = upperVal - 4;

            if (lowerVal === lowerSlider.min) {
                upperSlider.value = 4;
            }
        }
        var inpuEvent = new Event('input', {
            'bubbles': true,
            'cancelable': true
        });
        lowerSlider.dispatchEvent(inpuEvent);
        upperSlider.dispatchEvent(inpuEvent);
    }
    componentDidMount() {
        let lowerSlider = document.querySelector('#lower');
        let upperSlider = document.querySelector('#upper');
        this.props.minObservable(lowerSlider, 'input');
        this.props.maxObservable(upperSlider, 'input');
        lowerSlider.value = 1100;
        upperSlider.value = 450000;
    }
    render() {
        return (
            <div>
                <span className="multi-rang">
                    <input id="lower" type="range"  onChange={this.onSliderChange} min={this.props.min} max={this.props.max} />
                    <input id="upper" type="range"  onChange={this.onSliderChange} min={this.props.min} max={this.props.max} />
                </span>
            </div>
        )
    }
}

export default Doubleslider;