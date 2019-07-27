import React, { Component } from 'react';
import { Grid, Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import events from '../../apis/events';

export default class CompanyFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [],
        }
    }
    componentDidMount() {
        events.get("getAllCompanies")
            .then(json => json.data)
            .then(data => {
                localStorage.setItem('CompaniesArray', JSON.stringify(data));
                this.setState({ companies: data.data });
            })
    }

    handleChange = name => event => {
        this.setState({ ...this.state, [name]: event.target.checked });
    }
    render() {
        return (
            <Grid item style={{ margin: '10px' }}>
                <Typography align="center" color="primary" gutterBottom>Company</Typography>
                <Grid item>
                    {
                        (this.state.companies) &&
                        this.state.companies.map(company =>
                            (
                                <FormControlLabel key={company}
                                    control={
                                        <Checkbox
                                            checked={this.state[company]}
                                            onChange={this.handleChange(company)}
                                            value={company}
                                            color="primary"
                                        />
                                    }
                                    label={company}
                                />
                            )
                        )
                    }
                </Grid>
            </Grid>
        )
    }
}








