function C1() {

    /*
    Her render süreci sonunda yeni bir interval callback başlatmış oluyoruz
    */
    setInterval( ()=>{
        console.log("Zamanlayıcı çalıştı.");
    } , 4000 )

    return (
        <p>C1 komponenti</p>
    )
}

export default C1;