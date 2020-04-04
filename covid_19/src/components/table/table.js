import React from 'react';
import Table from 'react-bootstrap/Table'






class TableComponent extends React.Component {

    // getData = () => {
    //     this.props.covidApiData.countries_stat.map(country => {
    //       return country.country_name
    //     })
    //   }

    render () {
    console.log(this.props.covidApiData.countries_stat[0])
       
        return (
            <Table striped bordered hover responsive="lg">
            <thead>
            <tr>
                        <th>Country</th>
                        <th>Total Cases</th>
                        <th># of deaths</th>
                        <th># recovered</th>
            </tr>   
            </thead>
                <tbody>
                    <tr>
                    <td>{this.props.covidApiData.countries_stat[0].country_name}</td>
                    <td>{this.props.covidApiData.countries_stat[0].cases}</td>
                    <td>{this.props.covidApiData.countries_stat[0].deaths}</td>
                    <td>{this.props.covidApiData.countries_stat[0].total_recovered}</td>
                    </tr>
                    <tr>
                    <td>{this.props.covidApiData.countries_stat[1].country_name}</td>
                    <td>{this.props.covidApiData.countries_stat[1].cases}</td>
                    <td>{this.props.covidApiData.countries_stat[1].deaths}</td>
                    <td>{this.props.covidApiData.countries_stat[1].total_recovered}</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>4</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>5</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>6</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>

                    <tr>
                    <td>7</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>

                    <tr>
                    <td>8</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>

                    <tr>
                    <td>9</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>

                    <tr>
                    <td>10</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    
                </tbody>
        </Table>
        )
    }
}

export default TableComponent;