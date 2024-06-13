import {Component} from "react";
import {ModifyCart} from "../../ModifyCart/ModifyCart";


interface ProductProps {
    data: any
}

interface ProductState{
    isActive:boolean
}
export class ProductTemplate extends Component<ProductProps,ProductState> {

    constructor(props: ProductProps) {
        super(props);
        this.state={
            isActive:false
        }
    }
    render() {

        const {data} = this.props;
        const image = require("../../../assests/store/" + data.image);
        return (
            <>
                <div className="bg-[#FF9800] border-4 border-[#FF9800] rounded-xl bg-opacity-40 w-80 h-[52] m-4 hover:shadow-2xl hover:shadow-[#FF9800] ">
                    <div className="flex justify-center">
                        <img className="w-56 h-56" src={image}/>
                    </div>
                    <h1 className="text-black font-bold text-2xl text-left mx-3">{data.name}</h1>
                    <p className="font-semibold text-2xl text-left mx-3">{data.currency}{data.price}</p>
                    {/*{this.state.isActive ?*/}
                    {/*    <ModifyCart data={{product: data, isAdded: this.state.isActive}}/> :*/}
                    {/*    <button onClick={this.addToCartOnClick} className=" m-3 ml-24 cursor-pointer transition-all bg-gray-700 text-white font-semibold px-6 py-2 rounded-lg border-[#FF9800] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]*/}
                    {/*                  active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:[#FF9800] shadow-[#FF9800] active:shadow-none">*/}
                    {/*        Add To Cart*/}
                    {/*    </button>*/}
                    {/*}*/}

                    <div className="flex justify-between mx-3 my-5">
                        {this.state.isActive ?
                        <ModifyCart data={{product: data, isAdded: this.state.isActive}}/> :
                        <button onClick={this.addToCartOnClick} className="cursor-pointer transition-all bg-gray-700 text-white font-semibold px-6 py-2 rounded-lg border-[#FF9800] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px}
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:[#FF9800] shadow-[#FF9800] active:shadow-none">
                            Add to Cart
                        </button>
                    }

                        <button className="cursor-pointer transition-all bg-[#FF9800] text-black font-semibold px-6 py-2 rounded-lg border-gray-700 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px}
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:[#FF9800] shadow-[#FF9800] active:shadow-none">
                            View Item
                        </button>
                    </div>

                </div>
            </>
        );
    }

    addToCartOnClick = () => {
        // alert("Item Added To Cart")
        this.setState({isActive: true}, () => {
            console.log(this.state.isActive)
        })
    }
}
