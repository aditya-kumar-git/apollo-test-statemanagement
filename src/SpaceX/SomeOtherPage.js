// import { useQuery } from '@apollo/client'
import { useQuery } from '@apollo/client'
import React from 'react'
import { client, Launch_Details } from './graphql/Queries'
// import { acessClient } from './graphql/Queries';

export default function SomeOtherPage() {


    const data = client.cache.readQuery({
        query: Launch_Details
    });

    if (data) {
        console.log("it's here ", data.launchesPast[0]);
    }
    return (
        <div>
            Secon component is here
        </div>
    )
}
