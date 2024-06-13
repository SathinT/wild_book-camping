import React, { Component } from "react";
import { CartItem } from "../../model/CartItem";
import { ModifyCart } from "../ModifyCart/ModifyCart";

interface ProductState {
    activeItems: { [key: number]: boolean };  // Object to track active state of items
}

interface ShoppingCartProps {
    itemList: CartItem[];
}

export class ShoppingCart extends Component<ShoppingCartProps, ProductState> {
    constructor(props: ShoppingCartProps) {
        super(props);
        this.state = {
            activeItems: {},
        };
    }

    addToCartOnClick = (itemId: number) => {
        this.setState((prevState) => ({
            activeItems: {
                ...prevState.activeItems,
                [itemId]: true,
            },
        }));
    };

    render() {
        return (
            <div className="flex justify-between gap-2 mx-5 pt-[10%] pb-[5%]">
                <div className="w-3/4">
                    <table className="w-full">
                        <thead>
                        <tr className="bg-[#FF9800] bg-opacity-50">
                            <th className="text-black text-2xl font-bold border-black border-[0.5px] px-1">ID</th>
                            <th className="text-black text-2xl font-bold border-black border-[0.5px] px-1">Name</th>
                            <th className="text-black text-2xl font-bold border-black border-[0.5px] px-1">Unit Price</th>
                            <th className="text-black text-2xl font-bold border-black border-[0.5px] px-1">Quantity</th>
                            <th className="text-black text-2xl font-bold border-black border-[0.5px] px-1">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.itemList.length === 0 ? (
                            <tr className="hover:bg-[#FF9800] hover:bg-opacity-40">
                                <td colSpan={5} className="border-black border-[0.5px]">
                                    <p className="text-center text-xl pt-6 pb-6">No Content to Show</p>
                                </td>
                            </tr>
                        ) : (
                            this.props.itemList.map((item) => (
                                <tr key={item.product.id} className="bg-[#FF9800] bg-opacity-0 hover:bg-opacity-30">
                                    <td className="border-black border-[0.5px] text-xl px-3">{item.product.id}</td>
                                    <td className="border-black border-[0.5px] text-xl px-1">{item.product.name}</td>
                                    <td className="border-black border-[0.5px] text-xl px-1">{`${item.product.price} ${item.product.currency}`}</td>
                                    <td className="border-black border-[0.5px] text-xl px-1 text-center">
                                        {this.state.activeItems[item.product.id] ? (
                                            <ModifyCart data={{ product: item.product, isAdded: this.state.activeItems[item.product.id] }} />
                                        ) : (
                                            <button
                                                onClick={() => this.addToCartOnClick(item.product.id)} className="bg-gray-700 text-white px-14 text-center">
                                                {item.itemCount}
                                            </button>
                                        )}
                                    </td>
                                    <td className="border-black border-[0.5px] text-xl px-1">{item.itemCount * item.product.price}</td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>

                <div className="bg-amber-500 bg-opacity-50 w-1/4 rounded-md">
                    <h1 className="p-5 text-2xl font-bold">Payment Info.</h1>
                    <h2 className="pl-8 text-xl font-semibold">Payment Method</h2>
                    <div className="flex justify-center gap-8 mt-8">
                        <div className="border-2 border-black rounded-3xl bg-transparent active:bg-black active:text-white">
                            <h1 className="text-lg font-semibold p-2 mx-12 text-black">Visa</h1>
                        </div>
                        <div className="border-2 border-black rounded-3xl bg-transparent active:bg-black active:text-white">
                            <h1 className="text-lg font-semibold p-2 mx-10">Master</h1>
                        </div>
                    </div>
                    <div className="pt-4 mx-8">
                        <input
                            type="text"
                            placeholder="Name On Card"
                            className="bg-transparent border-b-2 border-black placeholder-black outline-none w-full mt-8"
                        />
                        <input
                            type="password"
                            placeholder="Card Number"
                            className="bg-transparent border-b-2 border-black placeholder-black outline-none w-full mt-8"
                        />
                        <div className="flex justify-between gap-8">
                            <input
                                type="month"
                                placeholder="Expiration Date"
                                className="bg-transparent border-b-2 border-black placeholder-black outline-none w-full mt-8"
                            />
                            <input
                                type="number"
                                placeholder="CVV"
                                className="bg-transparent border-b-2 border-black placeholder-black outline-none w-full mt-8"
                            />
                        </div>
                        <button
                            className="mt-8 mb-4 w-full cursor-pointer transition-all bg-[#FF9800] text-black text-xl font-semibold px-6 py-2 rounded-lg border-gray-700 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:[#FF9800] shadow-[#FF9800] active:shadow-none"
                        >
                            CheckOut
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
