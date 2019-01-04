import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import './continents.css';
import Countries from '../countries/countries';
// import Countries  from '../countries/countries';

const Continents = (props)=>(
    <Query query={gql`
        {
            continents{
                name 
                code
            }
        }    
        `}>
    {({loading, error,data})=>{
        if(loading) return <p className="text-center text-info">Loading ...</p>;
        if(error) return <p className="text-center text-danger">Something went wrong !</p>;
        return data.continents.map(({name,code})=>( 
            <div className="panel-group" id="accordion" key={name}>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href={'#'+code}>
                            <span className="text-primary">{name}</span>
                            <span className="text-info country-code"><small>({code})</small></span>
                            <span className="glyphicon glyphicon-chevron-down pull-right text-muted"></span> 
                        </a>
                        </h4>
                    </div>
                    <div id={code} className="panel-collapse collapse">
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>code</th>
                                    <th>Phone</th>
                                    <th>Currency</th>
                                </tr>
                            </thead>
                            <tbody><Countries /></tbody>   
                        </table>
                    </div>
                </div>        
            </div>
        ))
    }}
    </Query>
)
export default Continents;