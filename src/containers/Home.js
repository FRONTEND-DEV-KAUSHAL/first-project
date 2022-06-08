import React from 'react';

function Home({ data }) {
    return (
        data.map((d, i) => {
            return (
                <div key={i}>
                    <h1>{d.name}</h1>
                    <h1>{d.surname}</h1>
                    <h1>{d.grid}</h1>
                </div>
            )

        })

    )
}

export default Home;