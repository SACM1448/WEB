class validacion {
  constructor() {}
  inputValid(input, regex) {
    return input.match(regex) ? true : false;
  }
  validNames(value) {
    const nombresRx =
      /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    const respose = this.inputValid(value, nombresRx);
    return respose;
  }
  validMail(value) {
    const mailRx = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
    const respose = this.inputValid(value, mailRx);
    return respose;
  }
  /*validPhoneNumber(value) {
        const phoneRx = /^3[0-9]{9}$/;
        const response = this.inputValid(value, phoneRx);
        return response;
    }*/
  validAge(value) {
    const ageRx = /^(1[89]|[2-8][0-9]|90)$/;
    return this.inputValid(value, ageRx);
  }
}
export { validacion as valid };
