import React from 'react';
import Table from 'react-bootstrap/Table';






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
                    <td>{this.props.covidApiData.countries_stat[2].country_name}</td>
                    <td>{this.props.covidApiData.countries_stat[2].cases}</td>
                    <td>{this.props.covidApiData.countries_stat[2].deaths}</td>
                    <td>{this.props.covidApiData.countries_stat[2].total_recovered}</td>
                    </tr>
                    <tr>
                    <td>{this.props.covidApiData.countries_stat[3].country_name}</td>
                    <td>{this.props.covidApiData.countries_stat[3].cases}</td>
                    <td>{this.props.covidApiData.countries_stat[3].deaths}</td>
                    <td>{this.props.covidApiData.countries_stat[3].total_recovered}</td>
                    </tr>
                    <tr>
                    <td>{this.props.covidApiData.countries_stat[4].country_name}</td>
                    <td>{this.props.covidApiData.countries_stat[4].cases}</td>
                    <td>{this.props.covidApiData.countries_stat[4].deaths}</td>
                    <td>{this.props.covidApiData.countries_stat[4].total_recovered}</td>
                    </tr>
                    <tr>
                    <td>{this.props.covidApiData.countries_stat[5].country_name}</td>
                    <td>{this.props.covidApiData.countries_stat[5].cases}</td>
                    <td>{this.props.covidApiData.countries_stat[5].deaths}</td>
                    <td>{this.props.covidApiData.countries_stat[5].total_recovered}</td>
                    </tr>

                    <tr>
                    <td>{this.props.covidApiData.countries_stat[6].country_name}</td>
                    <td>{this.props.covidApiData.countries_stat[6].cases}</td>
                    <td>{this.props.covidApiData.countries_stat[6].deaths}</td>
                    <td>{this.props.covidApiData.countries_stat[6].total_recovered}</td>
                    </tr>

                    <tr>
                    <td>{this.props.covidApiData.countries_stat[7].country_name}</td>
                    <td>{this.props.covidApiData.countries_stat[7].cases}</td>
                    <td>{this.props.covidApiData.countries_stat[7].deaths}</td>
                    <td>{this.props.covidApiData.countries_stat[7].total_recovered}</td>
                    </tr>

                    <tr>
                    <td>{this.props.covidApiData.countries_stat[8].country_name}</td>
                    <td>{this.props.covidApiData.countries_stat[8].cases}</td>
                    <td>{this.props.covidApiData.countries_stat[8].deaths}</td>
                    <td>{this.props.covidApiData.countries_stat[8].total_recovered}</td>
                    </tr>

                    <tr>
                    <td>{this.props.covidApiData.countries_stat[9].country_name}</td>
                    <td>{this.props.covidApiData.countries_stat[9].cases}</td>
                    <td>{this.props.covidApiData.countries_stat[9].deaths}</td>
                    <td>{this.props.covidApiData.countries_stat[9].total_recovered}</td>
                    </tr>
                    
                </tbody>
        </Table>
        )
    }
}

export default TableComponent;