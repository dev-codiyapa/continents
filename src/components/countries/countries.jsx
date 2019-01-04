import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Countries = (props)=>(
    
    <Query query={gql`
    {
        countries{
            name 
            code
            phone
            languages{code}
            currency
            native
            continent{
              code
            }
          }
    }    
    `}>
     {({loading, error,data})=>{
        if(loading) return <tr className="text-info text-center"><td>Loading</td></tr>;
        if(error) return <tr className="text-info text-center"><td>Soemthing went wrong</td></tr>;
        return data.countries.map(({name,code,currency,phone,emoji})=>(
            <tr key={name}>
                <td>{name}</td>
                <td>{code}</td>
                <td>{phone}</td>
                <td>{currency}</td>
                <td>{emoji}</td>
            </tr>
        ));
    }}
    </Query>
);

export default Countries;