const getData = async () => {
    const data = await fetch('http://localhost:8080/api');
    const dataParsed = await data.json();
    return dataParsed
}


// export default getData;
export default getData;
