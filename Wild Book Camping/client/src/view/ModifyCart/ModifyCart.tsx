import React, {Component} from "react";
import {CartItem} from "../../model/CartItem";

interface ModifyCartProps {
    data: any
}

interface ModifyCartState {
    itemCount: number
}

export class ModifyCart extends Component<ModifyCartProps, ModifyCartState> {

    public static itemList: CartItem[] = [];

    constructor(props: ModifyCartProps) {
        super(props);
        this.state = {
            itemCount: 1
        };
    }

    componentDidMount() {
        const {itemCount} = this.state;

        if (this.props.data.isAdded) {
            const existingItem = ModifyCart.itemList.find(item => item.product.id === this.props.data.product.id);
            if (!existingItem) {
                ModifyCart.itemList.push({
                    product: this.props.data.product,
                    itemCount: itemCount
                });
            }
        }
        console.log(ModifyCart.itemList);
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCartState>, snapshot?: any) {
        if (prevState.itemCount !== this.state.itemCount) {
            const item = ModifyCart.itemList.find(item => item.product.id === this.props.data.product.id);
            if (item) {
                item.itemCount = this.state.itemCount;
            } else {
                ModifyCart.itemList.push({
                    product: this.props.data.product,
                    itemCount: this.state.itemCount
                });
            }
        }
        console.log(ModifyCart.itemList);
    }

    render() {
        const {itemCount} = this.state;

        const onDecreaseItemCount = () => {
            this.setState(prevState => ({
                itemCount: prevState.itemCount > 1 ? prevState.itemCount - 1 : prevState.itemCount
            }));
        }

        const onIncreaseItemCount = () => {
            this.setState(prevState => ({
                itemCount: prevState.itemCount + 1
            }));
        }

        return (
            <div
                className="flex justify-between w-[45%] cursor-pointer transition-all bg-gray-700 text-white font-semibold px-6 py-2 rounded-lg border-[#FF9800] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                                      active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:[#FF9800] shadow-[#FF9800] active:shadow-none">
                <button className="text-2xl hover:font-extrabold hover:text-orange-500"
                        onClick={onDecreaseItemCount}>-</button>
                <small className="font-bold text-xl text-white">{itemCount}</small>
                <button className="text-2xl hover:font-extrabold hover:text-orange-500"
                        onClick={onIncreaseItemCount}>+</button>
            </div>
        );
    }
}
