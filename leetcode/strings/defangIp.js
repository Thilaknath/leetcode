function defangIP (address) {
   return address.replace(/\./g, '[.]')
}

console.log(defangIP('e851e2fa.4f00.4609.9dd2.9b3794c59619'))