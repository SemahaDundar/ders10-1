
function C1(props) {

    console.log("Render başladı..");

    return (
        <>
            <p>Ben component 1</p>
            <p>Mesaj: {props.mesaj}</p>
        </>
    );
}

export default C1;