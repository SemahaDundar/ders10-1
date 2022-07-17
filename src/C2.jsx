
function C2(props) {

    console.log("C2 render oldu");

    return (
        <>
            {console.log("Return render işlemi...")}
            <p>Ben C2 içinde bir paragrafım.</p>
            {props.children}
            <p>
                {props.sn}
            </p>
        </>
    );
}

export default C2;