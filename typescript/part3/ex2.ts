class MyPolynomial {
    coeffs: number[]
    constructor(coeffs: number[]) {
        this.coeffs = coeffs
    }
    getDegree(): number {
        return this.coeffs.length - 1
    }
    toString(): String {
        return this.coeffs.map((e, i) => `${e>0?`${e}${i < this.coeffs.length - 1 ? `x^${this.coeffs.length - 1 - i}`:""}`:""}`).filter(e=>e!="").join("+")
    }
    evaluate(x: number): number {
        return this.coeffs.reduce((acc, val, i) => acc + val * (x ** this.coeffs.length - 1 - i), 0)
    }
    add(right: MyPolynomial): MyPolynomial {
        let coeffHigh = this.coeffs.length >= right.coeffs.length ? this.coeffs : right.coeffs
        let coeffLow = this.coeffs.length < right.coeffs.length ? this.coeffs : right.coeffs
        
        const rs=coeffHigh.map((val, i) => {
            return i < coeffHigh.length - coeffLow.length ? val : val + coeffLow[i-coeffHigh.length + coeffLow.length]
        })
        return new MyPolynomial(rs)
    };
    multiply(right:MyPolynomial):MyPolynomial{
        let newCoeff:number[]=[]
        
        for(let i=0;i<(this.coeffs.length-1)+(right.coeffs.length-1)+1;i++)
        {
            newCoeff.push(0)
        }
        
        this.coeffs.map((e,i)=>{
            right.coeffs.map((val,j)=>{
                newCoeff[newCoeff.length-1-(this.coeffs.length-1-i)-(right.coeffs.length-1-j)]+=e*val
            })
        })
        return new MyPolynomial(newCoeff)
    }
}
const coeff:MyPolynomial=new MyPolynomial([1,0,3,4])
console.log(coeff.toString())
console.log(coeff.add(new MyPolynomial([1,2,0,4,5])).toString())
console.log(coeff.multiply(new MyPolynomial([1])).toString())