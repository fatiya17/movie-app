// props = properties
// props adalah data yang dikirim dari komponen lain ke komponen ini

// membuat komponen Hello
// komponen Hello menerima props
function Hello(props) {
    const { name } = props;
    return (
        // element yang di return oleh komponen Hello
        <div>
            <h2>Hello React</h2>
            <p>Saya {name} - Frontend Engineers</p>
        </div>
    )
}

// mengexport Hello agar bisa digunakan di file lain
export default Hello;