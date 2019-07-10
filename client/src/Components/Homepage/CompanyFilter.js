import React, { Component } from 'react';
import { Grid, Typography, FormControlLabel, Checkbox } from '@material-ui/core';

export default class CompanyFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [],
        }
    }
    componentDidMount() {
        fetch(`http://localhost:3001/getAllCompanies`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(json => json.data)
            .then(data => {
                // console.log(data);
                localStorage.setItem('CompaniesArray', JSON.stringify(data));
                this.setState({ companies: data });
            })
    }

    state = {
        "Samsung": true,
        "Google": true,
        "Sapient": true,
        "Amazon": true
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








