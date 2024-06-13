interface Props{
    cardName:string,
    cardValue:string,
    cardColor:string
    withbackGroudStyle?:boolean
}


export default function InfoCard(prop:Props){

    return(
        <>
            {prop.withbackGroudStyle ? 
            (<div className={`${prop.cardColor} flex-row text-center after:w-[75px] after:h-[55px] after:absolute after:top-0 after:right-0 after:bg-[url(https://bootstrapdemos.wrappixel.com/monster/dist/assets/images/shape/shape-2.png)] after: text-white relative flex-1 p-6 rounded-xl shadow before:contents-[""] before:bottom-[-13px] before:left-0 before:w-[65px] before:h-[65px] before:absolute before:bg-[url(https://bootstrapdemos.wrappixel.com/monster/dist/assets/images/shape/shape-1.png)]`}>
                <p className="text-2xl font-medium mt-2">{prop.cardValue}</p>
                <p className=" font-medium text-sm">{prop.cardName}</p>
            </div>) : 
            (<div className={`${prop.cardColor} flex-1 p-6 rounded-xl shadow`}>
                <p className="text-lg font-medium">{prop.cardName}</p>
                <p className="text-xl font-medium mt-2">{prop.cardValue}</p>
            </div>)}
            
        </>
    );
}