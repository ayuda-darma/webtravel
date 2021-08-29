import React from 'react'
import Button from 'elements/Button'

export default function MostPicked(props) {
    return (
        <section className="container">
            <h4 className="mb-4">Most Picked</h4>
            <div className="container-grid">
                {
                    props.data.map((item, index) => {
                        return <div className={`item column-4${index === 0 ? " row-2" : " row-1"}`}>
                            <div className="card">Card {index + 1}</div>
                        </div>
                    })
                }

            </div>
        </section>
    )
}
