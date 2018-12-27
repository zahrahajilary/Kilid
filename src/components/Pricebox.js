import Rx from 'rxjs';
import React, { Component } from 'react';

import Doubleslider from './Doubleslider';

class Pricebox extends Component {
    state = {
        lowerVal: 1100,
        upperVal: 450000
    };
    getMinObservable = (el, ev) => {
        const obs = Rx.Observable.fromEvent(el, ev);
        obs.subscribe((event)=>{
            this.setState({
                lowerVal: event.target.value
            });
        })
    }
    getMaxObservable = (el, ev) => {
        const obs = Rx.Observable.fromEvent(el, ev);
        obs.subscribe((event)=>{
            this.setState({
                upperVal: event.target.value
            });
        })
    }

    render() {
        return (
            <div className="pricebox">
                <div className="ptitle">محدوده قیمت</div>
                <Doubleslider min={1000} max={500000} minObservable={this.getMinObservable} maxObservable={this.getMaxObservable}/>
                <span className="price-show">
                    <label>{this.state.lowerVal}</label>
                    تومان
                    <label>{this.state.upperVal}</label>
                    تومان
                </span>
                <div>
                    <button className="btn">اعمال محدودیت</button>
                </div>
            </div>
        )
    }
}

export default Pricebox;