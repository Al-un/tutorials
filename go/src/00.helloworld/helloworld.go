package main

func main() {
	// V7: Packages

	// // V5: functions
	// var bill = calcBill(5, 3)
	// fmt.Println("bill:", bill)
	// area, perim := rectProps(10.8, 5.6)
	// fmt.Printf("Area %f Perimeter %f\n", area, perim)
	// area2, perim2 := rectPropsNamed(10.8, 5.6)
	// fmt.Printf("Area %f Perimeter %f", area2, perim2)
	// a, _ := rectProps(10.8, 5.6)
	// fmt.Println("Area:", a)

	// // V4: constants
	// const hello = "Hello Go!"
	// var name = "Sam"
	// fmt.Printf("type %T value %v\n", name, name)
	// fmt.Printf("type %T value %v", hello, hello)
	// // type mixing
	// // var defaultName = "Sam" //allowed
	// // type myString string
	// // var customName myString = "Sam" //allowed
	// // customName = defaultName        //not allowed
	// const a = 5
	// var intVar = a
	// var int32Var int32 = a
	// var float64Var float64 = a
	// var complex64Var complex64 = a
	// fmt.Println("intVar", intVar, "\nint32Var", int32Var, "\nfloat64Var", float64Var, "\ncomplex64Var", complex64Var)

	// // V3: types
	// a, b := true, false
	// c, d := a && b, a || b
	// fmt.Println("a:", a, "b:", b, "c:", c, "d:", d)
	// // type & size
	// var e = 89
	// f := 95
	// fmt.Println("e:", e, "f:", f)
	// fmt.Printf("e (%T) size: %d\nf (%T) size: %d", e, unsafe.Sizeof(e), f, unsafe.Sizeof(f))
	// // integer / floating
	// g, h := 5.67, 8.97
	// fmt.Printf("type of a %T b %T\n", f, g)
	// sum := g + h
	// diff := g - h
	// fmt.Println("sum", sum, "diff", diff)
	// i, j := 56, 89
	// fmt.Println("sum", i+j, "diff", i-j)
	// // complex
	// k, l := 6+7i, complex(6, 7)
	// cadd := k + l
	// fmt.Println("sum:", cadd)
	// cmul := k * l
	// fmt.Println("product:", cmul)
	// // string
	// first := "Naveen"
	// last := "Ramanathan"
	// name := first + " " + last
	// fmt.Println("My name is", name)
	// // type conversion
	// m, n := 55, 67.8
	// o := m + int(n)
	// p := float64(m) + n
	// fmt.Println("o:", o, "p:", p)

	// V2: variable
	// // var age int
	// var age = 42
	// fmt.Println("My age is", age)
	// age = 29
	// fmt.Println("My age is", age)
	// age = 54
	// fmt.Println("My age is", age)
	// // var width, height int = 100, 50
	// var width, height = 100, 50
	// fmt.Println("width is", width, "height is", height)
	// // Global declaration
	// var (
	// 	name    = "Pouet"
	// 	address = "trou du cul du monde"
	// 	partner string
	// )
	// fmt.Println("Name", name, "is living", address, "with", partner)
	// partner = "Plop"
	// fmt.Println("Name", name, "is living", address, "with", partner)
	// // Shorthand
	// firstName, lastName := "toto", "Pouet"
	// fmt.Println("Fullname is", firstName, lastName)
	// firstName, middleName := "Toto", "De"
	// fmt.Println("Fullname is", firstName, middleName, lastName)
	// // Math
	// a, b := 7.2, 5.0
	// c := math.Min(a, b)
	// fmt.Println("Min is", c)

	// V1: helloworld
	// fmt.Println("Hello World")
}

func calcBill(price, qty int) int {
	return price * qty
}

func rectProps(length, width float64) (float64, float64) {
	return length * width, 2 * (length + width)
}

func rectPropsNamed(length, width float64) (area, perimeter float64) {
	area = length * width
	perimeter = 2 * (length + width)
	return
}
