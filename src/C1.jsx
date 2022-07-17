import C2 from "./C2";

function C1(props) {
    let saniye = 25;

    return (
        <C2 sn={saniye}>
            <p>Ben C1 komponenti içinde bir paragrafım.</p>
        </C2>
    );
}

export default C1;