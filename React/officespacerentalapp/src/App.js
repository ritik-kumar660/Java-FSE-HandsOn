import office from "./office.jpg";

function App() {

    const officeList = [
        {
            Name: "DBS",
            Rent: 50000,
            Address: "Chennai"
        },
        {
            Name: "Regus",
            Rent: 70000,
            Address: "Bangalore"
        },
        {
            Name: "WeWork",
            Rent: 55000,
            Address: "Hyderabad"
        }
    ];

    return (
        <div style={{ marginLeft: "40px" }}>

            <h1>Office Space , at Affordable Range</h1>

            {
                officeList.map((item, index) => {

                    let color = {
                        color: item.Rent <= 60000 ? "red" : "green"
                    };

                    return (
                        <div key={index}>

                            <img
                                src={office}
                                width="25%"
                                height="25%"
                                alt="Office Space"
                            />

                            <h2>Name: {item.Name}</h2>

                            <h3 style={color}>
                                Rent Rs. {item.Rent}
                            </h3>

                            <h3>
                                Address: {item.Address}
                            </h3>

                            <hr />

                        </div>
                    );

                })
            }

        </div>
    );
}

export default App;