function Square({va, onClick}){
    return(
        <button className="square" onClick={onClick}>{va}</button>
    );
}
export default Square