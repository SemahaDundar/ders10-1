function Component1(props) {


    props.aksiyon();
    if (props.aksiyon !== undefined) {
        props.aksiyon();
    }
    return (
        <>



            <p>Ben 1. component </p>
            <p>Benim mesaj özelliğimin değeri: {JSON.stringify(props.mesaj.ad)}</p>
        </>


    );
}

export default Component1;