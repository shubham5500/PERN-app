function errorMiddlerware(error, req, res, next) {
    console.log('ERROR happened!', error);
}

export default errorMiddlerware;