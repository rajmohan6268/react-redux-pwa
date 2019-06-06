import React from 'react'
import { Chart } from "react-charts";
const Graph = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row"
                    style={{
                        width: "100%",
                        height: "300px"
                    }}
                >
                    <Chart
                        data={[
                            {
                                label: "Series 1",
                                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
                            },
                            {
                                label: "Series 2",
                                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
                            }
                        ]}
                        axes={[
                            { primary: true, type: "linear", position: "bottom" },
                            { type: "linear", position: "left" }
                        ]}
                    />
                    <div className="center"><label className="center">TEST</label></div>
                    
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default Graph