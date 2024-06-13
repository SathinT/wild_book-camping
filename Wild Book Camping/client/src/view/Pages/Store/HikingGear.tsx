import {Component} from "react";
import "../../../App.css";
import {ProductTemplate} from "../../common/Product Template/ProductTemplate";

export class HikingGear extends Component {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        try {
            const response = await fetch("./hiking-gear.json");
            const jsonData = await response.json();
            this.setState({ data: jsonData });
        } catch (error) {
            console.log("Error Fetching Data");
        }
    };
    render() {
        // @ts-ignore
        const { data } = this.state;
        return (
            <>
                <div id="hikingGearbg"></div>
                <div className="flex mx-60 flex-wrap">
                    {data.map((product: any) => (
                        <ProductTemplate key={product.id} data={product} />
                    ))}
                </div>
            </>
        );
    }
}