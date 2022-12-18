import React, {Component} from 'react'
import Result from'./Result.js'
import { Button, Form } from 'semantic-ui-react'

export default class Main extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            statePrice: 0,
        }
    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    
    };

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {

        const duration_minutes = this.state.value

        let price_per_minute = 2
        let price_per_hour = 22
        let price_per_day = 60
        let price_per_week = 105

        let one_day = 1440
        let one_week = 10080
        let two_weeks = 20160

        let number_of_weeks = duration_minutes / one_week
        let price_under_twelve_minutes = duration_minutes * price_per_minute

        let total_price = 0

        if (duration_minutes >= 1 && duration_minutes <= 11) {
            total_price = price_under_twelve_minutes
        } else if (duration_minutes >= 12 && duration_minutes <= 60) { 
            total_price = price_per_hour
        } else if (duration_minutes >= 61 && duration_minutes <= 179) {
            total_price = price_per_hour * 2
        } else if (duration_minutes >= 180 && duration_minutes <= one_day) {
            total_price = price_per_day
        } else if (duration_minutes >= 1441 && duration_minutes <= one_week) {
            total_price = price_per_week
        } else if (duration_minutes >= 10081 && duration_minutes <= two_weeks) {
            total_price = price_per_week * 2
        } else if (duration_minutes > two_weeks) {
            total_price = price_per_week * number_of_weeks
        }

        this.setState({statePrice: Math.round(total_price * 100) / 100})

        event.preventDefault()
    }


    render() {

        return(
            <div class="Form">
                <p>
                    Price per minute: £2<br/>
                    Price per hour: £22<br/>
                    Price per day: £60<br/>
                    Price per week: £105<br/>
                </p>

                <p>Please enter the number of minutes you wish to book a room for:</p>
          
                <Form onSubmit={this.handleSubmit} >
                    <Form.Field onChange={this.handleChange}>
                        <input placeholder="Enter a number"/>
                    </Form.Field>
                    <Button positive type='submit'>GET PRICE</Button>
                </Form>
                <br/>
                    <Result dataPrice={this.state.statePrice}/>
            </div>
        
        )

    }
    
}


